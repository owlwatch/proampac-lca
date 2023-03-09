<template lang="pug">
.d-flex.mb-1.align-items-center
    .bar.me-2(
        ref="bar"
        :style="getBarStyle(item)"
    )

    .number {{ item.value }}
</template>

<script lang="ts" setup>
import type { StatSectionItem } from '@/types/lca';
import { onMounted, onUpdated, toRefs, ref } from 'vue';

const props = defineProps<{
    item: StatSectionItem
    index: number,
    range: {min:number, max:number}
}>();

const {item, index, range} = toRefs(props);

const width = ref(0);
const bar = ref<HTMLDivElement>();

const getBarStyle = (item:StatSectionItem) => {
    return {
        backgroundColor: item.material.display.color
    }
}

const doUpdate =  () => {
    if( !bar.value ){
        return;
    }
    bar.value.style.width = '0px';
    setTimeout( () => {
        const v = Number(item.value.value.replace(/[^\d\.]/gi,''));
        const p = (v - range.value.min) / (range.value.max - range.value.min);
    
        if( bar.value ){
            bar.value.style.width = (200 * p)+'px'
        }
    }, 100 + index.value * 10);
};

onMounted(()=>{
    doUpdate()
});

onUpdated(()=>{
    doUpdate();
});
</script>

<style lang="scss" scoped>
.bar {
    transition: 0.5s all;
    width: 0px;
    height: 14px;
    background: #62BB46;
}
</style>