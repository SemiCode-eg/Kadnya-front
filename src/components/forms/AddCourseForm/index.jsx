import { useReducer, useState } from "react";
import CustomModal from "../../CustomModal";
import MainButton from "../../MainButton/MainButton";
import Step1 from "./Step1";
import Step2 from "./Step2";

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
	}
}

const maxStep = 2;

const formInitialState = {
	title: "",
	description: "",
	image: null,
	pricingType: "FREE",
};

/* eslint-disable react/prop-types */
export default function AddCouseForm({ open, onClose }) {
	const [step, setStep] = useState(1);
	const [formData, dispatchFormData] = useReducer(
		formReducer,
		formInitialState
	);

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

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<CustomModal
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

				<p className="text-2xl text-center">Preview</p>

				<MainButton
					text={step === maxStep ? "Finish" : "Continue"}
					className="!px-28"
					handleClick={step === maxStep ? handleSubmit : handleContinue}
				/>
			</form>
		</CustomModal>
	);
}
