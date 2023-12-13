/* eslint-disable react/prop-types */
import TextAriaField from '../../customFields/TextAriaField'
import { questionsKeys } from '../../../hooks/use-questions-reducer'
import QuestionTypeSelect from './QuestionTypeSelect'
import GradSwitch from './GradSwitch'
import QuestionChoices from './QuestionChoices'

export default function QuestionFrom({ question, dispatchQuestions, index }) {
  const { id, questionText, questionType, isGraded, image, choices } = question

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
      />

      <GradSwitch
        isGraded={isGraded}
        onGradedChange={() => {
          dispatchQuestions({
            type: questionsKeys.TOGGLE_IS_GRADED,
            payload: { index },
          })
        }}
        imageURL={image}
        onImageURLChange={image => {
          dispatchQuestions({
            type: questionsKeys.SET_IMAGE,
            payload: { index, value: image },
          })
        }}
        onImageURLDelete={() => {
          dispatchQuestions({
            type: questionsKeys.DELETE_IMAGE,
            payload: { index },
          })
        }}
      />

      <QuestionChoices
        questionId={id || index}
        questionType={questionType}
        choices={choices}
        onAdd={() => {
          if (questionType === 'TF' && choices.length > 1) {
            dispatchQuestions({
              TypeError: questionsKeys.SET_ERROR,
              payload: {
                value:
                  "can't add more than two choices in true or false questions",
              },
            })
            return
          }
          dispatchQuestions({
            type: questionsKeys.ADD_CHOICE,
            payload: { index },
          })
        }}
        onDelete={choiceIndex => {
          dispatchQuestions({
            type: questionsKeys.DELETE_CHOICE,
            payload: { index, choiceIndex },
          })
        }}
        onTextEdit={(choiceIndex, value) =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_TEXT,
            payload: { index, choiceIndex, value },
          })
        }
        onIsTrueEdit={choiceIndex =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_IS_TRUE,
            payload: { index, choiceIndex, questionType },
          })
        }
        onImageEdit={(choiceIndex, value) =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_IMAGE,
            payload: { index, choiceIndex, value },
          })
        }
      />
    </form>
  )
}
