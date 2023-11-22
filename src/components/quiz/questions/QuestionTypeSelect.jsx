import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function QuestionTypeSelect() {
	return (
		<FormControl fullWidth>
			<InputLabel id="question-select-label">Question Type</InputLabel>
			<Select
				labelId="question-select-label"
				// value={age}
				label="Question Type"
				// onChange={handleChange}
			>
				<MenuItem value="MCQ">Multiple choice</MenuItem>
			</Select>
		</FormControl>
	);
}
