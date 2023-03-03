<template lang="pug">
.row.text-start(
    v-if="analysis && analysis[tab.title]"
)
    .col-md-6
        h6.lca-heading {{ tab.title }} Overview
        p {{ analysis[tab.title].overview }}

    .col-md-6
        .row
            .col-auto
                .doughnut
                    p doughnut
            
            .col
                p Selector 


    

</template>

<script setup lang="ts">
import { useLcaStore } from '../../stores/lca';
import { storeToRefs } from 'pinia';
import { toRefs } from 'vue';
const store = useLcaStore();

const props = defineProps<{
    tab: {[k:string]: any}
}>();

const {tab} = toRefs(props);
const {analysis} = storeToRefs(store);
</script>

<style lang="scss" scoped>
.doughnut {
    width: 200px;
}
</style>