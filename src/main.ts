import Selector from './components/Selector.vue';
import Report from './components/Report.vue';
import { createPinia, setActivePinia } from 'pinia';
import { createApp } from 'vue';

const pinia = createPinia();
setActivePinia(pinia);

// force these for debugging
document.addEventListener('DOMContentLoaded', ()=>{
	const components = document.querySelectorAll('[data-proampac-component]');
	components.forEach( (el: Element) => {
		switch( (el as HTMLElement).dataset.proampacComponent ){
			case 'proampac-lca-selector':
				createApp(Selector)
					.mount(el);
				break;
			case 'proampac-lca-report':
				createApp(Report, (el as HTMLElement).dataset).mount(el);
				break;
		}
	});
});