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
                        :percent="percent"
                    )
            
            .col
                p {{ baselineMaterial }}


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
                    v-for="material in materialsForComparison"
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
        return total + Number(all[v]);
    }, 0);
    return (all[title] / total) * 100;
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
},{
    title: "Use Phase",
    color: '#474C55',
}]

const {tab} = toRefs(props);
const {analysis, materialsForComparison, material, baselineMaterial} = storeToRefs(store);

// get the percent
const percent = computed( () => {
    if( !material.value || !baselineMaterial.value ){
        return 0;
    }
    const a = Number(material.value.Overall_ratings[tab.value.title]);
    const b = Number(baselineMaterial.value.Overall_ratings[tab.value.title]);

    return (b-a) / b * 100;
});

</script>

<style lang="scss" scoped>
.doughnut {
    width: 220px;
}
.stat-table {
    width: 100%;
    border-collapse:collapse;
    th, td {
        padding: 0.25em 0.5em 0.25em 0;
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
    }
}
</style>