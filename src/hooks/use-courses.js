import { useEffect, useState } from "react";
import { getCourses } from "../utils/ApiCalls";

const useCourse = () => {
	const [coursesData, setCoursesData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		const handleCourses = async () => {
			setLoading(true);

			const response = await getCourses();
			if (response.status === 404) setErrorMsg(response.message);
			else setCoursesData(response.data);

			setLoading(false);
		};
		handleCourses();
	}, []);

	return { coursesData, loading, errorMsg };
};

export default useCourse;
