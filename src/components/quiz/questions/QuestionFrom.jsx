import TextAriaField from "../../forms/TextAriaField";
import QuestionTypeSelect from "./QuestionTypeSelect";
import GradSwitch from "./GradSwitch";
import QuestionOptions from "./QuestionOptions";
import MainButton from "../../mainButton/MainButton";

export default function QuestionFrom() {
	return (
		<form className="flex flex-col gap-4 items-center">
			<TextAriaField placeholder="Question" className="w-full" />
			<QuestionTypeSelect />
			<GradSwitch />
			<QuestionOptions />

			<MainButton text="Add Question" />
		</form>
	);
}
