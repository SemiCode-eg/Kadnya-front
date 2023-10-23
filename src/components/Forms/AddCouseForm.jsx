import { useReducer, useState } from "react";
import CustomModal from "../CustomModal";
import { Typography } from "@mui/material";
import TextField from "./TextField";
import TextAriaField from "./TextAriaField";
import MainButton from "../MainButton/MainButton";
import ImageField from "../imageField/ImageField";

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
	}
}

const maxStep = 2;

const formInitialState = { title: "", description: "" };

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
		dispatchFormData("setTitle", { payload: event.target.value });
	};

	const handleDescTextAria = (event) => {
		dispatchFormData("setDescription", { payload: event.target.value });
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
				{step === 1 && (
					<>
						<div className="flex flex-col gap-1 w-full">
							<Typography variant="h5" component="h3">
								Courses Cetails
							</Typography>
							<Typography
								variant="body"
								component="p"
								className=" text-gray-700"
							>
								We&apos;ll use your title and description to generate a sample
								course outline:
							</Typography>
						</div>

						<div className="flex flex-col gap-4 w-full">
							<div className="flex flex-col gap-2">
								<Typography
									id="add-course-form-title"
									component="label"
									variant="subtitle1"
								>
									Title
								</Typography>
								<TextField
									placeholder="Examples: Public Speaking 101, Learning piano, ..."
									value={formData.title}
									handleChange={handleTitleInput}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<Typography
									id="add-course-form-description"
									component="label"
									variant="subtitle1"
								>
									Brief Description
								</Typography>
								<TextAriaField
									placeholder="Example: Learn the skills required to ..."
									value={formData.description}
									handleChange={handleDescTextAria}
								/>
							</div>
						</div>
					</>
				)}

				{step === 2 && (
					<>
						<div className="flex flex-col gap-4 w-full">
							<div className="flex flex-col gap-2">
								<Typography
									id="add-course-form-image"
									component="label"
									variant="h6"
								>
									Customize your course&apos;s appearance
								</Typography>
								<ImageField isVertical={false} />
							</div>
							<div className="flex flex-col gap-2">
								<Typography
									id="add-course-form-price"
									component="label"
									variant="h6"
								>
									Price your cource
								</Typography>
							</div>
						</div>
					</>
				)}

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
