/* eslint-disable react/prop-types */
import TextAriaField from '../../customFields/TextAriaField'
import useQuestionsReducer from '../../../hooks/use-questions-reducer'
import QuestionTypeSelect from './QuestionTypeSelect'
import GradSwitch from './GradSwitch'
import QuestionChoices from './QuestionChoices'

export default function QuestionFrom({ index, question }) {
  const { questionText, questionType, isGraded, image, choices } = question
  const { dispatchQuestions, questionsKeys } = useQuestionsReducer()

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
        onTextEdit={newValue =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_TEXT,
            payload: { index, newValue },
          })
        }
        onIsTrueEdit={() =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_IS_TRUE,
            payload: { index, questionType },
          })
        }
        onImageEdit={newValue =>
          dispatchQuestions({
            type: questionsKeys.EDIT_CHOICE_IMAGE,
            payload: { index, newValue },
          })
        }
      />
    </form>
  )
}
