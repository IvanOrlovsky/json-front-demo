"use client";

import { useState } from "react";
import Page from "@/components/SDUI/Page";
import { Button } from "@/components/ui/button";

const examples = [
	{
		components: [
			{
				type: "Layer",
				props: {
					layout: "horizontal",
					components: [
						{
							type: "NavChip",
							navChipProps: {
								letterInCircle: "1",
								label: "Авто",
								active: false,
							},
						},
						{
							type: "NavChip",
							navChipProps: {
								letterInCircle: "2",
								label: "Параметры",
								active: false,
							},
						},
						{
							type: "NavChip",
							navChipProps: {
								letterInCircle: "3",
								label: "Риски",
								active: false,
							},
						},
						{
							type: "NavChip",
							navChipProps: {
								letterInCircle: "4",
								label: "Персональные данные",
								active: false,
							},
						},
						{
							type: "NavChip",
							navChipProps: {
								letterInCircle: "5",
								label: "Оплата",
								active: true,
							},
						},
					],
				},
			},
			{
				type: "FormBlock",
				title: "Проверьте данные",
				hasSubmitBtn: true,
				submitBtnLabel: "Перейти к оплате XXXX рублей",
				forForm: "checkDataForm",
				children: [
					{
						type: "Accordion",
						title: "Автомобиль",
						children: [
							{
								type: "AutoCard",
								autoData: {
									GOSnumber: "У 222 АА 44",
									make: "Нива Шевроле",
									model: "Калина",
									releaseYear: "2007",
									bodyType: "кроссовер",
									power: "123 л. с.",
									gearBoxType: "гидравлическая",
									engine: "3 л.",
									modification: "Базовая",
									TSdocument: "СТС",
									PTSnumber: "160982",
									VIN: "1FAHP2DW1CG573712",
								},
							},
						],
					},
					{
						type: "Accordion",
						title: "Параметры страховки",
						children: [
							{
								type: "InsuranseCard",
								paramsData: {
									region: {
										label: "Калужская область",
										region: "Калужская область",
										code: 40,
									},
									repair: "Дилерская СТОА",
									franchaise: "30 000",
									insuranseDuration: "",
									dateOfAgreementBegin: "",
								},
							},
						],
					},
					{
						type: "Accordion",
						title: "Страховые риски и опции",
						children: [
							{
								type: "RisksCard",
								risksData: {
									crime: true,
									gap: true,
									accident: true,
									evacuation: false,
									carAccidentCommisar: true,
									techHelp: true,
								},
							},
						],
					},
					{
						type: "Accordion",
						title: "Персональные данные",
						children: [
							{
								type: "PersonalDataCard",
								personalData: {
									smsCode: "1231",
									isPulseClient: false,
									phoneNumber: "89158952780",
									surname: "Иванов",
									name: "Иван",
									patronymic: "Иванович",
									birthday: new Date().toDateString(),
									passportNumber: "2917 123123",
									passportGivenBy:
										"ОМВД по Калужской Области",
									passportGivenDate:
										new Date().toDateString(),
									registrationLocation: "Обнинск",
									email: "example@mail.ru",
									isInsurantOwner: false,
									ownerFullName: "Иванов Иван Иванович",
									ownerBirthday: new Date().toDateString(),
									ownerPassportNumber: "2917 123123",
									ownerPassportGivenBy:
										"ОМВД по Калужской Области",
									ownerPassportGivenDate:
										new Date().toDateString(),
									ownerRegistrationLocation: "Обнинск",
									isInsurantDriver: false,
									drivers: [
										{
											fullName: "Иванов Иван Иванович",
											birthday: new Date().toDateString(),
											driverLicenceNumber: "23123131312",
											beginOfExpDate: "2021",
										},
									],
								},
							},
						],
					},
				],
			},
		],
	},
];

export default function Home() {
	const [jsonData, setJsonData] = useState("{}");
	const [error, setError] = useState("");

	const handleJsonChange = (event: { target: { value: any } }) => {
		const value = event.target.value;
		try {
			JSON.parse(value);
			setJsonData(value);
			setError("");
		} catch (err) {
			setError("Неверный формат json");
		}
	};

	return (
		<main className="w-screen h-screen flex flex-col sm:flex-row gap-4 p-10 ">
			<div className="h-1/2 sm:w-1/2 ">
				<div className="h-1/4 mb-10 flex flex-col">
					<div className="h-1/4  mb-10 font-semibold text-center text-sm sm:text-4xl font-mono">
						Входной JSON
					</div>
					{error && <div style={{ color: "red" }}>{error}</div>}
					<h2 className="text-sm sm:text-2xl font-mono mb-2">
						Заготовленные экраны:
					</h2>
					<div className="flex flex-row flex-wrap">
						<Button
							onClick={() => {
								setJsonData(JSON.stringify(examples[0]));
								(
									document.getElementById(
										"jsonEditor"
									) as HTMLTextAreaElement
								).value = JSON.stringify(
									examples[0],
									null,
									"\t"
								);
							}}
						>
							Экран оплаты
						</Button>
					</div>
				</div>
				<textarea
					id="jsonEditor"
					defaultValue={jsonData}
					onChange={handleJsonChange}
					className="p-10 w-full h-3/4 border-4 border-black text-xl font-mono rounded-lg"
				/>
			</div>
			<div className="h-1/2 sm:w-1/2">
				<div className="h-1/4  mb-10 font-semibold	 text-center text-sm sm:text-4xl font-mono">
					Сгенерированный экран
				</div>
				<div className="p-10 w-full h-full border-4 border-black text-3xl font-mono rounded-lg overflow-scroll">
					<Page jsonData={JSON.parse(jsonData)}></Page>
				</div>
			</div>
		</main>
	);
}
