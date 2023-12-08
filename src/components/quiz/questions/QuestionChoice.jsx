import { Checkbox, Radio } from '@mui/material'

export default function QuestionChoice({
  children,
  choiceIsTrueComponentProps,
  questionType,
}) {
  const ChoiceIsTrueComponent = () => {
    if (questionType === 'MCQ') return <Radio {...choiceIsTrueComponentProps} />
    else if (questionType === 'TF')
      return <Checkbox {...choiceIsTrueComponentProps} />
  }

  return (
    <div className="flex gap-1 w-full ps-2 mb-3">
      <ChoiceIsTrueComponent />
      {children}
    </div>
  )
}
