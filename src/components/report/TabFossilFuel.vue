<template lang="pug">
tab-content(
    v-bind="props"
)
</template>

<script setup lang="ts">
const props = defineProps<{
    tab: {[k:string]: any}
}>();
</script>
