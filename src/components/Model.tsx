"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";

import { cn } from "@/lib/utils/cn";

export default function Model({ id }: { id: string }) {
	const { data, handleOnChange } = useDataObjectUpdatetion(id, { model: "" });

	return (
		<div className="relative grow">
			<input
				id={id}
				name={id}
				type={"text"}
				className={cn("floating-label-input peer")}
				placeholder=" "
				onChange={(e) => {
					handleOnChange({ model: e.target.value });
				}}
				value={data[id]?.model || ""}
			/>

			<label
				unselectable="on"
				htmlFor={id}
				className={cn(
					"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				)}
			>
				Модель автомобиля
			</label>
		</div>
	);
}
