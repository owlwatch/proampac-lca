<template lang="pug">
// lets go through all of our stats
.stats
    section.stat-section(
        v-for="section of stats"
    )
        h6.lca-heading {{ section.title }}

        template(v-if="barCharts.includes(section.title)")
            bar-chart(
                :section="section"
            )

        template(v-else)
            ul.list-unstyled
                li(
                    v-for="item in section.items"
                )
                    icon-circle.me-2(
                        :color="item.material.display.color"
                    )

                    span {{ item.value }}
</template>

<script setup lang="ts">
import { useLcaStore } from '../../stores/lca';
import type { LcaDataRow } from '@/types/lca';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import IconCircle from '../icons/IconCircle.vue';
import BarChart from './BarChart.vue';

import type { StatSection } from '@/types/lca';

const {materials} = storeToRefs( useLcaStore() );

const ignore = [
    'Description Summary'
];

const barCharts = [
    'Product to Package Ratio',
    'Packaging Weight (g)',
    'Average SKU film weight  (Medium sized bag)'
];


const stats = computed( () => {
    
    const sections : StatSection[] = [];

    if( !materials.value || !materials.value[0] || !materials.value[0].Optional_Data ){
        return sections;
    }
    
    const dataKeys = Object.keys( materials.value[0].Optional_Data );
    dataKeys.forEach( key => {
        if( ignore.includes(key) ){
            return;
        }
        // see if all materials have a value
        if( !materials.value.every( material => {
            return material.Optional_Data[key] != '';
        }) ){
            return;
        }

        // make sure they aren't the same
        if( [ ...new Set( materials.value.map( material => {
                return material.Optional_Data[key];
            }))].length !== materials.value.length
        ){
            return;
        }
        sections.push({
            title: key,
            items: materials.value.map( material => {
                return {
                    material,
                    value: material.Optional_Data[key]
                }
            })
        })
    } );
    return sections;
});
</script>

<style lang="scss" scoped>
</style>