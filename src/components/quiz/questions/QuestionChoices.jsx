/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import TextField from '../../customFields/TextField'
import { PlusCircle } from '@phosphor-icons/react'

export default function QuestionChoices({
  choices = [],
  onAdd = () => {},
  onEdit = () => {},
  trueAnswer = 1,
  onTrueAnswerChange = () => {},
}) {
  return (
    <FormControl className="w-full flex flex-col items-center">
      <FormLabel
        id="question-radio-buttons-group-label"
        className="w-full text-left mb-3 !text-black !text-lg">
        Responses
      </FormLabel>
      <RadioGroup
        aria-labelledby="question-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        className="w-full px-2 mb-3 flex flex-col gap-4"
        value={trueAnswer}
        onChange={event => {
          onTrueAnswerChange(event.target.value)
        }}>
        {choices.map((choice, index) => (
          <div key={`${index}-${choice}`} className="flex gap-1 w-full ps-2">
            <FormControlLabel
              value={index + 1}
              control={<Radio />}
              className="!mr-0"
            />
            <TextField
              placeholder={`Choice ${index + 1}`}
              className="w-full"
              value={choice}
              handleChange={event => {
                onEdit(index, event.target.value)
              }}
            />
          </div>
        ))}
      </RadioGroup>
      <Button variant="text" startIcon={<PlusCircle />} onClick={onAdd}>
        Add Choice
      </Button>
    </FormControl>
  )
}
