import Question from './Question'

export default function Questions({
  questions,
  dispatchQuestions,
  expanded,
  setExpanded,
}) {
  const QUESTIONS_LENGTH = questions?.length

  const determineQuestionPanel = (index, id) =>
    index + 1 !== QUESTIONS_LENGTH || id ? `Q${index}` : 'NEW'

  const determineQuestionTitlePrefix = (index, id) =>
    index + 1 !== QUESTIONS_LENGTH || id ? `${index + 1}.` : 'New'

  const handleQuestionExpand = panel => {
    setExpanded(prevState => (panel !== prevState ? panel : null))
  }

  return (
    QUESTIONS_LENGTH !== 0 &&
    questions.map((question, index) => (
      <Question
        key={`Q${question?.id || 'new'.concat(index)}`}
        index={index}
        question={question}
        dispatchQuestions={dispatchQuestions}
        titlePrefix={determineQuestionTitlePrefix(index, question?.id)}
        expanded={expanded}
        panel={determineQuestionPanel(index, question?.id)}
        toggleExpand={() =>
          handleQuestionExpand(determineQuestionPanel(index, question?.id))
        }
      />
    ))
  )
}
