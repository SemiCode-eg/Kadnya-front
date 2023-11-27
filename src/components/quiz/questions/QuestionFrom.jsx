/* eslint-disable react/prop-types */
import TextAriaField from '../../customFields/TextAriaField'
import { newQuestionReducerKeys } from '../../../hooks/use-question-reducer'
import QuestionTypeSelect from './QuestionTypeSelect'
import GradSwitch from './GradSwitch'
import MainButton from '../../mainButton/MainButton'
import QuestionChoices from './QuestionChoices'

export default function QuestionFrom({
  question,
  onQuestionChange,
  onAddQuestion,
  onUpdateQuestion,
}) {
  const {
    question: questionText,
    questionType,
    isGraded,
    choices,
    trueAnswer,
  } = question

  return (
    <form className="flex flex-col gap-4 items-center">
      <TextAriaField
        value={questionText}
        handleChange={event => {
          onQuestionChange({
            type: newQuestionReducerKeys.SET_QUESTION,
            payload: event.target.value,
          })
        }}
        placeholder="Question"
        className="w-full"
      />

      <QuestionTypeSelect
        value={questionType}
        onChange={value => {
          onQuestionChange({
            type: newQuestionReducerKeys.SET_QUESTION_TYPE,
            payload: value,
          })
        }}
      />

      <GradSwitch
        value={isGraded}
        onChange={() => {
          onQuestionChange({
            type: newQuestionReducerKeys.TOGGLE_IS_GRADED,
          })
        }}
      />

      <QuestionChoices
        choices={choices}
        onAdd={() => {
          onQuestionChange({
            type: newQuestionReducerKeys.ADD_CHOICE,
          })
        }}
        onEdit={(index, newValue) => {
          onQuestionChange({
            type: newQuestionReducerKeys.EDIT_CHOICE,
            payload: { index, newValue },
          })
        }}
        trueAnswer={trueAnswer}
        onTrueAnswerChange={value => {
          onQuestionChange({
            type: newQuestionReducerKeys.SET_TRUE_ANSWER,
            payload: value,
          })
        }}
      />

      <MainButton
        text={onAddQuestion ? 'Add Question' : 'Update Question'}
        className="!m-0"
        handleClick={() => {
          if (onAddQuestion) {
            onAddQuestion(question)
            return
          }
          onUpdateQuestion(question)
        }}
      />
    </form>
  )
}
