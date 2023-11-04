import { useParams } from "react-router-dom";
import useCourse from "../../../hooks/use-course";
import OutlineHeader from "../../../components/outlineHeader/OutlineHeader";
import Container from "../Container";
import { Typography } from "@mui/material";
import SittingsForm from "./SittingsForm";
import { useEffect, useReducer, useState } from "react";
import { updateCourse } from "../../../utils/ApiCalls";
import HandleErrorLoad from "../../../components/handleErrorLoad/index";

const initailFormData = {
	title: "",
	description: "",
	logo: null,
	error: "",
};

const reducerKeys = {
	setTitle: "setTitle",
	setDescription: "setDescription",
	setLogo: "setLogo",
	setError: "setError",
};

const formDataReducer = (state, action) => {
	switch (action.type) {
		case reducerKeys.setTitle:
			return {
				...state,
				title: action.payload,
			};
		case reducerKeys.setDescription:
			return {
				...state,
				description: action.payload,
			};
		case reducerKeys.setLogo:
			return {
				...state,
				logo: action.payload,
			};
		case reducerKeys.setError:
			return {
				...state,
				error: action.payload,
			};
	}
};

function SittingsTab() {
	const { id } = useParams();
	const { courseData, errorMsg, loading } = useCourse(id);
	const [formData, dispatchFormData] = useReducer(
		formDataReducer,
		initailFormData
	);
	const [postLoading, setPostLoading] = useState(false);

	useEffect(() => {
		dispatchFormData({
			type: reducerKeys.setTitle,
			payload: courseData?.title,
		});
		dispatchFormData({
			type: reducerKeys.setDescription,
			payload: courseData?.description,
		});
	}, [courseData]);

	const handleLogoUpload = (logo) => {
		dispatchFormData({ type: reducerKeys.setLogo, payload: logo });
	};

	const handleTitle = (e) => {
		dispatchFormData({ type: reducerKeys.setTitle, payload: e.target.value });
	};

	const handleDescription = (e) => {
		dispatchFormData({
			type: reducerKeys.setDescription,
			payload: e.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { title, description, logo } = formData;

		if (!title)
			return dispatchFormData({
				type: reducerKeys.setError,
				payload: "You must enter your title",
			});
		if (!description)
			return dispatchFormData({
				type: reducerKeys.setError,
				payload: "You must enter your description",
			});

		setPostLoading(true);

		const response = await updateCourse(id, {
			title,
			description,
			image: logo,
		});

		console.log(response);
	};

	return (
		<HandleErrorLoad loading={loading || postLoading} errorMsg={errorMsg}>
			<OutlineHeader courseData={courseData} showContentBtn={false} />
			<Container>
				<Typography variant="h5" component="h2" textAlign="start">
					Details
				</Typography>

				<div className="flex flex-col gap-5 ml-3 mt-2">
					<Typography textAlign="start">
						Give your product a title, add a description, and upload a product
						thumbnail image. This image will show in your customer&apos;s
						library of products they have purchased from you
					</Typography>

					<SittingsForm
						onSubmit={handleSubmit}
						title={formData.title}
						onTitleInput={handleTitle}
						description={formData.description}
						onDescriptionInput={handleDescription}
						onImageUpload={handleLogoUpload}
						imageURL={courseData?.image}
					/>
				</div>
			</Container>
		</HandleErrorLoad>
	);
}

export default SittingsTab;
