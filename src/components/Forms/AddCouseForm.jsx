import { useState } from "react";
import CustomModal from "../CustomModal";

/* eslint-disable react/prop-types */
export default function AddCouseForm({ open, onClose }) {
	const [step, setStep] = useState(1);

	const handleGoBack = () => {
		setStep(1);
	};

	return (
		<CustomModal
			open={open}
			onClose={onClose}
			onGoBack={handleGoBack}
		></CustomModal>
	);
}
