import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const months = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
];

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertToRussianDate(dateString: string) {
	const dateObject = new Date(dateString);
	const day = dateObject.getDate();
	const monthIndex = dateObject.getMonth();
	const year = dateObject.getFullYear();

	const month = months[monthIndex];

	const russianDate = day + " " + month + " " + year;
	return russianDate;
}
