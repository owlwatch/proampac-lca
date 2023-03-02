<template lang="pug">
.row(
    v-if="analysis && analysis[tab.title]"
)
    .col-md-6.text-start
        h6.lca-heading Overview
        p {{ analysis[tab.title].overview }}

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
