import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'


export default function SortSelect({
  options = [{ value: 'TEST', label: 'Test' }],
  onSelect = () => {},
  sortKey = '',
  label = 'Sort',
  className = '',
  selectClasses,
  hideLabel = false,
  sx = {},
}) {
  return (
    <FormControl className={className}>
      {!hideLabel && <InputLabel id="sort-select-label">{label}</InputLabel>}
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={sortKey}
        label={!hideLabel ? 'Sort' : ''}
        onChange={onSelect}
        className={selectClasses}
        inputProps={hideLabel && { 'aria-label': 'Without label' }}
        sx={sx}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
