/* eslint-disable react/prop-types */
import { FormControlLabel, Switch } from "@mui/material";

export default function GradSwitch({ value, onChange }) {
	return (
		<div className="flex w-full">
			<div className="flex gap-3">
				<FormControlLabel
					control={<Switch value={value} onChange={onChange} />}
					label="Graded question"
				/>
				<p
					className={`flex justify-center items-center px-4 gap-3 rounded-full text-white ${
						value ? "bg-teal-500" : "bg-gray-400"
					}`}
				>
					<span className="block bg-black rounded-full w-3 h-3"></span>
					Auto-graded
				</p>
			</div>
		</div>
	);
}
