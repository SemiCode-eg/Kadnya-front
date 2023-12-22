import { MobileTimePicker } from '@mui/x-date-pickers'

function TimeField({ label, value, onChange, onClose, className }) {
  return (
    <MobileTimePicker
      label={label}
      value={value}
      onChange={onChange}
      onClose={onClose}
      className={className}
      sx={timePickerSx}
    />
  )
}

export default TimeField

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
