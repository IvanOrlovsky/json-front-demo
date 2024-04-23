import { RisksFormValues } from "@/types/forms/RisksForm";
import CheckIcon from "@mui/icons-material/Check";

export default function RisksCard({
	risksData,
}: {
	risksData: RisksFormValues;
}) {
	return (
		<section className="bg-white rounded-2xl p-4 flex flex-col gap-4">
			{(risksData.crime || risksData.gap) && (
				<>
					<h2 className="mb-1">Страховые риски</h2>
					{risksData.crime && (
						<p className="flex flex-row font-roboto text-base gap-2">
							<CheckIcon color="success" />
							Хищение и ущерб
						</p>
					)}
					{risksData.gap && (
						<p className="flex flex-row font-roboto text-base gap-2">
							<CheckIcon color="success" />
							Гарантия стоимости (GAP)
						</p>
					)}
				</>
			)}
			{risksData.accident && (
				<>
					<h2 className="mb-1">Дополнительные опции</h2>

					<p className="flex flex-row font-roboto text-base gap-2">
						<CheckIcon color="success" />
						Несчастный случай
					</p>
				</>
			)}
			{(risksData.evacuation ||
				risksData.carAccidentCommisar ||
				risksData.techHelp) && (
				<>
					<h2 className="mb-1">Сервисные опции</h2>
					{risksData.evacuation && (
						<p className="flex flex-row font-roboto text-base gap-2">
							<CheckIcon color="success" />
							Эвакуация авто
						</p>
					)}
					{risksData.carAccidentCommisar && (
						<p className="flex flex-row font-roboto text-base gap-2">
							<CheckIcon color="success" />
							Аварийный комиссар
						</p>
					)}
					{risksData.techHelp && (
						<p className="flex flex-row font-roboto text-base gap-2">
							<CheckIcon color="success" />
							Техническая помощь
						</p>
					)}
				</>
			)}
			<button type="button" className="button-subtext">
				Изменить
			</button>
		</section>
	);
}
