/* eslint-disable react/prop-types */
import TextAriaField from '../../customFields/TextAriaField'
import { questionsKeys } from '../../../hooks/use-questions-reducer'
import QuestionTypeSelect from './QuestionTypeSelect'
import GradSwitch from './GradSwitch'
import QuestionChoices from './QuestionChoices'

export default function QuestionFrom({ question, dispatchQuestions, index }) {
  const { questionText, questionType, isGraded, image, choices } = question

  return (
    <form className="flex flex-col gap-4 items-center">
      <TextAriaField
        value={questionText}
        handleChange={event => {
          dispatchQuestions({
            type: questionsKeys.SET_QUESTION_TEXT,
            payload: { index, value: event.target.value },
          })
        }}
        placeholder="Question"
        className="w-full"
      />

      <QuestionTypeSelect
        value={questionType}
        onChange={value => {
          dispatchQuestions({
            type: questionsKeys.SET_QUESTION_TYPE,
            payload: { index, value },
          })
        }}
        image={image}
      />

      <GradSwitch
        value={isGraded}
        onChange={() => {
          dispatchQuestions({
            type: questionsKeys.TOGGLE_IS_GRADED,
            payload: { index },
          })
        }}
      />

      <QuestionChoices
        questionType={questionType}
        choices={choices}
        onAdd={() => {
          dispatchQuestions({
            type: questionsKeys.ADD_CHOICE,
            payload: { index },
          })
        }}
        onTextEdit={(index, newValue) =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_TEXT,
            payload: { index, newValue },
          })
        }
        onIsTrueEdit={index =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_IS_TRUE,
            payload: { index, questionType },
          })
        }
        onImageEdit={(index, newValue) =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_IMAGE,
            payload: { index, newValue },
          })
        }
      />
    </form>
  )
}
