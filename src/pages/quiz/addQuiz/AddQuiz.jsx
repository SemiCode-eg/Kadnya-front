import { Typography } from "@mui/material";
import HandleErrorLoad from "../../../components/handleErrorLoad";
import useQuiz from "../../../hooks/use-quiz";
import AddedQuestions from "./AddedQuestions";
import CurrentAddingQuestion from "./CurrentAddingQuestion";
import { useParams } from "react-router-dom";

function AddQuiz() {
	const { id } = useParams();
	const { quizData, loading, errorMsg, refreshData } = useQuiz(id);

	const handleAddQuestion = (questionData) => {
		// TODO handle send question data to API
		refreshData();
	};

	return (
		<HandleErrorLoad errorMsg={errorMsg} loading={loading}>
			<Typography variant="h4" textAlign="start" gutterBottom>
				Questions
			</Typography>
			{quizData?.length !== 0 ?? <AddedQuestions quizData={quizData} />}
			<CurrentAddingQuestion onAddQuestion={handleAddQuestion} />
		</HandleErrorLoad>
	);
}

export default AddQuiz;
