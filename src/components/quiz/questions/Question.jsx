import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import QuestionFrom from "./QuestionFrom";

export default function Question({ expanded, onClick, questionNum }) {
	return (
		<Accordion expanded={expanded === "panel1"} onChange={onClick("panel1")}>
			<AccordionSummary
				expandIcon={<CaretDown size={24} />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography
					variant="h6"
					component="h3"
					textAlign="start"
					sx={{ width: "33%", flexShrink: 0 }}
				>
					Question {questionNum}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<QuestionFrom />
			</AccordionDetails>
		</Accordion>
	);
}
