<template lang="pug">
.doughnut-container
    doughnut(
        :data="data"
        :options="chartOptions"
        :plugins="plugins"
        ref="doughnutInstance"
    )
    .doughnut-title
        .doughnut-title-percent {{ myPercent }}
            span.small %
        .doughnut-title-below(
            v-if="myPercent >= 0"
        ) reduction
</template>

<script lang="ts" setup>
import { toRefs, watch, ref, computed } from 'vue';
import {
    Chart as ChartJS,
    type ChartData,
    ArcElement,
    DoughnutController,
    type ChartOptions,
Chart
} from 'chart.js';

import { Doughnut } from 'vue-chartjs';

export interface Props {
    percent: number
}

const props = withDefaults( defineProps<Props>(), {
    
});

const {percent} = toRefs( props );
const myPercent = computed( () => {
    return Math.max(0, percent.value);
});

const doughnutInstance = ref();

watch(myPercent, (value) => {
    data.value = {
        labels: ['', ''],
        datasets: [{
            backgroundColor: ['#62BB46', 'transparent'],
            data: [Number(value || 0), 100-value]
        }]
    };
});

ChartJS.register(ArcElement);

const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart: Chart<'doughnut'>, args: any, pluginOptions: any) {
        const {ctx} = chart;
        ctx.save();

        const data = chart.getDatasetMeta(0).data[0] as ArcElement;
        const xCoor = data.x;
        const yCoor = data.y;
        const innerRadius = data.innerRadius;
        const outerRadius = data.outerRadius;
        const width = outerRadius - innerRadius;
        const angle = Math.PI / 180;

        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
        ctx.stroke();
    }
}

const data = ref<ChartData<'doughnut'>>({
    labels: ['', ''],
    datasets: [{
        backgroundColor: ['#62BB46', 'transparent'],
        data: [Number(percent.value || 0), 100-percent.value]
    }]
});

const chartOptions: ChartOptions<'doughnut'>= {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1/1,
    cutout: '65%',
    borderColor: 'transparent',
    
    hover: {
        
    },
    layout: {
        autoPadding: false,
        padding: 0
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        },
        
    }
};

const plugins = [backgroundCircle];

</script>

<style lang="scss" scoped>
.doughnut-container{
    position: relative;
}
.doughnut-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #000;
    text-align: center;
    pointer-events: none;
    &-percent {
        font-weight: 600;
        font-size: 2.2rem;
        line-height: 1;
        .small {
            text-transform: uppercase !important;
            font-size: 1.3rem;
        }
    }
    &-below {
        line-height: 1;
        font-size: 0.75rem;
        text-transform: uppercase;
    }
}
</style>