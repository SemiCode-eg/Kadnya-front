import { useEffect, useState } from "react";
import { getQuiz } from "../utils/ApiCalls";

export default function useQuiz(id) {
	const [quizData, setQuizData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [refresh, setRefresh] = useState(false);

	const refreshData = () => {
		setRefresh((state) => !state);
	};

	useEffect(() => {
		const getQuizData = async () => {
			setLoading(true);

			const res = await getQuiz(id);

			setQuizData(res.data || []);
			setLoading(false);
		};
		getQuizData();
	}, [id, refresh]);

	return { quizData, loading, errorMsg, refreshData };
}
