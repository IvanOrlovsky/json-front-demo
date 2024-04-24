import { convertToRussianDate } from "@/lib/utils";

const personalDataExample = [
	{
		smsCode: "1231",
		isPulseClient: false,
		phoneNumber: "89158952780",
		surname: "Иванов",
		name: "Иван",
		patronymic: "Иванович",
		birthday: new Date().toDateString(),
		passportNumber: "2917 123123",
		passportGivenBy: "ОМВД по Калужской Области",
		passportGivenDate: new Date().toDateString(),
		registrationLocation: "Обнинск",
		email: "example@mail.ru",
		isInsurantOwner: false,
		ownerFullName: "Иванов Иван Иванович",
		ownerBirthday: new Date().toDateString(),
		ownerPassportNumber: "2917 123123",
		ownerPassportGivenBy: "ОМВД по Калужской Области",
		ownerPassportGivenDate: new Date().toDateString(),
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
];

export default function PersonalDataCard({
	phoneNumber,
}: {
	phoneNumber: string;
}) {
	const personalData = personalDataExample.find(
		(car) => car.phoneNumber === phoneNumber
	);

	if (personalData) {
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
				<button type="button" className="button-subtext">
					Изменить
				</button>
			</section>
		);
	} else {
		return (
			<section className="bg-white border border-[#DCE1EF] rounded-2xl p-4 flex flex-col">
				<h1 className="text-red-200 bg-red-500">
					Персональные данные не найдены
				</h1>
			</section>
		);
	}
}
