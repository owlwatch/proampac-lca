<template>
	<h1>hello from a custom component!</h1>
	<p @click="count++">Clicked {{  count }}</p>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);

</script>
<style scoped>
h1{ color: blue}
</style>