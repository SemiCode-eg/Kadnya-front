/* eslint-disable react/prop-types */
export default function CardImage({ image, height = "24", width = "5/6" }) {
	return (
		<>
			{image ? (
				<img src={image} className={`w-${width} h-${height} rounded-lg`} />
			) : (
				<div
					className={`w-${width} h-${height} rounded-lg 
            bg-gradient-to-r from-violet-200 to-teal-300`}
				></div>
			)}
		</>
	);
}
