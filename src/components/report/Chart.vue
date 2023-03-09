<!-- Pug Template -->
<template lang="pug">
radar(
	v-if="data && data.datasets"
	:options="options"
	:data="data"
)
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
type TooltipLabelStyle
} from 'chart.js';

import { Radar } from 'vue-chartjs'

import { useLcaStore } from '../../stores/lca';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import type { Tick } from 'chart.js/dist/core/core.scale';
import type { LcaDataRow } from '@/types/lca';
import type { CanvasFontSpec } from 'chart.js/dist/helpers/helpers.options';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const { materials } = storeToRefs( useLcaStore() );


const getOrCreateTooltip = (chart: Chart<'radar'>) => {
  let tooltipEl = chart.canvas.parentNode?.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
    tooltipEl.style.borderRadius = '3px';
    tooltipEl.style.color = 'white';
    tooltipEl.style.opacity = '1';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.transform = 'translate(-50%, 0)';
    tooltipEl.style.transition = 'all .1s ease';

    const div = document.createElement('div');
	div.classList.add('tooltip-body');
    
    tooltipEl.appendChild(div);
    chart.canvas.parentNode?.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context: {chart: Chart, tooltip: TooltipModel}) => {
  // Tooltip Element
  const {chart, tooltip} = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = '0';
    return;
  }

  const body = tooltipEl.querySelector('.tooltip-body');

  if( !body ){
	return;
  }

  body.innerHTML = '<h1>test</h1>';

  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  // Set Text
  tooltipEl.style.opacity = '1';
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = (tooltip.options.bodyFont as CanvasFontSpec).string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';


};


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
			// enabled: false,
			// external: externalTooltipHandler,
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
			xAlign: (context) => {
				if( !context.tooltipItems.length ){
					return;
				}
				const label = context.tooltipItems[0].label;
				if( label == 'GREENHOUSE GAS EMISSIONS' || label == 'FRESHWATER EUTROPHICATION' ){
					return 'center';
				}
				else if( label == 'WATER USE' ){
					return 'left';
				}
				else {
					return 'right';
				}
			},
			yAlign: (context) => {
				if( !context.tooltipItems.length ){
					return;
				}
				const label = context.tooltipItems[0].label;
				if( label == 'GREENHOUSE GAS EMISSIONS' ){
					return 'top';
				}
				else if( label == 'FRESHWATER EUTROPHICATION' ){
					return 'bottom';
				}
				else {
					return 'center';
				}
			},
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
<style lang="scss">

</style>