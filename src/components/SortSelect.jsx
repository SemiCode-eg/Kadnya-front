import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export default function SortSelect({
  options = [{ value: 'TEST', label: 'Test' }],
  onSelect = () => {},
  sortKey = '',
  label = 'Sort',
  className = '',
  selectClasses,
  hideLabel = false,
  sx = {
    '& .MuiSelect-select ': {
      paddingTop: '0.7rem',
      paddingBottom: '0.7rem',
    },
    textAlign: 'left',
  },
}) {
  return (
    <FormControl className={className}>
      {!hideLabel && <InputLabel id="sort-select-label">{label}</InputLabel>}
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={sortKey}
        label={!hideLabel ? label : ''}
        onChange={onSelect}
        className={selectClasses}
        inputProps={hideLabel ? { 'aria-label': 'Without label' }: null}
        sx={sx}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
