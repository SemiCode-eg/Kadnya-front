import { useReducer, useState } from "react";
import CustomModal from "../../CustomModal";
import MainButton from "../../MainButton/MainButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import AddCoursePreview from "./Preview";
import axios from "axios";

function formReducer(state, action) {
	switch (action.type) {
		case "setTitle":
			return {
				...state,
				title: action.payload,
			};
		case "setDescription":
			return {
				...state,
				description: action.payload,
			};
		case "setImage":
			return {
				...state,
				image: action.payload,
			};
		case "setPricingType":
			return {
				...state,
				pricingType: action.payload,
			};
		case "setError":
			return {
				...state,
				error: action.payload,
			};
	}
}

const maxStep = 2;
const titleInputErrMsg = "Title mustn't be empty";
const descInputErrMsg = "Description mustn't be empty";
const imgInputErrMsg = "Add course image";

const formInitialState = {
	title: "",
	description: "",
	image: null,
	pricingType: "FREE",
	error: "",
};

/* eslint-disable react/prop-types */
export default function AddCouseForm({ open, onClose }) {
	const [step, setStep] = useState(1);
	const [formData, dispatchFormData] = useReducer(
		formReducer,
		formInitialState
	);
	const [loading, setLoading] = useState(false);

	const handleGoBack = () => {
		setStep((step) => --step);
	};

	const handleTitleInput = (event) => {
		dispatchFormData({ type: "setTitle", payload: event.target.value });
	};

	const handleDescTextAria = (event) => {
		dispatchFormData({ type: "setDescription", payload: event.target.value });
	};

	const handleImage = (image) => {
		dispatchFormData({ type: "setDescription", payload: image });
	};

	const handlePricingType = (value) => {
		dispatchFormData({ type: "setPricingType", payload: value });
	};

	const handleContinue = () => {
		setStep((step) => ++step);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { title, description, image, pricingType } = formData;
		if (!title) return dispatchFormData("setError", titleInputErrMsg);
		if (!description) return dispatchFormData("setError", descInputErrMsg);
		if (!image) return dispatchFormData("setError", imgInputErrMsg);

		setLoading(true);
		const res = await axios("/courses/create", {
			title,
			description,
			price: 0,
		});
		setLoading(false);
	};

	return (
		<CustomModal
			title="Add Course"
			open={open}
			onClose={onClose}
			onGoBack={handleGoBack}
			fullWidth
			maxWidth="md"
			step={step}
		>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-6 items-center px-28"
			>
				<Step1
					step={step}
					title={formData.title}
					onTitleInput={handleTitleInput}
					description={formData.description}
					onDescInput={handleDescTextAria}
				/>

				<Step2
					step={step}
					onSelectImage={handleImage}
					pricingType={formData.pricingType}
					onChangePricingType={handlePricingType}
				/>

				<AddCoursePreview
					title={formData.title}
					description={formData.description}
				/>

				<MainButton
					text={step === maxStep ? "Finish" : "Continue"}
					className="!px-28"
					handleClick={step === maxStep ? handleSubmit : handleContinue}
				/>
			</form>
		</CustomModal>
	);
}
