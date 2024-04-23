"use client";

import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { styled } from "@mui/material/styles";
import { AutoCompleteProps } from "@/types/components/inputs/AutoComplete";

const StyledAutocomplete = styled(Autocomplete)({
	"& .MuiAutocomplete-inputRoot": {
		backgroundColor: "#F1F2F6",
		borderRadius: "4px",
		border: "2px solid #A2ADC1",
	},
	"& .MuiInputLabel-root": {
		height: "1.5em",
		color: "#737B8C",
		fontWeight: "400",
		fontSize: 12,
	},
});

export default function AutoComplete({
	dataset,
	title,
	name,
	required,
	requiredMsg,
}: AutoCompleteProps) {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required:
					required &&
					(requiredMsg ? requiredMsg : "Обязательное поле"),
			}}
			render={({ field }) => (
				<StyledAutocomplete
					{...field}
					sx={{ width: "100%" }}
					options={dataset}
					noOptionsText="Не найдено..."
					groupBy={(option) => {
						if (
							option &&
							typeof option === "object" &&
							"label" in option
						) {
							return String(option.label) || "Остальные";
						}
						return "Остальные";
					}}
					popupIcon={false}
					getOptionLabel={(option) =>
						option &&
						typeof option === "object" &&
						"region" in option
							? String(option.region)
							: ""
					}
					onChange={(e, value) => field.onChange(value)}
					renderInput={({ ...params }) => (
						<TextField {...params} variant="filled" label={title} />
					)}
					renderOption={(props, option, { inputValue }) => {
						let matches, parts;
						if (
							option &&
							typeof option === "object" &&
							"region" in option
						) {
							matches = match(
								option.region as string,
								inputValue,
								{
									insideWords: true,
								}
							);
							parts = parse(option.region as string, matches);
						}

						return (
							<li {...props}>
								<div>
									{parts.map((part, index) => (
										<span
											key={index}
											style={{
												fontWeight: part.highlight
													? 700
													: 400,
											}}
										>
											{part.text}
										</span>
									))}
								</div>
							</li>
						);
					}}
				/>
			)}
		/>
	);
}
