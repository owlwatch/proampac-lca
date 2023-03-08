<template lang="pug">
svg(
	:style="style"
    viewBox="0 0 20 20"
)
    circle(
        cx="50%"
        cy="50%"
        r="10"
        :fill="color"
    )
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
const props = defineProps<{
	color: string
	size?: number
}>();
const {size, color} = toRefs(props);


const style = computed( () => {
	if( size?.value ){
		return {width: size.value}
	}
	return {};
});
</script>

<style lang="scss" scoped>
svg {
	height: auto;
	width: 20px;
}
</style>