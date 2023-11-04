import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import TextField from "../../../components/forms/TextField";

/* eslint-disable react/prop-types */
export default function RightSide({
	certificateTitle,
	onCertificateTitleInput,
	courseSubtitle,
	onCourseSubtitleInput,
	courseTitle,
	onCourseTitleInput,
	includeCompletionDate,
	onIncludeCompletionDateChecked,
	showStudentName,
	onShowStudentNameChecked,
	includeUniqueSerial,
	onIncludeUniqueSerialChecked,
}) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-1 items-start">
				<label>Certificate Title</label>
				<TextField
					placeholder="Certificate of Completion"
					value={certificateTitle}
					handleChange={onCertificateTitleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 items-start">
				<label>Course Subtitle</label>
				<TextField
					placeholder="Course Subtitle"
					value={courseSubtitle}
					handleChange={onCourseSubtitleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 items-start">
				<label>Include course title&apos;s name</label>
				<TextField
					placeholder="Course Title"
					value={courseTitle}
					handleChange={onCourseTitleInput}
				/>
			</div>
			<FormGroup sx={{ textAlign: "left" }}>
				<FormControlLabel
					control={
						<Checkbox
							sx={{ color: "rgb(20, 184, 166) !important" }}
							value={includeCompletionDate}
							onChange={onIncludeCompletionDateChecked}
						/>
					}
					label="Include completion date"
				/>
				<FormControlLabel
					control={
						<Checkbox
							sx={{ color: "rgb(20, 184, 166) !important" }}
							value={showStudentName}
							onChange={onShowStudentNameChecked}
						/>
					}
					label="Show student's name"
				/>
				<FormControlLabel
					control={
						<Checkbox
							sx={{ color: "rgb(20, 184, 166) !important" }}
							value={includeUniqueSerial}
							onChange={onIncludeUniqueSerialChecked}
						/>
					}
					label="Include unique certificate serial number"
				/>
			</FormGroup>
		</div>
	);
}
