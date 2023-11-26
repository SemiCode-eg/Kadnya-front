import Question from '../../../components/quiz/questions/Question'

export default function CurrentAddingQuestion({
  questionNum = 1,
  expanded = 'panel1',
  onClick = () => {},
  onAddQuestion = () => {},
}) {
  return (
    <Question
      questionNum={questionNum}
      expanded={expanded}
      onClick={onClick}
      onAddQuestion={onAddQuestion}
    />
  )
}
