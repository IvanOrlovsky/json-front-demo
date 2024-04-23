export type SimpleInputProps = {
	name: string;
	className?: string;
	required?: boolean;
	requiredMsg?: string;
	helper?: string;
	placeholder?: string;
	pattern?: RegExp;
	patternMsg?: string;
	defaultValue?: string;
	disabled?: boolean;
	type?: string;
};
