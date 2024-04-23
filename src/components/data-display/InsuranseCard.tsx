"use client";

import { useMainContext } from "@/contexts/MainContext";

export default function InsuranseCard() {
	const { setStep, paramsData } = useMainContext();
	return (
		<section className="bg-white rounded-2xl p-4 flex flex-col gap-2">
			<h2 className="mb-1">Регион использования ТС</h2>
			<p className="kasko-subtext mb-4">{`${paramsData.region.region}`}</p>
			<h2 className="mb-1">Ремонт</h2>
			<p className="kasko-subtext mb-4">{`${paramsData.repair}`}</p>
			<h2 className="mb-1">Франшиза</h2>
			<p className="kasko-subtext mb-4">{`${paramsData.franchaise} рублей`}</p>
			<button
				type="button"
				className="button-subtext"
				onClick={() => setStep(2)}
			>
				Изменить
			</button>
		</section>
	);
}
