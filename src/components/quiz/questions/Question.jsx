/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { CaretDown } from '@phosphor-icons/react'
import QuestionFrom from './QuestionFrom'

export default function Question({
  index = 0,
  question = {},
  dispatchQuestions = () => {},
  titlePrefix = 1,
  expanded = true,
  panel,
  toggleExpand = () => {},
}) {
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
