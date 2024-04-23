export type PersonalDataValues = {
    smsCode: string;
	isPulseClient: boolean;
	phoneNumber: string;
	surname: string;
	name: string;
	patronymic: string;
	birthday: string;
	passportNumber: string;
	passportGivenBy: string;
	passportGivenDate: string;
	registrationLocation: string;
	email: string;
	isInsurantOwner: boolean;
	ownerFullName: string;
	ownerBirthday: string;
	ownerPassportNumber: string;
	ownerPassportGivenBy: string;
	ownerPassportGivenDate: string;
	ownerRegistrationLocation: string;
	isInsurantDriver: boolean;
	drivers: {
		fullName: string;
		birthday: string;
		driverLicenceNumber: string;
		beginOfExpDate: string;
	}[];
};
