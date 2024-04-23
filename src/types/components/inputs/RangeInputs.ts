export type Mark = { value: number; label?: string };

export type CurrencyRangeProps = {
	name: string;
	title: string;
	marks?: Mark[];
	min: number;
	max: number;
	step?: number;
};

export type DateRangeProps = {
	name: string;
	title: string;
	marks: Mark[];
};

export type RangeInputProps = {
	name: string;
	title: string;
	min: number;
	max: number;
	marks?: Mark[];
	step?: number;
};
