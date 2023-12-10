import Question from './Question'

export default function Questions({
  questions,
  dispatchQuestions,
  expanded,
  setExpanded,
}) {
  const QUESTIONS_LENGTH = questions?.length

  const determineQuestionPanel = index =>
    index + 1 !== QUESTIONS_LENGTH ? `Q${index}` : 'NEW'

  const determineQuestionTitlePrefix = index =>
    index + 1 !== QUESTIONS_LENGTH ? `${index + 1}.` : 'New'

  const handleQuestionExpand = panel => {
    setExpanded(prevState => (panel !== prevState ? panel : null))
  }

  return (
    QUESTIONS_LENGTH !== 0 &&
    questions.map((question, index) => (
      <Question
        key={`Q${question?.id || index}`}
        index={index}
        question={question}
        dispatchQuestions={dispatchQuestions}
        titlePrefix={determineQuestionTitlePrefix(index)}
        expanded={expanded}
        panel={determineQuestionPanel(index)}
        toggleExpand={() => handleQuestionExpand(determineQuestionPanel(index))}
      />
    ))
  )
}
