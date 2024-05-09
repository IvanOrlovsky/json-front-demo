"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";

import { cn } from "@/lib/utils/cn";

export default function Make(props: Record<string, any>) {
	const { id } = props;
	const { register } = useDataObjectUpdatetion(
		id,
		{ make: "" },
		props?.event
	);

	return (
		<div className="relative grow">
			<input
				id={id}
				name={id}
				type={"text"}
				className={cn("floating-label-input peer")}
				placeholder=" "
				{...register}
			/>

			<label
				unselectable="on"
				htmlFor={id}
				className={cn(
					"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				)}
			>
				Марка автомобиля
			</label>
		</div>
	);
}
