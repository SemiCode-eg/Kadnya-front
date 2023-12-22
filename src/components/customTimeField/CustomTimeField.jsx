import { TimeField } from '@mui/x-date-pickers'

function CustomTimeField({ label, value, onChange, onBlur, className }) {
  return (
    <TimeField
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
      sx={timePickerSx}
    />
  )
}

export default CustomTimeField

const timePickerSx = {
  '& .MuiInputBase-input': {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderRadius: '100%',
    fontSize: '0.8rem',
  },
  '& .MuiFormLabel-root': {
    fontSize: '0.8rem',
  },
}
