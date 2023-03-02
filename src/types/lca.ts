import type TabVue from "@/components/common/Tab.vue";

export type LcaDataRow = {
	[key: string] : {
		[key: string] : string
	}
};

export type LcaDataRowList = Array<LcaDataRow>;
export type TabComponentType = InstanceType<typeof TabVue>