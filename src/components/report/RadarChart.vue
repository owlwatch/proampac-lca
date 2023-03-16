<!-- Pug Template -->
<template lang="pug">
radar(
	v-if="data && data.datasets"
	:options="options"
	:data="data"
)
teleport(
	v-if="tooltipEl && tooltipContext"
	:to="tooltipEl"
)
	.tooltip-body.text-start(
		:class="{['x-'+tooltipXY[0]]: true, ['y-'+tooltipXY[1]]: true}"
	)
		h4 {{ tooltipContext.tooltip.title.join(' ') }}
		table
			tr(v-for="point in tooltipContext.tooltip.dataPoints")
				td.d-flex.align-items-center
					div.point-bar(
						:style="pointBarStyle(point)"
					)
					div.point-label.ms-2 {{ point.formattedValue }}

</template>

<!-- Script -->
<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
type ChartOptions,
type ScriptableContext,
type ScriptableChartContext,
Chart,
type TooltipModel,
type DatasetChartOptions,
type TooltipLabelStyle,
type ChartData
} from 'chart.js';

import { Radar } from 'vue-chartjs'

import { useLcaStore } from '../../stores/lca';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import type { Tick } from 'chart.js/dist/core/core.scale';
import type { LcaDataRow } from '@/types/lca';
import type { CanvasFontSpec } from 'chart.js/dist/helpers/helpers.options';

export interface TooltipContext {
	chart: Chart
	tooltip: TooltipModel
}

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const { materials } = storeToRefs( useLcaStore() );

const tooltipContext = ref<TooltipContext>();
const tooltipEl = ref<HTMLDivElement>();

const initTooltip = (chart: Chart<'radar'>) => {
  
  if (!tooltipEl.value) {
	let el = document.createElement('div');
    el.style.opacity = '1';
	el.style.padding = '0';
    el.style.pointerEvents = 'none';
    el.style.position = 'absolute';
    el.style.transition = 'all .1s ease';
	chart.canvas.parentNode?.appendChild(el);
	tooltipEl.value = el;
  }
};

const externalTooltipHandler = (context: TooltipContext) => {
  // Tooltip Element
  const {chart, tooltip} = context;
  initTooltip(chart);

  if( undefined == tooltipEl.value ){
	return;
  }

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.value.style.opacity = '0';
    return;
  }
//   body.innerHTML = '<h1>test</h1>';
  
  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  // Set Text
  tooltipEl.value.style.opacity = '1';
  tooltipEl.value.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.value.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.value.style.font = (tooltip.options.bodyFont as CanvasFontSpec).string;
//   tooltipEl.value.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';

  tooltipContext.value = context;
};

const tooltipXY = computed(() => {
	if( !tooltipContext.value ){
		return ['',''];
	}
	const title = tooltipContext.value.tooltip.title.join(' ');
	switch( true ){
		case !!title.match(/greenhouse/i):
			return ['center', 'bottom']
		case !!title.match(/water\suse/i):
			return ['right', 'center']
		case !!title.match(/fossil/i):
			return ['left', 'center']
		default:
			return ['center', 'top']
	}
})

function pointBarStyle( point: any ){
	return {
		backgroundColor: point.dataset.borderColor,
		width: (200 * (point.parsed.r / 10)) + 'px'
	}
}

