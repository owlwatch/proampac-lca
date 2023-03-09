<template lang="pug">
.row.text-start.gx-5(
    v-if="analysis && analysis[tab.title]"
)
    .col-md-6
        h6.lca-heading {{ tab.title }} Overview
        p {{ analysis[tab.title].overview }}

    .col-md-6
        .row
            .col-auto
                .doughnut
                    doughnut(
                        :percent="reduction"
                    )
            
            .col
                h6.lca-heading.mb-3 Quick Comparison
                div(
                    v-if="materialsForComparison.length > 1"
                )
                    select.form-select.mb-3(
                        v-model="selectedMaterial"
                    )
                        option(
                            :value="i"
                            v-for="(m, i) in materialsForComparison"
                        ) {{ m.Core_Data.Material }}
                p
                    strong {{ material.Core_Data.Material }}
                    span(
                        v-html="comparisonString"
                    )

.row.text-start
    .col-12
        p(
            v-if="analysis && analysis[tab.title] && analysis[tab.title].market"
        )
            strong {{ analysis[tab.title].market }}
        
        // lets go through each of these
        table.stat-table
            thead
                tr
                    th
                    th(
                        v-for="stat in stats"
                    ) {{ stat.title }}
            tbody
                tr(
                    v-for="material in materials"
                )
                    th {{ material.Core_Data.Material }}
                    td.stat(
                        v-for="stat in stats"
                    )
                        .stat-bar(
                            :style="{ backgroundColor: stat.color, width: String(getStatPercent( material, stat.title ))+'%' }"
                            title=""
                        ) 
                            span {{ getStatPercent( material, stat.title) }}




</template>

<script setup lang="ts">
import { useLcaStore } from '../../stores/lca';
import { storeToRefs } from 'pinia';
import { toRefs, computed } from 'vue';
import Doughnut from './Doughnut.vue';
const store = useLcaStore();

const getStatPercent = function( material:any, title:string){
    const all = material[tab.value.title.replace(/\s/,'_')];
    const total = Object.keys(all).reduce( (total, v) => {
        return total + Number(all[v].replace(/[^\d\.]/gi, ''));
    }, 0);
    const v = Number(all[title].replace(/[^\d\.]/gi, ''));
    return (v / total) * 100;
}

const props = defineProps<{
    tab: {[k:string]: any}
}>();

const stats = [{
    title: "Material",
    color: '#62BB46',
},{
    title: "Manufacturing",
    color: '#FDBA12',
},{
    title: "Transportation",
    color: '#F57F29',
},{
    title: "End of Life",
    color: '#26C0F2',
}]

const {tab} = toRefs(props);
const {analysis, materialsForComparison, material, materials, baselineMaterial} = storeToRefs(store);

// get the percent
const reduction = computed( () => {
    if( !material.value || !baselineMaterial.value ){
        return 0;
    }
    const a = Number(material.value.Overall_ratings[tab.value.title]);
    const b = Number(baselineMaterial.value.Overall_ratings[tab.value.title]);

    return Math.max( 0, Math.round((b-a) / b * 100) );
});

const comparisonString = computed( () => {
    return tab.value.comparisonString.replace(/\$percent/, String(reduction.value)+'%')+' '+ baselineMaterial.value.Core_Data.Material;
});

const selectedMaterial = computed( {
    
    get: () => {
        if( material.value && materialsForComparison.value ){
            return materialsForComparison.value.indexOf( material.value )
        }
        return 0;
    },
    set: (i:number) => {
        if( materialsForComparison.value && materialsForComparison.value[i]){
            material.value = materialsForComparison.value[i];
        }
    }
})

</script>

<style lang="scss" scoped>
.doughnut {
    width: 220px;
}
.stat-table {
    width: 100%;
    border-collapse:collapse;
    th, td {
        padding: 0.75rem 0.5em 0.75rem 0;
    }
    td {
        border-left: 1px solid #ccc;
        width: 15%;
    }
    .stat-bar {
        height: 12px;
        min-width: 4px;
        span {
            display: none;
        }
    }
    tbody th {
        font-weight: 400;
        line-height: 1.25;
        font-size: 0.9rem;
        padding-left: 10px;
    }
    tbody tr:nth-child(even) {
        background-color: #f8f8f8;
    }
}
select {
    text-overflow: ellipsis
}
</style>