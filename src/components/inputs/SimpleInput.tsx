"use client";

import { SimpleInputProps } from "@/types/components/inputs/SimpleInput";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

export default function SimpleInput({
	name,
	className,
	required,
	helper,
	requiredMsg,
	placeholder,
	pattern,
	patternMsg,
	defaultValue,
	disabled,
	type,
}: SimpleInputProps) {
	const {
		register,
		formState: { errors },
		clearErrors,
		setError,
		watch,
	} = useFormContext();

	return (
		<div className="relative grow">
			<input
				id={name}
				disabled={disabled}
				type={type ? type : "text"}
				defaultValue={defaultValue}
				{...register(name, {
					onChange: () => {
						if (!pattern) {
							clearErrors(name);
							return;
						}

						if (!pattern.test(watch(name)) && watch(name)) {
							setError(name, {
								type: "required",
								message:
									"Введенное значение не соотвествует формату.",
							});
						} else {
							clearErrors(name);
						}
					},
					required: required
						? {
								value: true,
								message: requiredMsg
									? requiredMsg
									: "Обязательное поле",
						  }
						: false,
					pattern: pattern
						? {
								value: pattern,
								message: patternMsg || "Неверный формат",
						  }
						: undefined,
				})}
				className={cn("floating-label-input peer", className, {
					"floating-label-input-error peer":
						errors[name]?.type === "required" ||
						errors[name]?.type === "pattern",
					"floating-label-input-warning peer":
						errors[name]?.type === "warning",
				})}
				placeholder=" "
			/>

			<label
				unselectable="on"
				htmlFor={name}
				className={cn(
					"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
					{
						"floating-label-error":
							errors[name]?.type === "required" ||
							errors[name]?.type === "pattern",
						"floating-label-warning":
							errors[name]?.type === "warning",
					}
				)}
			>
				{placeholder}
			</label>
			<label
				htmlFor={name}
				className={cn("kasko-subtext", {
					"kasko-subtext-error":
						errors[name]?.type === "required" ||
						errors[name]?.type === "pattern",
					"kasko-subtext-warning": errors[name]?.type === "warning",
				})}
			>
				{errors[name]?.message ? String(errors[name]?.message) : helper}
			</label>
		</div>
	);
}
