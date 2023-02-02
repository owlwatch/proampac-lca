<!-- Pug Template -->
<template lang="pug">
div.row.justify-content-center
	.col-auto
		select.form-select.form-select-lg.dark(v-model="market")
			option(v-for="m in markets" :value="m") {{ m }}
</template>

<!-- Script -->
<script setup lang="ts">
import { useLcaStore } from '../stores/lca';
import { storeToRefs } from 'pinia';

const { markets, market } = storeToRefs(useLcaStore());
</script>

<!-- SCSS Style -->
<style lang="scss" scoped>
select.dark {
	background-color: rgba(0,0,0,0.8);
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
	color: #fff;
	border-color: rgba(255,255,255,0.5);
	border-radius: 0.8em;
}
</style>