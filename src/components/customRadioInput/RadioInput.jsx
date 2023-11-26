import styled from '@emotion/styled'
import { Radio } from '@mui/material'

const BpIcon = styled('span')(() => ({
  borderRadius: '50%',
  width: '15px',
  height: '15px',
  transition: '0.15s ease-out',
  boxShadow:
    'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    width: '15px',
    height: '15px',
    border: '5px solid black',
    backgroundColor: 'transparent',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
}))

const BpCheckedIcon = styled(BpIcon)({
  width: '15px',
  height: '15px',
  border: '5px solid black',
  backgroundColor: 'transparent',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  'input:hover ~ &': {
    backgroundColor: 'transparent',
  },
})

/* eslint-disable react/prop-types */
function RadioInput({
  selectedValue = '',
  handleSelect = () => {},
  radioValue = '',
  radioLabel = '',
  radioSublabel = '',
  radioLabelClasses = '',
  radioSublabelClasses = '',
  backgroundColor = '#F66A82',
}) {
  const radioLabelClass = `${radioLabelClasses}`
  const radioSublabelClass = `${radioSublabelClasses}`

  const handleChange = e => {
    handleSelect(e.target.value)
  }

  return (
    <div
      className="border-2 shadow-sm rounded-[8px] w-full flex items-start py-3.5 cursor-pointer relative duration-150 ease-in"
      style={{
        backgroundColor:
          selectedValue === radioValue ? backgroundColor : 'white',
        borderColor: selectedValue === radioValue ? 'black' : '#d9dce0',
      }}
    >
      <Radio
        checked={selectedValue === radioValue}
        onChange={handleChange}
        value={radioValue}
        id={radioValue}
        icon={<BpIcon />}
        checkedIcon={<BpCheckedIcon />}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
            color: 'black',
          },
        }}
      />

      <label htmlFor={radioValue} className="cursor-pointer">
        <p className={radioLabelClass}>{radioLabel}</p>
        {radioSublabel && <p className={radioSublabelClass}>{radioSublabel}</p>}
      </label>
    </div>
  )
}

export default RadioInput
