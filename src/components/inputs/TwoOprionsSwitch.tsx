import { useFormContext } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TwoOptionsSwitchProps } from "@/types/components/inputs/TwoOptionsSwitch";

export default function TwoOptionsSwitch({
	name,
	option1,
	option2,
}: TwoOptionsSwitchProps) {
	const { register, setValue, watch } = useFormContext();

	return (
		<>
			<input type="hidden" {...register(name)} />
			<Tabs defaultValue={watch(name)}>
				<TabsList>
					<TabsTrigger
						onClick={() => setValue(name, option1)}
						value={option1}
					>
						{option1}
					</TabsTrigger>
					<TabsTrigger
						onClick={() => setValue(name, option2)}
						value={option2}
					>
						{option2}
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	);
}
