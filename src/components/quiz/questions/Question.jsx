import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { CaretDown } from '@phosphor-icons/react'
import QuestionFrom from './QuestionFrom'
import DeleteButton from '../../deleteBtn/DeleteButton'
import { questionsKeys } from '../../../hooks/use-questions-reducer'

export default function Question({
  index = 0,
  question = {},
  dispatchQuestions = () => {},
  titleSuffix = 1,
  panel,
  expanded = true,
  setExpanded,
  validateExpandedQuestion,
  setQuestionsError,
}) {
  const isExpanded = expanded === panel

  const toggleExpand = () => {
    if (!validateExpandedQuestion()) return

    setExpanded(prevState => (panel !== prevState ? panel : null))
  }

  const handleQuestionDelete = () => {
    dispatchQuestions({
      type: questionsKeys.DELETE,
      payload: { index },
    })
    setExpanded(null)
  }

  return (
    <div className="relative">
      <Accordion expanded={isExpanded} onChange={toggleExpand} className="px-4">
        <AccordionSummary
          expandIcon={<CaretDown size={24} />}
          sx={{ opacity: !question?.id && 0.7 }}>
          <Typography
            variant="h6"
            component="h4"
            textAlign="start"
            sx={{ width: '33%', flexShrink: 0 }}>
            Question {titleSuffix}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <QuestionFrom
            index={index}
            question={question}
            dispatchQuestions={dispatchQuestions}
            setQuestionsError={setQuestionsError}
          />
        </AccordionDetails>
      </Accordion>

      <DeleteButton
        className={`!absolute top-0 right-16 ${
          expanded === panel ? 'translate-y-4' : 'translate-y-2'
        } !transition-transform`}
        onDelete={handleQuestionDelete}
      />
    </div>
  )
}
