<template lang="pug">
ul.list-unstyled
    li(
        v-for="(item, index) in section.items"
    )
        bar-chart-bar(
            :item="item"
            :index="index"
            :range="minMax"
        )

</template>

<script lang="ts" setup>
import type { StatSection, StatSectionItem } from '@/types/lca';
import { computed, toRefs } from 'vue';
import IconCircle from '../icons/IconCircle.vue';
import BarChartBar from './BarChartBar.vue';

export interface Props {
    section : StatSection
}

const props = defineProps<Props>();
const {section} = toRefs(props);

const minMax = computed(() => {
    const values = section.value.items.map( item => {
        return Number(item.value.replace(/[^\d\.]/gi, ''));
    });

    const range = getRange(values);
    return {min: range[0], max: range[1]};
})

function getRange(numbers:Array<number>){
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    const range = max-min;

    const diff = range * 0.55;
    return [min-diff, max+diff];
}

const getInnerBarStyle = (item:StatSectionItem) => {
    const v = Number(item.value.replace(/[^\d\.]/gi,''));
    const p = (v - minMax.value.min) / (minMax.value.max - minMax.value.min);
    return {
        width: (200 * p)+'px',
        backgroundColor: item.material.display.color
    }
}

</script>

<style lang="scss">
.bar {

    .inner {
        transition: 0.5s all;
        width: 0px;
        height: 14px;
        background: #62BB46;
    }

}
</style>