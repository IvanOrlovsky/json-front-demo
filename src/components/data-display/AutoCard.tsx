import RegisteredAuto from "../../../public/datasets/RegisteredAuto.json";

export default function AutoCard({ GOSnumber }: { GOSnumber: string }) {
	const autoData = RegisteredAuto.find((car) => car.GOSnumber === GOSnumber);

	if (autoData) {
		return (
			<section className="bg-white border border-[#DCE1EF] rounded-2xl p-4 flex flex-col">
				<h2 className="mb-1">{`${autoData.make} ${autoData.model}, ${autoData.releaseYear}`}</h2>
				<p className="kasko-subtext mb-4">{`${autoData.VIN} - ${autoData.power}`}</p>
				<table className="mb-4">
					<tbody>
						<tr>
							<td className="kasko-subtext">VIN</td>
							<td className="kasko-text-xs">{autoData.VIN}</td>
						</tr>
						<tr>
							<td className="kasko-subtext">{`Номер ${autoData.TSdocument}`}</td>
							<td className="kasko-text-xs">
								{autoData.PTSnumber}
							</td>
						</tr>
						<tr>
							<td className="kasko-subtext">Тип кузова</td>
							<td className="kasko-text-xs">
								{autoData.bodyType}
							</td>
						</tr>
						<tr>
							<td className="kasko-subtext">Тип КПП</td>
							<td className="kasko-text-xs">
								{autoData.gearBoxType}
							</td>
						</tr>
						<tr>
							<td className="kasko-subtext">Двигатель</td>
							<td className="kasko-text-xs">{autoData.engine}</td>
						</tr>
						<tr>
							<td className="kasko-subtext">Модификация</td>
							<td className="kasko-text-xs">
								{autoData.modification}
							</td>
						</tr>
					</tbody>
				</table>
				<button type="button" className="button-subtext">
					Изменить
				</button>
			</section>
		);
	} else {
		return (
			<section className="bg-white border border-[#DCE1EF] rounded-2xl p-4 flex flex-col">
				<h1 className="text-red-200 bg-red-500">
					Данные по автомобилю не найдены
				</h1>
			</section>
		);
	}
}
