import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
/* eslint-disable react/prop-types */
export default function SortSelect({
	options = [{ value: "TEST", label: "Test" }],
	onSelect = () => {},
	sortKey = "",
}) {
	return (
		<FormControl>
			<InputLabel id="sort-select-label">Sort</InputLabel>
			<Select
				labelId="sort-select-label"
				id="sort-select"
				value={sortKey}
				label="Sort"
				onChange={onSelect}
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
