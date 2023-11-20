import HandleErrorLoad from "../../../components/handleErrorLoad";
import useQuiz from "../../../hooks/use-quiz";
import AddedQuestions from "./AddedQuestions";
import CurrentAddingQuestion from "./CurrentAddingQuestion";
import { useParams } from "react-router-dom";

function AddQuiz() {
	const { id } = useParams();
	const { quizData, loading, errorMsg } = useQuiz(id);

	return (
		<div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
			<HandleErrorLoad errorMsg={errorMsg} loading={loading}>
				<AddedQuestions quizData={quizData} />
				<CurrentAddingQuestion />
			</HandleErrorLoad>
		</div>
	);
}

export default AddQuiz;
