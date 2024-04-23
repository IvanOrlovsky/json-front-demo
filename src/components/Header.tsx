import MainLogo from "./logo/MainLogo";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export default function Header() {
	return (
		<header className="header">
			<div>
				<MainLogo />
			</div>

			<div className="flex flex-row gap-2">
				<div className="rounded-full bg-[#F1F2F6] p-2">
					<FeedbackOutlinedIcon />
				</div>
				<div className="rounded-full bg-[#F1F2F6] p-2">
					<PhoneOutlinedIcon />
				</div>
			</div>
		</header>
	);
}
