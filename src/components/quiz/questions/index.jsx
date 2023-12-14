import Question from './Question'

export default function Questions({
  questions,
  dispatchQuestions,
  expanded,
  setExpanded,
  validateExpandedQuestion,
  setQuestionsError,
}) {
  const QUESTIONS_LENGTH = questions?.length

  return (
    QUESTIONS_LENGTH !== 0 &&
    questions.map((question, index) => (
      <Question
        key={`Q${question?.id || 'new'.concat(index)}`}
        index={index}
        question={question}
        dispatchQuestions={dispatchQuestions}
        titleSuffix={`${index + 1}`}
        panel={index}
        expanded={expanded}
        setExpanded={setExpanded}
        validateExpandedQuestion={validateExpandedQuestion}
        setQuestionsError={setQuestionsError}
      />
    ))
  )
}
