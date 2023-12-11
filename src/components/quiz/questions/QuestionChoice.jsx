import { Checkbox, Radio } from '@mui/material'

export default function QuestionChoice({
  children,
  choiceIsTrueComponentProps,
  questionType,
}) {
  const ChoiceIsTrueComponent = () => {
    if (questionType === 'MCQ')
      return <Checkbox {...choiceIsTrueComponentProps} />
    else if (questionType === 'TF')
      return <Radio {...choiceIsTrueComponentProps} />
  }

  return (
    <div className="relative flex gap-1 w-full ps-2 mb-3">
      <ChoiceIsTrueComponent />
      {children}
    </div>
  )
}
