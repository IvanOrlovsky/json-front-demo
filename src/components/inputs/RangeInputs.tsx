"use client";

import { useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
	CurrencyRangeProps,
	DateRangeProps,
	Mark,
	RangeInputProps,
} from "@/types/components/inputs/RangeInputs";

const StyledSlider = styled(Slider)({
	height: 2,
	"& .MuiSlider-thumb": {
		height: 10,
		width: 10,
		backgroundColor: "#fff",
		borderRadius: "120px",
		border: "1px solid currentColor",
		"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
			boxShadow: "inherit",
		},
		"&::before": {
			display: "none",
		},
	},
	"& .MuiSlider-mark": {
		height: 6,
		width: 6,
		border: "1px solid #FFFFFF",
		backgroundColor: "#DCE1EF",
		borderRadius: "10px",
		opacity: 1,
		"& .MuiSlider-markActive": {
			backgroundColor: "#1698D9",
		},
	},
	"& .MuiSlider-markLabel": {
		color: "#737B8C",
		marginTop: "-12px",
		"& .MuiSlider-markLabelActive": {
			color: "#737B8C",
			marginTop: "-12px",
		},
	},
});

export function RangeInput({
	name,
	title,
	min,
	max,
	marks,
	step,
}: RangeInputProps) {
	const { register, setValue } = useFormContext();

	const defaultMarks = [
		{
			value: min,
		},
		{
			value: max,
		},
	] as Mark[];

	const [inputValue, setInputValue] = useState(min);
	const [sliderValue, setSliderValue] = useState(min);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const numericValue = +event.target.value.replace(/\s/g, "");
		setValue(name, numericValue > max ? max : numericValue);
		setInputValue(numericValue > max ? max : numericValue);
		setSliderValue(numericValue > max ? max : numericValue);
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(name, (newValue as number) > max ? max : (newValue as number));
		setInputValue((newValue as number) > max ? max : (newValue as number));
		setSliderValue((newValue as number) > max ? max : (newValue as number));
	};

	return (
		<Box className="flex flex-col items-start gap-[12px] p-0 w-full">
			<h1 className="font-roboto font-semibold text-base leading-6">
				{title}
			</h1>
			<Box className="flex flex-col order-2 self-stretch">
				<input
					{...register(name, {
						onChange: handleInputChange,
					})}
					value={inputValue}
					type="text"
					className="font-roboto font-normal text-lg leading-[26px] appearance-none text-black box-border w-full border-2 focus:outline-none focus:border-blue-600 bg-[#F1F2F6] rounded-[4px] px-[16px] py-[15px]"
				/>

				<StyledSlider
					value={Number(sliderValue)}
					className="-mt-3 w-[90%] self-center"
					onChange={handleSliderChange}
					size="small"
					aria-label="Small"
					step={step ? step : 1}
					marks={marks ? marks : defaultMarks}
					min={min}
					max={max}
				/>
			</Box>
		</Box>
	);
}

export function DateRangeInput({ name, title, marks }: DateRangeProps) {
	const { register, setValue } = useFormContext();

	const minMarkValue = marks
		? Math.min(
				...marks.map(
					(mark: { value: number; label?: string }) => mark.value
				)
		  )
		: undefined;

	const maxMarkValue = marks
		? Math.max(
				...marks.map(
					(mark: { value: number; label?: string }) => mark.value
				)
		  )
		: undefined;

	const [inputValue, setInputValue] = useState(
		marks.find((mark) => mark.value === minMarkValue)?.label as string
	);
	const [sliderValue, setSliderValue] = useState(marks ? minMarkValue : 0);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const numericValue = +event.target.value.replace(/\s/g, "");
		setValue(name, numericValue.toString());
		setInputValue(numericValue.toString());
		setSliderValue(numericValue);
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		const markValue = marks.find((mark) => mark.value === newValue)
			?.label as string;
		setValue(name, markValue);
		setInputValue(markValue);

		setSliderValue(newValue as number);
	};

	return (
		<Box className="flex flex-col items-start gap-[12px] p-0 w-full">
			<h1 className="font-roboto font-semibold text-base leading-6">
				{title}
			</h1>
			<Box className="flex flex-col order-2 self-stretch">
				<input
					{...register(name, {
						onChange: handleInputChange,
					})}
					value={inputValue}
					type="text"
					disabled
					className="font-roboto font-normal text-lg leading-[26px] appearance-none text-black box-border w-full border-2 focus:outline-none focus:border-blue-600 bg-[#F1F2F6] rounded-[4px] px-[16px] py-[15px]"
				/>

				<StyledSlider
					value={Number(sliderValue)}
					className="-mt-3 w-[90%] self-center"
					onChange={handleSliderChange}
					size="small"
					aria-label="Small"
					step={null}
					marks={marks}
					min={minMarkValue}
					max={maxMarkValue}
				/>
			</Box>
		</Box>
	);
}

export function CurrencyRangeInput({
	name,
	title,
	marks,
	min,
	max,
	step,
}: CurrencyRangeProps) {
	const { register, setValue } = useFormContext();

	const defaultMarks = [
		{
			value: min,
		},
		{
			value: max,
		},
	] as Mark[];

	const minMarkValue = marks
		? Math.min(
				...marks.map(
					(mark: { value: number; label?: string }) => mark.value
				)
		  )
		: undefined;

	const maxMarkValue = marks
		? Math.max(
				...marks.map(
					(mark: { value: number; label?: string }) => mark.value
				)
		  )
		: undefined;

	const [inputValue, setInputValue] = useState(
		!marks
			? min + ""
			: marks
			? (marks.find((mark) => mark.value === minMarkValue)
					?.label as string)
			: ""
	);
	const [sliderValue, setSliderValue] = useState(
		min ? min : marks ? minMarkValue : 0
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const numericValue = +event.target.value.replace(/\s/g, "");
		setValue(name, numericValue > max ? max : numericValue);
		setInputValue(
			numericValue > max ? max.toString() : numericValue.toString()
		);
		setSliderValue(numericValue > max ? max : numericValue);
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(name, (newValue as number) > max ? max.toString() : newValue);
		setInputValue(
			(newValue as number) > max ? max.toString() : newValue.toString()
		);
		setSliderValue((newValue as number) > max ? max : (newValue as number));
	};

	return (
		<Box className="flex flex-col items-start gap-[12px] p-0 w-full">
			<h1 className="font-roboto font-semibold text-base leading-6">
				{title}
			</h1>
			<Box className="flex flex-col order-2 self-stretch">
				<input
					{...register(name, {
						onChange: handleInputChange,
					})}
					value={inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
					type="text"
					className="font-roboto font-normal text-lg leading-[26px] appearance-none text-black box-border w-full border-2 focus:outline-none focus:border-blue-600 bg-[#F1F2F6] rounded-[4px] px-[16px] py-[15px]"
				/>

				<StyledSlider
					value={Number(sliderValue)}
					className="-mt-3 w-[90%] self-center"
					onChange={handleSliderChange}
					size="small"
					aria-label="Small"
					step={step ? step : 1}
					marks={marks ? marks : defaultMarks}
					min={min ? min : marks ? minMarkValue : undefined}
					max={max ? max : marks ? maxMarkValue : undefined}
				/>
			</Box>
		</Box>
	);
}
