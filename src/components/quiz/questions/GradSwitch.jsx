import { FormControlLabel, Switch } from "@mui/material";

export default function GradSwitch() {
	return (
		<div className="flex w-full">
			<div className="flex gap-3">
				<FormControlLabel control={<Switch />} label="Graded question" />
				<p className="flex justify-center items-center px-4 gap-3 bg-teal-500 rounded-full">
					<span className="block bg-black rounded-full w-3 h-3"></span>
					Auto-graded
				</p>
			</div>
		</div>
	);
}
