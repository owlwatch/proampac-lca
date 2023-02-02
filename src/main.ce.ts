// import { defineCustomElement } from './util/defineCustomElement'
import Selector from './components/Selector.vue';
import Report from './components/Report.vue';
import { createPinia, setActivePinia } from 'pinia';
import { createApp } from 'vue';

const pinia = createPinia();
setActivePinia(pinia);

// const SelectorComponent = defineCustomElement(Selector, {shadowRoot: false});
// const ReportComponent = defineCustomElement(Report, {shadowRoot: false});

// customElements.define('proampac-lca-selector', SelectorComponent);
// customElements.define('proampac-lca-report', ReportComponent);


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