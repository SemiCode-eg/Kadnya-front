import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
/* eslint-disable react/prop-types */
export default function SortSelect({
	options = [{ value: "TEST", label: "Test" }],
	onSelect = () => {},
	sortKey = "",
	label = "Sort",
	className= "",
	selectClasses
}) {
	return (
		<FormControl className={className}>
			<InputLabel id="sort-select-label">{label}</InputLabel>
			<Select
				labelId="sort-select-label"
				id="sort-select"
				value={sortKey}
				label="Sort"
				onChange={onSelect}
				className={selectClasses}
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
