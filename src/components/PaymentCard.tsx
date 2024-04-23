import { useForm } from "react-hook-form";

import VisaLogo from "./logo/VisaLogo";

import Swal from "sweetalert2";

export default function PaymentCard({ onSubmit }: { onSubmit: () => void }) {
	const form = useForm<{
		cardNumber: string;
		expireDate: string;
		cvv: string;
	}>();

	return (
		<section className="rounded-2xl bg-indigo-900 flex flex-col my-3 ">
			<div className="flex flex-col gap-5 m-4">
				<span className="text-white font-roboto text-xs">
					ООО СК &quot;Пульс&quot;
				</span>
				<span className="text-white font-roboto text-xl font-bold">
					Оплата заказа
				</span>
			</div>
			<form
				className="bg-white rounded-2xl flex flex-col gap-4 p-5"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className="bg-kasko-bg flex flex-col rounded-xl gap-1 p-2">
					<label className="text-xs font-roboto">Номер карты</label>
					<div className="flex flex-row gap-2">
						<VisaLogo className="w-16 self-center" />
						<input
							id="cardNumber"
							className="grow bg-kasko-bg border-2 rounded-xl border-gray-400 p-2 text-base font-roboto font-semibold	"
							{...form.register("cardNumber", { required: true })}
						/>
					</div>
				</div>
				<div className=" flex flex-row justify-between gap-1">
					<div className="flex flex-col bg-kasko-bg p-2 rounded-xl">
						<label className="text-xs font-roboto">
							Срок действия
						</label>

						<input
							id="expireDate"
							className=" bg-kasko-bg border-2 rounded-xl border-gray-400 p-2 text-base font-roboto font-semibold w-20	"
							{...form.register("expireDate", {
								required: true,
							})}
						/>
					</div>
					<div className="flex flex-col bg-kasko-bg p-2 rounded-xl">
						<label className="text-xs font-roboto">CVV</label>
						<input
							id="cvv"
							type="password"
							className=" bg-kasko-bg border-2 rounded-xl border-gray-400 p-2 text-base font-roboto font-semibold	w-20"
							{...form.register("cvv", {
								required: true,
							})}
						/>
					</div>
				</div>
				<span className="flex flex-row justify-between text-xl font-roboto my-3	">
					<span>Сумма к оплате:</span>
					<span className="font-bold">XXXX рублей</span>
				</span>
				<button
					type="submit"
					className="bg-gradient-to-t from-violet-500 to-blue-500 p-4 text-md font-roboto text-white rounded-2xl font-bold"
				>
					Оплатить
				</button>
				<span className="kasko-subtext">
					Нажимая кнопку &quot;Оплатить&quot; вы соглашаетесь с
					<span
						className="underline cursor-pointer"
						onClick={() => {
							Swal.fire("Оферта");
						}}
					>
						условиями оферы
					</span>
				</span>
			</form>
		</section>
	);
}
