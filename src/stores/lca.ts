import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import type { LcaDataRow, LcaDataRowList } from "@/types/lca";

export const useLcaStore = defineStore("lca", () => {
	const market = ref<string>('');
	const material = ref<LcaDataRow>();
	const allMarketData = ref<Array<{[key:string]:string}>>([]);
	const allMaterials = ref<LcaDataRowList>([]);
	const allAnalysis = ref<Array<{[key:string]:string}>>([])

	const markets = computed(()=>{
		const values: string[] = [];
		allMaterials.value.forEach( (row: LcaDataRow) => {
			if( row['Core_Data'] && row['Core_Data']['Market']){
				const v = row['Core_Data']['Market'];
				if( !values.includes(v) ){
					values.push(v);
				}
			}
		});
		return values;
	});

	const materials = computed(() => {

		const colors: Array<string> = [
			'#E77724',
			'#78BE43',
			'#02A9E0',
			'#CC8899'
		];

		return allMaterials.value.filter( 
			(row : LcaDataRow) => row['Core_Data']['Market'] == market.value
		).map(
			(row : LcaDataRow, i: number) => {
				row.display = {color: colors[i%colors.length]};
				return row;
			}
		).sort( (a,b) => {
			return Number(a.Core_Data.Rank) - Number(b.Core_Data.Rank);
		})
	});

	const materialsForComparison = computed(() => {
		return materials.value.slice(1);
	});

	const baselineMaterial = computed(() => {
		return materials.value[0];
	});

	const analysis = computed(() => {
		var obj:{[key:string]:{[key:string]:string}} = {};
		allAnalysis.value.forEach( row => {
			obj[row.Metric] = {
				market: row[market.value],
				overview: row.Overview
			};
		});
		return obj;
	});

	const marketDetails = computed(() => {
		return allMarketData.value.find( (row : any) => {
			return row['Market'] == market.value
		});
	});

	function parseMaterialsJson(rows: Array<Array<string>>){

		let h1:Array<string> = [];
		let h2:Array<string> = [];

		allMaterials.value = [];
		
		rows.forEach( (row,i) => {
			if( i===0 ){
				let lastStr = '';
				h1 = row.map( str => {
					if( str ){
						lastStr = str;
					}
					return lastStr;
				});
			}
			else if( i===1 ){
				h2 = row;
			}
			else {
				const obj:{[key:string]:{[key:string]: string}} = {};
				h2.forEach( (str:string, i:number) => {
					// find the object name
					const h1Index : number = Math.min(i, (h1.length-1));
					const objName : string = h1[h1Index].replace(/\s/, '_');
					if( !obj[objName] ){
						obj[objName] = {};
					}
					obj[objName][h2[i]] = row[i];
				});
				allMaterials.value.push(obj);
			}
		});

	}

	function parseMarketsJson(rows: Array<Array<string>> ){

		allMarketData.value = [];

		const headers = rows.shift();
		if( !headers ){
			return [];
		}
		allMarketData.value = rows.map( row => {
			const obj: {[key:string]:string} = {};
			headers.forEach( (h:string, i:number) => {
				obj[h] = row[i];
			});

			return obj;
		});
	}

	function parseAnalysis(rows: Array<Array<string>> ){

		allAnalysis.value = [];

		const headers = rows.shift();
		if( !headers ){
			return [];
		}
		allAnalysis.value = rows.map( row => {
			const obj: {[key:string]:string} = {};
			headers.forEach( (h:string, i:number) => {
				obj[h] = row[i];
			});
			return obj;
		});
	}

	async function loadLcaData(sheetId: string, apiKey: string) {
		
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet`;
		try {
			// lets load the google sheet json
			const data = await fetch(url + '?' + [
				"key=" + apiKey,
				"ranges=" + encodeURIComponent('Materials Data'),
				"ranges=" + encodeURIComponent('Markets'),
				"ranges=" + encodeURIComponent('In Depth Analysis')
			].join('&'));

			const json = await data.json();

			parseMaterialsJson(json.valueRanges[0].values);
			parseMarketsJson(json.valueRanges[1].values);
			parseAnalysis( json.valueRanges[2].values );
			
			if( markets.value.length ){
				market.value = markets.value[0];
			}

		}catch(e){
			console.log(e);
		}
	};

	watch( market, (v) => {
		// set the material to the first one
		if( materials.value.length ){
			material.value = materialsForComparison.value[materialsForComparison.value.length-1];
		}
	});
	

	return { 
		market,
		material,
		baselineMaterial,
		allMaterials,
		allAnalysis,
		materials,
		materialsForComparison,
		markets,
		marketDetails,
		loadLcaData,
		analysis
	};
});
