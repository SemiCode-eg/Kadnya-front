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
			<section className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-2 gap-4 justify-between px-3 sm:py-4 pb-6">
				<Typography
					variant="h5"
					component="h3"
					classes={{ root: "w-full text-start" }}
				>
					<span className="font-bold">{productCount}</span> {countTitle}
				</Typography>

				<div className="flex sm:gap-3 items-center sm:justify-end justify-between w-full">
					<MainButton
						text={buttonText}
						handleClick={handleFormOpen}
						icon={<ButtonIcon size={25} weight="bold" />}
						className="sm:!text-md text-sm sm:!px-8 !px-4 sm:!py-3 !py1 sm:!mr-2 !mr-0"
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
