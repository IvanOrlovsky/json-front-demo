"use client";

import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useFormContext, Controller } from "react-hook-form";
import { styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { SimpleSelectProps } from "@/types/components/inputs/SimpleSelect";

const StyledSimpleSelect = styled(Select)({
	"& .MuiSelect-filled": {
		backgroundColor: "#F1F2F6",
		borderRadius: "4px",
		border: "2px solid #A2ADC1",
		outline: "",
	},
});

export default function SimpleSelect({
	label,
	name,
	data,
	required,
	requiredMsg,
	disabled,
	staticValue,
}: SimpleSelectProps) {
	const {
		formState: { errors },
		control,
	} = useFormContext();

	return (
		<FormControl variant="filled" sx={{ minWidth: 120 }}>
			<InputLabel id={name + "_label"}>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				rules={{
					required:
						required &&
						(requiredMsg ? requiredMsg : "Обязательное поле"),
				}}
				render={({ field }) => (
					<>
						<StyledSimpleSelect
							{...field}
							labelId={name + "_label"}
							error={!!errors[name]}
							disableUnderline
							sx={{
								"& .Mui-error": {
									backgroundColor: "#FEE7EA",
									borderRadius: "4px",
									border: "2px solid #F3566A",
								},
							}}
							disabled={disabled || !!staticValue}
						>
							{staticValue && (
								<MenuItem selected value={staticValue}>
									{staticValue}
								</MenuItem>
							)}
							{data.map((option, index) => (
								<MenuItem key={index} value={option}>
									{option}
								</MenuItem>
							))}
						</StyledSimpleSelect>
						<label
							className={
								errors[name]?.message
									? "kasko-subtext-error"
									: "kasko-subtext"
							}
						>
							{errors[name]?.message
								? String(errors[name]?.message)
								: ""}
						</label>
					</>
				)}
			/>
		</FormControl>
	);
}
