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
  titlePrefix = 1,
  expanded = true,
  panel,
  toggleExpand = () => {},
}) {
  const handleQuestionDelete = event => {
    event.preventDefault()
    dispatchQuestions({
      type: questionsKeys.DELETE,
      payload: { index },
    })
  }

  return (
    <Accordion
      expanded={expanded === panel}
      onChange={toggleExpand}
      className="px-4">
      <AccordionSummary
        expandIcon={<CaretDown size={24} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header">
        <Typography
          variant="h6"
          component="h3"
          textAlign="start"
          sx={{ width: '33%', flexShrink: 0 }}>
          {titlePrefix} Question
        </Typography>
        <DeleteButton
          className="!ml-auto !mr-4"
          onDelete={handleQuestionDelete}
        />
      </AccordionSummary>
      <AccordionDetails>
        <QuestionFrom
          question={question}
          dispatchQuestions={dispatchQuestions}
          index={index}
        />
      </AccordionDetails>
    </Accordion>
  )
}
