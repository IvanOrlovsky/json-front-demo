import GAP from "@/components/GAP";
import Make from "@/components/Make";
import Model from "@/components/Model";
import FormBlock from "@/components/FormBlock";
import FIO from "@/components/FIO";
import Commisar from "@/components/Commisar";
import Crime from "@/components/Crime";
import Evacuation from "@/components/Evacuation";
import TechHelp from "@/components/TechHelp";
import Button from "@/components/Button";
import Accident from "@/components/Accident";

export const componentMap: Record<string, React.FC<any>> = {
	GAP,
	Make,
	Model,
	FormBlock,
	FIO,
	Commisar,
	Crime,
	Evacuation,
	TechHelp,
	Button,
	Accident,
};
