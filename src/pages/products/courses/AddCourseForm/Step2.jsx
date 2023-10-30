import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import ImageField from "../../../../components/imageField/ImageField";
import MainButton from "../../../../components/mainButton/MainButton";
import { Receipt, ReceiptX } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getCategories } from "../../../../utils/ApiCalls";

/* eslint-disable react/prop-types */
export default function Step2({
	step = 2,
	onSelectImage = () => {},
	pricingType = "FREE",
	onChangePricingType = () => {},
	price = 0,
	onChangePrice = () => {},
	category = 1,
	onChangeCategory = () => {},
}) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await getCategories();

			setCategories(res.data);
		};
		fetchCategories();
	}, []);

	return (
		step === 2 && (
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
						<ImageField isVertical={false} setImageAsset={onSelectImage} />
					</div>
					<div className="flex justify-between gap-8">
						<div className="flex flex-col gap-4 w-1/2">
							<Typography
								id="add-course-form-pricing-type"
								component="label"
								variant="h6"
							>
								Price your cource
							</Typography>

							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<MainButton
										text="Free"
										icon={<ReceiptX size={30} />}
										isForm
										isPrimary={false}
										handleClick={() => {
											onChangePricingType("FREE");
										}}
										className={`!rounded-sm text-lg sm:px-8 sm:py-3 !px-5 ${
											pricingType !== "FREE"
												? "bg-transparent !text-teal-500 hover:!bg-teal-500 hover:!text-white"
												: "hover:!text-white hover:!bg-teal-500"
										}`}
									/>
									<MainButton
										text="Paid"
										icon={<Receipt size={30} />}
										isForm
										isPrimary={false}
										handleClick={() => {
											onChangePricingType("PAID");
										}}
										className={`!rounded-sm text-lg sm:px-8 sm:py-3 !px-5 ${
											pricingType !== "PAID"
												? "bg-transparent !text-teal-500 hover:!bg-teal-500 hover:!text-white"
												: "hover:!text-white hover:!bg-teal-500"
										}`}
									/>
								</div>
								{pricingType === "PAID" && (
									<div className="flex flex-col gap-2">
										<Typography
											id="add-course-form-pricing-type"
											component="label"
											variant="subtitle1"
										>
											Price
										</Typography>
										<input
											type="number"
											className="border py-4 px-4 outline-none"
											value={price}
											onChange={onChangePrice}
										/>
									</div>
								)}
							</div>
						</div>
						<div className="flex flex-col gap-4 w-1/2">
							<Typography
								id="add-course-form-category"
								component="label"
								variant="h6"
							>
								Choose the category
							</Typography>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Category</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={category}
									label="Categories"
									onChange={onChangeCategory}
								>
									{categories.map((category) => (
										<MenuItem key={category.id} value={category.id}>
											{category.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
					</div>
				</div>
			</>
		)
	);
}
