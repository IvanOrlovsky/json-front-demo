"use client";

import { useMainContext } from "@/contexts/MainContext";

import { convertToRussianDate } from "@/lib/utils";

export default function PersonalDataCard() {
	const { setStep, personalData, setPersonalStep } = useMainContext();
	return (
		<section className="bg-white rounded-2xl p-4 flex flex-col gap-2">
			<div>
				<h2 className="mb-1">Страхователь</h2>

				<p className="kasko-subtext mb-1">{`${personalData.surname} ${personalData.name} ${personalData.patronymic}`}</p>
				<p className="kasko-subtext mb-4">{`${convertToRussianDate(
					personalData.birthday
				)}`}</p>

				<p className="kasko-subtext mb-1">{`Паспорт ${personalData.passportNumber}`}</p>
				<p className="kasko-subtext mb-4">{`От ${convertToRussianDate(
					personalData.passportGivenDate
				)}`}</p>

				<p className="kasko-subtext mb-4">{`${personalData.registrationLocation}`}</p>

				<p className="kasko-subtext mb-1">{`${personalData.phoneNumber}`}</p>
				<p className="kasko-subtext mb-4">{`${personalData.email}`}</p>
			</div>
			<div>
				<h2 className="mb-1">Владелец автомобиля</h2>

				<p className="kasko-subtext mb-1">{`${personalData.ownerFullName}`}</p>
				<p className="kasko-subtext mb-4">{`${convertToRussianDate(
					personalData.ownerBirthday
				)}`}</p>

				<p className="kasko-subtext mb-1">{`Паспорт ${personalData.ownerPassportNumber}`}</p>
				<p className="kasko-subtext mb-4">{`От ${convertToRussianDate(
					personalData.ownerPassportGivenDate
				)}`}</p>

				<p className="kasko-subtext mb-4">{`${personalData.ownerRegistrationLocation}`}</p>
			</div>
			{personalData.drivers.map((driver, index) => (
				<div key={index}>
					<h2 className="mb-1">{`Водитель ${index + 1}`}</h2>
					<p className="kasko-subtext mb-1">{`${driver.fullName}`}</p>
					<p className="kasko-subtext mb-4">{`${convertToRussianDate(
						driver.birthday
					)}`}</p>
					<p className="kasko-subtext mb-1">{`${driver.driverLicenceNumber}`}</p>
					<p className="kasko-subtext mb-4">{`Стаж от ${driver.beginOfExpDate}`}</p>
				</div>
			))}
			<button
				type="button"
				className="button-subtext"
				onClick={() => {
					setStep(4);
					setPersonalStep(1);
				}}
			>
				Изменить
			</button>
		</section>
	);
}
