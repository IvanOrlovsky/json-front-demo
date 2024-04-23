import { AutoFormValues } from "../forms/AutoForm";
import { ParametersFormValues } from "../forms/ParametersForm";
import { PersonalDataValues } from "../forms/PersonalDataForm";
import { RisksFormValues } from "../forms/RisksForm";

export type ComponentData =
	| { type: "PersonalDataCard"; personalData: PersonalDataValues }
	| {
			type: "RisksCard";
			risksData: RisksFormValues;
	  }
	| {
			type: "FormBlock";
			title: string;
			hasSubmitBtn?: boolean;
			submitBtnLabel?: string;
			forForm?: string;
			children: ComponentData[];
	  }
	| {
			type: "Accordion";
			children: ComponentData[];
			title: string;
	  }
	| { type: "InsuranseCard"; paramsData: ParametersFormValues }
	| { type: "AutoCard"; autoData: AutoFormValues }
	| {
			type: "Layer";
			props: {
				layout: "vertical" | "horizontal";
				components: ComponentData[];
			};
	  };
