import Image from "next/image";

import apartment from "../../../public/images/Apartment.png";

export default function ApartmentLogo(props) {
	return (
		<Image
			src={apartment}
			alt="apartment image"
			sizes="100%"
			{...props}
		></Image>
	);
}
