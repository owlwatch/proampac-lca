<!-- Pug Template -->
<template lang="pug">
.container.overflow-hidden
	.row.g-5
		.col-sm-12.col-md-6.d-flex.align-items-center.justify-content-center
			radar-chart
		.col-sm-12.col-md-6.text-start.align-items-start.justify-content-start
			div.mb-4(
				v-if="marketDetails && marketDetails.Objective"
			)
				h6.lca-heading Objective
				p {{ marketDetails.Objective }}

			h6.lca-heading Comparison

			ul.list-unstyled
				li.d-flex.align-items-start.my-2(
					style="line-height: 1.25"
					v-for="material in materials"
				)
					icon-circle(
						:style="{marginRight: '10px', marginTop: '0.15em'}"
						:color="material.display.color"
						size="1em"
					)
					div
						div {{ material.Core_Data.Material }}
						div.small.text-muted.mt-1 {{  material.Optional_Data["Description Summary"] }}

			// additional stats
			stats-section
.overflow-hidden.w-100
	.row
		.col-12
			.container.my-5
				.row.justify-content-center
					.col-12.col-xl-8
						h2.text-light-emphasis In-depth Analysis
						p.text-light-emphasis(
							v-html="lang('In-Depth Analysis', '', true)"
						)
			.tabs
				ul.nav.nav-tabs.report-tabs
					li.nav-item(
						v-for="tab in tabs"
					)
						a.nav-link(
							:class="{'active': activeTab == tab.key}"
							:href="`#${tab.key}`"
							@click.prevent="activeTab = tab.key"
						)
							component( :is="tab.icon")
							span(v-html="tab.titleHTML")
			.lca-tab-content.pt-5.pb-5
				.container(
					v-if="currentTab.content"
				)
					component( :is="currentTab.content" :tab="currentTab")

.container.mt-4.text-start
	h6.disclaimer-title Disclaimer
	.disclaimer.small.text-start(
		style="line-height: 1.3"
		v-html="lang('Disclaimer', '', true)"
	)
</template>

<!-- Script -->
<script setup lang="ts">

import {marked} from 'marked';

import { ref, shallowRef, computed } from 'vue';
import { useLcaStore } from '../stores/lca';
import { storeToRefs } from 'pinia';


// Icons
import IconFossilFuel from './icons/IconFossilFuel.vue';
import IconFreshwaterEutrophication from './icons/IconFreshwaterEutrophication.vue';
import IconGhg from './icons/IconGhg.vue';
import IconWaterUse from './icons/IconWaterUse.vue';
import IconCircle from './icons/IconCircle.vue';

// Tab Content
import TabFossilFuel from './report/TabFossilFuel.vue';
import TabFreshwaterEutrophication from './report/TabFreshwaterEutrophication.vue';
import TabGhg from './report/TabGhg.vue';
import TabWaterUse from './report/TabWaterUse.vue';
import TabContent from './report/TabContent.vue';

import StatsSection from './report/StatsSection.vue';

// components
import RadarChart from './report/RadarChart.vue';

const store = useLcaStore();
const lang = store.lang;
const { markets, market, materials, marketDetails, materialsForComparison } = storeToRefs(store);

const activeTab = ref('ghg');

const currentTab = computed(()=>{
	return tabs.find( tab => tab.key == activeTab.value );
});

const tabs = [
	{
		"key": 'ghg',
		"title": "Greenhouse Gas Emissions",
		"titleHTML": "Greenhouse Gas<br />Emissions",
		"comparisonString" : " emits <strong> $percent less Greenhouse Gas</strong> than the ",
		"icon": IconGhg,
		"content": TabContent
	},
	{
		"key": 'fossil-fuel',
		"title": "Fossil Fuel Usage",
		"titleHTML": "Fossil Fuel<br />Use",
		"comparisonString" : " uses <strong> $percent less fossil fuels</strong> than the ",
		"icon": IconFossilFuel,
		"content": TabFossilFuel
	},
	{
		"key": 'water-use',
		"title": "Water Use",
		"titleHTML": "Water<br /> Use",
		"comparisonString" : " uses <strong> $percent less water</strong> than the ",
		"icon": IconWaterUse,
		"content": TabContent
	},
	{
		"key": 'freshwater-eutrophication',
		"title": "Freshwater Eutrophication",
		"titleHTML": "Freshwater<br />Eutrophication",
		"comparisonString" : " <strong>has $percent less impact on the freshwater supply</strong> than the ",
		"icon": IconFreshwaterEutrophication,
		"content": TabContent
	}
]

const props = defineProps<{
	googleSheetId?: string
	googleApiKey?: string
}>();

store.loadLcaData( String(props.googleSheetId), String(props.googleApiKey));

</script>

<!-- SCSS Style -->
<!-- not scoped -->
<style lang="scss">

.lca-heading {
	text-transform: uppercase;
	color: #A8A8AB;
	margin-bottom: 0.5em;
	letter-spacing: 0.02em;
	font-weight: 600;
}
</style>

<!-- scoped -->
<style lang="scss" scoped>

h2 {
	color: #A8A8AB;
}

.disclaimer {
	color: #555;
	&:deep(*){
		font-size: 0.9rem;
		line-height: 1.4em;
	}
}
.report-tabs {
	display: flex;
	justify-content: center;
	border-bottom: 10px solid #F8F8F8;
	.nav-item {
		max-width: 25%;
		width: 12em;
		text-align: center;
		a.nav-link {
			padding: 0;
			@media( min-width: 600px ){
				padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
			}
			display: flex;
			flex-direction: column;
			height: 100%;
			border-width: 0!important;
			position: relative;
			color: #a8a8ab;
			&:after {
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				height: 10px !important;
				background-color: transparent !important;
				content: '';
				display: block;
				transition: 0.5s all;
			}
			&:hover, &:focus {
				border: 0;
				position: relative;
				color: var(--green);
				&:after {
					background-color: currentColor !important;
				}
				&:deep(path) {
					fill: currentColor !important;
				}
			}
			&.active {
				border: 0;
				position: relative;
				&:after {
					background-color: #A8A8AB !important;
				}
				&:deep(path) {
					fill: #000 !important;
				}
				span {
					color: #000;
				}
			}

			svg {
				display: block;
				margin: 0 auto;
				max-width: 80%;
				margin-bottom: 1em;
				&:deep(path) {
					transition: 0.2s all;
					fill: #A8A8AB !important;
				}
			}
			span {
				flex: 1;
				line-height: 1.4;
				text-align: center;
				text-transform: uppercase;
				font-size: 0.85rem;
				font-weight: 600;
				@media( min-width: 600px ){
					font-size: 1rem;
					font-weight: 700;
				}
				color: currentColor;
				padding-bottom: 0.75em;
			}
		}
	}
}
.tab-content {
	background-color: #fff;
}
.small-container {
	max-width: 1020px;
}
</style>