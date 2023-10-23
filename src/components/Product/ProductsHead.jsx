import { Presentation } from "@phosphor-icons/react";
import { useState } from "react";
import SortSelect from "../SortSelect";
import { Typography } from "@mui/material";
import MainButton from "../MainButton/MainButton";

/* eslint-disable react/prop-types */
export default function ProductsHead({
	countTitle = "",
	productCount = 0,
	Form = () => <form></form>,
	ButtonIcon = Presentation,
	buttonText = "",
	sortOptions = [],
	sortKey = "",
	handleSort = () => {},
}) {
	const [showForm, setShowForm] = useState(false);

	const handleFormShow = () => {
		setShowForm(true);
	};

	const handleFormHide = () => {
		setShowForm(false);
	};

	return (
		<>
			{showForm === true && <Form onHideForm={handleFormHide} />}
			<section className="flex items-center justify-between px-3 py-4">
				<Typography variant="h5" component="h3">
					<span className="font-bold">{productCount}</span> {countTitle}
				</Typography>
				<h3
					className={`flex gap-2 items-center text-sky-950 outline-none transition-all duration-150 ease-in text-lg font-semibold`}
				></h3>

				<div className="flex gap-3 items-center">
					<MainButton
						text={buttonText}
						handleClick={handleFormShow}
						icon={<ButtonIcon size={25} weight="bold" />}
					/>
					<SortSelect
						options={sortOptions}
						sortKey={sortKey}
						onSelect={handleSort}
					/>
				</div>
			</section>
		</>
	);
}
