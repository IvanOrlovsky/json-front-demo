"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useEffect, useRef, useState } from "react";

import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { cn } from "@/lib/utils/cn";

export default function Evacuation(props: Record<string, any>) {
	const { id } = props;
	const { register } = useDataObjectUpdatetion(
		id,
		{ Evacuation: "false" },
		props?.event
	);
	const [checked, setChecked] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const title = "Эвакуация";
	const text = "Транспортируем ваш автомобиль в случае аварии при поломке.";

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = String(checked);
			(register as { onChange: (e: any) => void; value: any }).onChange({
				target: { value: inputRef.current.value },
			});
		}
	}, [checked]);

	return (
		<div
			className={cn(
				"flex flex-row gap-3 justify-start bg-white rounded-lg border-2 p-4 hover:cursor-pointer",
				{
					"border-[#03a9f4]": checked,
					"border-[#DCE1EF]": !checked,
				}
			)}
			onClick={() => {
				setChecked(!checked);
			}}
		>
			<input id={id} ref={inputRef} className="hidden" {...register} />
			<div>
				{checked && <FaCheckCircle className="text-blue-500" />}
				{!checked && <IoIosRadioButtonOff />}
			</div>
			<div className="self-stretch grow flex flex-col gap-1">
				<h2>{title}</h2>

				<p className="kasko-subtext">{text}</p>
			</div>
			<IoIosInformationCircleOutline className="text-[#8591A9] text-[50px] self-start" />
		</div>
	);
}
