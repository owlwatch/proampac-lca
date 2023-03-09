export type LcaDataRow = {
	[key: string] : {
		[key: string] : string
	}
};

export type LcaDataRowList = Array<LcaDataRow>;

export interface StatSectionItem {
	material: LcaDataRow,
	value: string
}

export interface StatSection {
	title: string
	items: StatSectionItem[]
};