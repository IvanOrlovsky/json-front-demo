"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useEffect, useRef, useState } from "react";

import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { cn } from "@/lib/utils/cn";

interface EvacuationProps {
	id: string;
	checked?: string;
	title?: string;
	text?: string;
}

const defaultProps: Partial<EvacuationProps> = {
	title: "Эвакуация",
	text: "Транспортируем ваш автомобиль в случае аварии при поломке.",
};

export default function Evacuation(props: EvacuationProps) {
	const { id, checked, title, text } = { ...defaultProps, ...props };

	const { register } = useDataObjectUpdatetion(id, {
		Evacuation: String(checked?.toLowerCase() === "true"),
	});
	const [checked_state, setChecked] = useState(
		checked?.toLowerCase() === "true"
	);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = String(checked_state);
			(register as { onChange: (e: any) => void; value: any }).onChange({
				target: { value: inputRef.current.value },
			});
		}
	}, [checked_state]);

	if (!id) {
		return (
			<h1 className="text-red-600 bg-red-100 p-4">
				Не указан id компонента Evacuation
			</h1>
		);
	}

	return (
		<div
			className={cn(
				"flex flex-row gap-3 justify-start bg-white rounded-lg border-2 p-4 hover:cursor-pointer",
				{
					"border-[#03a9f4]": checked_state,
					"border-[#DCE1EF]": !checked_state,
				}
			)}
			onClick={() => {
				setChecked(!checked_state);
			}}
		>
			<input id={id} ref={inputRef} className="hidden" {...register} />
			<div>
				{checked_state && <FaCheckCircle className="text-blue-500" />}
				{!checked_state && <IoIosRadioButtonOff />}
			</div>
			<div className="self-stretch grow flex flex-col gap-1">
				<h2>{title}</h2>

				<p className="kasko-subtext">{text}</p>
			</div>
			<IoIosInformationCircleOutline className="text-[#8591A9] text-[50px] self-start" />
		</div>
	);
}
