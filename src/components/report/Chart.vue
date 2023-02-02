<!-- Pug Template -->
<template lang="pug">
radar(
	v-if="data && data.datasets"
	:options="options"
	:data="data"
)
</template>

<!-- Script -->
<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
type ChartOptions
} from 'chart.js';

import { Radar } from 'vue-chartjs'

import { useLcaStore } from '../../stores/lca';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import type { Tick } from 'chart.js/dist/core/core.scale';
import type { LcaDataRow } from '@/types/lca';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const { materials } = storeToRefs( useLcaStore() );

const options : ChartOptions = {
	maintainAspectRatio: true,
	plugins: {
		legend: {
			display: false
		}
	},
	scales: {
		r: {
			beginAtZero: true,
			max: 10,
			pointLabels: {
				font: {
					size: 12,
				}
			},
			ticks: {
				showLabelBackdrop: false,
				font: {
					size: 14
				},
				callback: (tickValue, index, ticks) => {
					if( tickValue == '2' ){
						return 'Better';
					}
					if( tickValue == '4' ){
						return '↕';
					}
					else if( tickValue == '6') {
						return 'Worse'
					}
					return Number(tickValue)%2 == 0 ? '' : undefined;
				}
			}
		}
	}
}

const colors = ['#78BE43','#02A9E0','#E77724','#F4BE18']

const data = computed( () => {
	
	const rows = materials.value.filter( row => {
		return typeof row['Overall_ratings'] !== 'undefined';
	});

	// lets get the labels first
	if( !rows.length ){
		return {};
	}

	const labels = Object.keys( rows[0]['Overall_ratings']);
	const datasets = rows.sort( 
		(a:LcaDataRow,b:LcaDataRow) => Number(a['Core_Data']['Rank']) - Number(b['Core_Data']['Rank'])
	).map( (row, index) => ({
		label: row['Core_Data']['Material'],
		data: labels.map(label => row['Overall_ratings'][label]),
		backgroundColor: colors[index]+'10',
		borderColor: colors[index]
	}))
	return {
		labels: labels.map(s => s.toUpperCase().split(' ')),
		datasets
	}

});



</script>

<!-- SCSS Style -->
<style lang="scss">

</style>