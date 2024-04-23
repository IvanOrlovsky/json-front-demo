import SimpleInput from "./SimpleInput";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SmsCode({
	name,
	forForm,
}: {
	name: string;
	forForm: string;
}) {
	return (
		<div className="flex flex-row w-full">
			<SimpleInput name={name} required={true} placeholder="Код из SMS" />
			<button
				className="rounded-r-md bg-kasko-blue w-1/12 h-[64px]"
				type="submit"
				form={forForm}
			>
				<ArrowForwardIosIcon sx={{ color: "white" }} />
			</button>
		</div>
	);
}
