/* eslint-disable react/prop-types */
export default function Preview({ color, children }) {
	const circles = [
		{
			color: color,
		},
	];
	return (
		<div className="flex flex-col bg-gray-200 h-60 rounded-t-lg w-full">
			<ul className="bg-white w-full">
				{circles.map((circle, index) => (
					<li
						key={index}
						className="flex p-4 bg-white items-start justify-start gap-2 rounded-t-lg border border-b-0 border-gray-200"
					>
						<span className={`w-2 h-2 bg-${circle.color} rounded-xl`}></span>
						<span className={`w-2 h-2 bg-${circle.color} rounded-xl`}></span>
						<span className={`w-2 h-2 bg-${circle.color} rounded-xl`}></span>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
}
