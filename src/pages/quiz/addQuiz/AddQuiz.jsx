import { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import HandleErrorLoad from "../../../components/handleErrorLoad";
import useQuiz from "../../../hooks/use-quiz";
import Question from "../../../components/quiz/questions/Question";
import useQuestionReducer from "../../../hooks/use-question-reducer";

const errorTypes = {
	question: "question",
	choices: "choices",
};

function AddQuiz() {
	const { id } = useParams();
	const { quizData, loading, errorMsg, refreshData } = useQuiz(id);
	const [expanded, setExpanded] = useState("NEW");
	const { newQuestionReducerKeys, newQuestion, dispatchNewQuestion } =
		useQuestionReducer();

	const handleQuestionExpand = (panel) => {
		setExpanded(panel);
	};

	const handleQuestionError = (errorType, questionErrorMessage) => {
		if (errorType === errorTypes.question)
			dispatchNewQuestion({
				type: newQuestionReducerKeys.SET_ERROR,
				payload: questionErrorMessage,
			});
		else if (errorType === errorTypes.choices)
			dispatchNewQuestion({
				type: newQuestionReducerKeys.SET_ERROR,
				payload: questionErrorMessage,
			});

		return false;
	};

	const validateQuestion = (questionData) => {
		if (questionData.question.trim() === "")
			return handleQuestionError(
				errorTypes.question,
				"Question field is required"
			);
		if (!questionData.choices.find((choice) => choice === ""))
			return handleQuestionError(errorTypes.choices, "Fill the choices");
	};

	const resetQuiz = () => {
		dispatchNewQuestion({ type: newQuestionReducerKeys.INIT });
		setExpanded("NEW");
		refreshData();
	};

	const handleAddQuestion = (questionData) => {
		const isValid = validateQuestion(questionData);
		if (!isValid) return;

		// TODO handle send question data to API

		resetQuiz();
	};

	const handleQuestionUpdate = (questionData) => {
		validateQuestion(questionData);

		// TODO handle send question data to API

		resetQuiz();
	};

	return (
		<HandleErrorLoad
			errorMsg={newQuestion.error !== "" ? newQuestion.error : errorMsg}
			loading={loading}
		>
			<Typography variant="h4" textAlign="start" gutterBottom>
				Questions
			</Typography>

			{quizData.length === 0 &&
				quizData.map((question, index) => (
					<Question
						key={question.id || index}
						question={question}
						onQuestionChange={dispatchNewQuestion}
						questionNum={index + 1}
						expanded={expanded}
						panel={`Q${index}`}
						toggleExpand={() => handleQuestionExpand(`Q${index}`)}
						onUpdateQuestion={handleQuestionUpdate}
					/>
				))}

			<Question
				question={newQuestion}
				onQuestionChange={dispatchNewQuestion}
				titlePrefix="New"
				expanded={expanded}
				panel="NEW"
				toggleExpand={() => handleQuestionExpand("NEW")}
				onAddQuestion={handleAddQuestion}
			/>
		</HandleErrorLoad>
	);
}

export default AddQuiz;
