<!-- Pug Template -->
<template lang="pug">
div.container
	.row
		.col-sm-12.col-md-6.d-flex.align-items-center.justify-content-center
			radar-chart
		.col-sm-12.col-md-6.text-start.align-items-start.justify-content-start
			div.mb-4(
				v-if="marketDetails && marketDetails.Objective"
			)
				h6 Objective
				p {{ marketDetails.Objective }}

			h6 Compare
	.row
		.col-12
			tabs
				tab( name="tab 1")
					p hello
				tab( name="tab 2")
					p Goodbye

</template>

<!-- Script -->
<script setup lang="ts">
import { ref } from 'vue';
import { useLcaStore } from '../stores/lca';
import { storeToRefs } from 'pinia';
import Tabs from './common/Tabs.vue';
import Tab from './common/Tab.vue';

// components
import RadarChart from './report/Chart.vue';

const store = useLcaStore();
const { markets, market, materials, marketDetails } = storeToRefs(store);

const props = defineProps<{
	googleSheetId?: string
	googleApiKey?: string
}>();

store.loadLcaData( String(props.googleSheetId), String(props.googleApiKey));



</script>

<!-- SCSS Style -->
<style lang="scss" scoped>
h6 {
	text-transform: uppercase;
	color: #A8A8AB;
	margin-bottom: 0.5em;
	
}
</style>