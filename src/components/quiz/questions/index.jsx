import Question from './Question'

export default function Questions({
  questions,
  dispatchQuestions,
  expanded,
  setExpanded,
}) {
  const QUESTIONS_LENGTH = questions?.length

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
        titleSuffix={`${index + 1}`}
        expanded={expanded}
        panel={index}
        toggleExpand={() => handleQuestionExpand(index)}
      />
    ))
  )
}
