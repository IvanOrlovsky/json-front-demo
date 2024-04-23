export type CheckBoxProps = {
	label: string;
	name: string;
	defaultChecked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?: (
		event: React.SyntheticEvent<Element, Event>,
		checked: boolean
	) => void;
	hint?: string;
};