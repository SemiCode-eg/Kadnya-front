/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export default function QuestionTypeSelect({ value, onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="question-select-label">Question Type</InputLabel>
      <Select
        labelId="question-select-label"
        defaultValue="MCQ"
        value={value}
        label="Question Type"
        onChange={event => onChange(event.target.value)}
        sx={{ textAlign: 'left' }}>
        <MenuItem value="MCQ" sx={{ textAlign: 'left' }}>
          Multiple choice
        </MenuItem>
        <MenuItem value="TF" sx={{ textAlign: 'left' }}>
          True or false
        </MenuItem>
      </Select>
    </FormControl>
  )
}
