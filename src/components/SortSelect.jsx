import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
/* eslint-disable react/prop-types */
export default function SortSelect({
	options = [{ value: "TEST", label: "Test" }],
	onSelect = () => {},
	defaultValue = options[0].value,
}) {
	const [value, setValue] = useState(defaultValue);

	const handleSelect = (event) => {
		onSelect(event.target.value);
		setValue(event.target.value);
	};

	return (
		<FormControl>
			<InputLabel id="sort-select-label">Sort</InputLabel>
			<Select
				labelId="sort-select-label"
				id="sort-select"
				value={value}
				label="Sort"
				onChange={handleSelect}
			>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