const options : ChartOptions = {
	maintainAspectRatio: true,
	aspectRatio: 5/4,
	interaction : {
		mode: 'index',
		axis: 'xy',
		intersect: false
	},
	plugins: {
		legend: {
			display: false
		},
		tooltip: {
			enabled: false,
			external: externalTooltipHandler,
			padding: 20,
			backgroundColor: 'rgba(255,255,255,0.95)',
			bodyColor: 'rgba(0,0,0,1)',
			titleColor: 'rgba(0,0,0,0.4)',
			titleFont: {
				weight: 'bold',
				size: 14,
			},
			bodyFont: {
				size: 14
			},
			titleMarginBottom: 10,
			borderWidth: 1,
			borderColor: 'rgba(0,0,0,0.2)',
			bodySpacing: 8,
			cornerRadius: 10,
			usePointStyle: true,
			boxPadding: 6,
			// xAlign: (context) => {
			// 	if( !context.tooltipItems.length ){
			// 		return;
			// 	}
			// 	const label = context.tooltipItems[0].label;
			// 	if( label == 'GREENHOUSE GAS EMISSIONS' || label == 'FRESHWATER EUTROPHICATION' ){
			// 		return 'center';
			// 	}
			// 	else if( label == 'WATER USE' ){
			// 		return 'left';
			// 	}
			// 	else {
			// 		return 'right';
			// 	}
			// },
			// yAlign: (context) => {
			// 	if( !context.tooltipItems.length ){
			// 		return;
			// 	}
			// 	const label = context.tooltipItems[0].label;
			// 	if( label == 'GREENHOUSE GAS EMISSIONS' ){
			// 		return 'top';
			// 	}
			// 	else if( label == 'FRESHWATER EUTROPHICATION' ){
			// 		return 'bottom';
			// 	}
			// 	else {
			// 		return 'center';
			// 	}
			// },
			callbacks: {
				labelPointStyle: (context) => {
					return {
						pointStyle: 'circle',
						rotation: 0
					}
				},
				label: (context) => {
					return String(context.parsed.r);
				},
				labelColor: function(context) {
					if( !context.dataset.borderColor ){
						return;
					}
					return {
						backgroundColor: context.dataset.borderColor,
						borderColor: context.dataset.borderColor,
						borderWidth: 2,
						borderDash: [2, 2],
						borderRadius: 2,
					} as TooltipLabelStyle;
				},
				title: (tooltipItems ) => {

					return (
						Array.isArray(tooltipItems[0].label) ? tooltipItems[0].label.join(' ') : tooltipItems[0].label
					) + ' RATING';
				}
			}
		}
	},
	scales: {
		r: {
			beginAtZero: true,
			max: 10,
			pointLabels: {
				font: {
					size: 12,
				}
			},
			ticks: {
				showLabelBackdrop: false,
				font: {
					size: 14
				},
				callback: (tickValue, index, ticks) => {
					if( tickValue == '2' ){
						return 'Better';
					}
					if( tickValue == '4' ){
						return '↕';
					}
					else if( tickValue == '6') {
						return 'Worse'
					}
					return Number(tickValue)%2 == 0 ? '' : undefined;
				}
			}
		}
	}
}

const data = computed( () => {
	
	const rows = materials.value.filter( row => {
		return typeof row['Overall_ratings'] !== 'undefined';
	});

	// lets get the labels first
	if( !rows.length ){
		return {};
	}

	const labels = Object.keys( rows[0]['Overall_ratings']);
	const datasets = rows.sort( 
		(a:LcaDataRow,b:LcaDataRow) => Number(a['Core_Data']['Rank']) - Number(b['Core_Data']['Rank'])
	).map( (row, index) => ({
		label: row['Core_Data']['Material'],
		data: labels.map(label => row['Overall_ratings'][label]),
		backgroundColor: row.display.color+'00',
		borderColor: row.display.color,
		pointBackgroundColor: (context: ScriptableContext<'doughnut'>) => {
			return context.dataset.borderColor
		},
		pointRadius: 5
	}))
	return {
		labels: labels.map(s => s.match(/fossil/i) ? ['FOSSIL FUEL', 'USAGE'] : s.toUpperCase() ),
		datasets
	}

});

</script>

<!-- SCSS Style -->
<style lang="scss" scoped>
.tooltip-body {
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
	// transition: 0.2s all;
	h4 {
		font-size: 1rem;
		font-weight: 500;
	}
	&.x-right.y-center {
		transform: translateX(0) translateY(-50%);
	}
	&.x-left.y-center {
		transform: translateX(-100%) translateY(-50%);
	}
	&.x-center.y-bottom {
		transform: translateX(-50%) translateY(0%);
	}
	&.x-center.y-top {
		transform: translateX(-50%) translateY(-100%);
	}
}

.point-bar {
	height: 14px;
}
</style>