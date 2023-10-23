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
	const [OpenForm, setOpenForm] = useState(false);

	const handleFormOpen = () => {
		setOpenForm(true);
	};

	const handleFormClose = () => {
		setOpenForm(false);
	};

	return (
		<>
			<Form open={OpenForm} onClose={handleFormClose} />
			<section className="flex items-center justify-between px-3 py-4">
				<Typography variant="h5" component="h3">
					<span className="font-bold">{productCount}</span> {countTitle}
				</Typography>

				<div className="flex gap-3 items-center">
					<MainButton
						text={buttonText}
						handleClick={handleFormOpen}
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
