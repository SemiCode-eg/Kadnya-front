/* eslint-disable react/prop-types */
import { Button, FormControl, FormLabel } from '@mui/material'
import TextField from '../../customFields/TextField'
import { PlusCircle } from '@phosphor-icons/react'
import QuestionChoice from './QuestionChoice'

export default function QuestionChoices({
  questionId,
  questionType,
  choices = [],
  onAdd = () => {},
  onTextEdit = () => {},
  onIsTrueEdit = () => {},
}) {
  return (
    <FormControl className="w-full flex flex-col items-center">
      <FormLabel
        id="question-radio-buttons-group-label"
        className="w-full text-left mb-3 !text-black !text-lg">
        Responses
      </FormLabel>

      {choices.map((choice, index) => (
        <QuestionChoice
          key={`${index}-${questionId}`}
          choiceIsTrueComponentProps={{
            checked: choice.isTrue,
            onChange: () => onIsTrueEdit(index),
          }}
          questionType={questionType}>
          <TextField
            placeholder={`Choice ${index + 1}`}
            className="w-full"
            value={choice.text}
            handleChange={event => {
              onTextEdit(index, event.target.value)
            }}
          />
        </QuestionChoice>
      ))}
      <Button variant="text" startIcon={<PlusCircle />} onClick={onAdd}>
        Add Choice
      </Button>
    </FormControl>
  )
}
