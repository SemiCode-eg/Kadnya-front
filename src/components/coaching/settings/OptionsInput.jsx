import { useState } from 'react'
import TextField from '../../customFields/TextField'
import SortSelect from '../../SortSelect'
import { FormLabel } from '@mui/material'

function OptionsInput({
  sortData = [],
  optionValue = 0,
  optionUnit = '',
  onValueChange = () => {},
  onUnitChange = () => {},
  title = '',
  subTitle = '',
}) {
  const [sortKey, setSortKey] = useState(optionUnit)

  const handleSortChange = value => {
    setSortKey(value)
    onUnitChange(value)
  }

  return (
    <div className="text-left">
      <FormLabel className="!text-sky-950 !font-[400] !text-sm">
        {title}
      </FormLabel>

      <div className="flex gap-4 mt-2 mb-1">
        <TextField
          placeholder="Minimum notice period"
          type="number"
          className="sm:flex-[0.25] !py-1 text-xs"
          id="notice-period"
          value={optionValue}
          handleChange={e => {
            onValueChange(e.target.value)
          }}
        />
        <SortSelect
          className="sm:flex-[0.25]"
          options={sortData}
          sortKey={sortKey}
          onSelect={e => handleSortChange(e.target.value)}
          selectClasses="!rounded-xl !text-left"
          hideLabel={true}
          sx={{
            '& .MuiSelect-select ': {
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              fontSize: '0.8rem',
            },
            textAlign: 'left',
          }}
        />
      </div>
      <p className="text-neutral-500 text-xs">{subTitle}</p>
    </div>
  )
}

export default OptionsInput