import { forwardRef } from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Slide,
} from "@mui/material";
import { CaretLeft, X } from "@phosphor-icons/react";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

/* eslint-disable react/prop-types */
export default function CustomModal({ children, open, onClose, onGoBack }) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="dialog-title"
			TransitionComponent={Transition}
			classes={{
				container: "relative",
				paper:
					"after:bg-gradient-to-br after:from-indigo-500 after:to-pink-500 after:absolute after:inset-0 after:-z-10 z-1 relative",
			}}
			fullWidth
		>
			{!!onGoBack && (
				<IconButton
					aria-label="back"
					onClick={onGoBack}
					sx={{
						position: "absolute",
						left: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CaretLeft size={32} />
				</IconButton>
			)}
			<DialogTitle
				id="dialog-title"
				className={`${!!onGoBack && " text-center w-full"}`}
			>
				Add Course
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={{
					position: "absolute",
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<X size={32} />
			</IconButton>

			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
}
