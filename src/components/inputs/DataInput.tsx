"use client";

import "dayjs/locale/ru";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ruRU } from "@mui/x-date-pickers";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
export default function DateInput({
	name,
	label,
	disabled,
}: {
	name: string;
	label: string;
	disabled?: boolean;
}) {
	const { register, setValue, watch } = useFormContext();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			localeText={
				ruRU.components.MuiLocalizationProvider.defaultProps.localeText
			}
			adapterLocale="ru"
		>
			<input type="hidden" {...register(name)} />
			<DesktopDatePicker
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="bg-[#F1F2F6] rounded"
				label={label}
				value={dayjs(Date.parse(watch(name)))}
				onChange={(value) => {
					setValue(name, value?.toDate().toDateString());
				}}
				disabled={disabled ? disabled : false}
				slots={{
					openPickerButton: () => {
						return (
							<div
								onClick={() => setIsOpen(true)}
								className="hover:cursor-pointer"
							>
								<CalendarTodayOutlinedIcon />
							</div>
						);
					},
				}}
			/>
		</LocalizationProvider>
	);
}
