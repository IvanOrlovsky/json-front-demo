"use client";

import { cn } from "@/lib/utils/cn";
import FormBlock from "./FormBlock";
import { useForm } from "react-hook-form";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import { ChangeEvent, useEffect } from "react";

export default function FIO(props: any) {
	const { id } = props;
	const { register } = useForm();

	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: { name: "", surname: "", patronymic: "" },
		}));
	}, []);

	useEffect(() => {
		return () => {
			updateData((prev) => {
				const cleanedData = { ...prev };
				delete cleanedData[id];
				return cleanedData;
			});
		};
	}, []);

	const update = (e: ChangeEvent<HTMLInputElement>) => {
		updateData((prev) => ({
			...prev,
			[id]: { ...prev[id], [e.target.name]: e.target.value },
		}));
	};

	return (
		<FormBlock id={id} title="ФИО">
			<div className="relative grow">
				<input
					id={id}
					{...register("name", { onChange: update })}
					type={"text"}
					className={cn("floating-label-input peer")}
					placeholder=" "
				/>

				<label
					unselectable="on"
					htmlFor={id}
					className={cn(
						"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
					)}
				>
					Фамилия
				</label>
			</div>
			<div className="relative grow">
				<input
					id={id}
					{...register("surname", { onChange: update })}
					type={"text"}
					className={cn("floating-label-input peer")}
					placeholder=" "
				/>

				<label
					unselectable="on"
					htmlFor={id}
					className={cn(
						"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
					)}
				>
					Имя
				</label>
			</div>
			<div className="relative grow">
				<input
					id={id}
					{...register("patronymic", { onChange: update })}
					type={"text"}
					className={cn("floating-label-input peer")}
					placeholder=" "
				/>

				<label
					unselectable="on"
					htmlFor={id}
					className={cn(
						"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
					)}
				>
					Отчество
				</label>
			</div>
		</FormBlock>
	);
}
