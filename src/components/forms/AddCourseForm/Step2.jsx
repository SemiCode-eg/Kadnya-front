import { Typography } from "@mui/material";
import ImageField from "../../imageField/ImageField";
import MainButton from "../../MainButton/MainButton";
import { Receipt, ReceiptX } from "@phosphor-icons/react";

/* eslint-disable react/prop-types */
export default function Step2({
	step = 2,
	onSelectImage = () => {},
	pricingType = "FREE",
	onChangePricingType = () => {},
}) {
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
					<div className="flex flex-col gap-4">
						<Typography
							id="add-course-form-pricing-type"
							component="label"
							variant="h6"
						>
							Price your cource
						</Typography>

						<div className="flex gap-3">
							<MainButton
								text="Free"
								icon={<ReceiptX size={32} />}
								isForm
								isPrimary={false}
								handleClick={() => {
									onChangePricingType("FREE");
								}}
								className={`!rounded-sm text-lg ${
									pricingType !== "FREE"
										? "bg-transparent !text-teal-500 hover:!bg-teal-500 hover:!text-white"
										: "hover:!text-white hover:!bg-teal-500"
								}`}
							/>
							<MainButton
								text="Paid"
								icon={<Receipt size={32} />}
								isForm
								isPrimary={false}
								handleClick={() => {
									onChangePricingType("PAID");
								}}
								className={`!rounded-sm text-lg ${
									pricingType !== "PAID"
										? "bg-transparent !text-teal-500 hover:!bg-teal-500 hover:!text-white"
										: "hover:!text-white hover:!bg-teal-500"
								}`}
							/>
						</div>
					</div>
				</div>
			</>
		)
	);
}
