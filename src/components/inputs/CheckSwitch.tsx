import { CheckSwitchProps } from "@/types/components/inputs/CheckSwitch";

import { useFormContext } from "react-hook-form";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CheckSwitch({
	name,
	label,
	disabled,
	defaultChecked,
}: CheckSwitchProps) {
	const { register } = useFormContext();

	return (
		<FormControlLabel
			disabled={disabled ? disabled : false}
			{...register(name)}
			control={<Switch defaultChecked={defaultChecked} />}
			label={label}
		/>
	);
}
