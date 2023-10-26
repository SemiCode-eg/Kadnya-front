/* eslint-disable react/prop-types */
import { Card, CardBody } from "@material-tailwind/react";

function CustomCard({ children, titleComponent }) {
	return (
		<main className="flex flex-col justify-center items-center sm:w-10/12 w-11/12 mx-auto gap-8">
			{titleComponent && titleComponent}
			<Card className="w-full text-center flex justify-center border rounded-md shadow p-5">
				<CardBody>{children}</CardBody>
			</Card>
		</main>
	);
}

export default CustomCard;
