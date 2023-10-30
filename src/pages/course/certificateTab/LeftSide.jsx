import {
	FormControlLabel,
	FormGroup,
	Switch,
	Typography,
	styled,
} from "@mui/material";
import ImageField from "../../../components/imageField/ImageField";

/* eslint-disable react/prop-types */
export default function LeftSide({
	hasCertificate = false,
	onCertificateSwitch = () => {},
	onUploadLogo = null,
}) {
	return (
		<div className="flex flex-col items-start gap-2 w-7/12">
			<Typography variant="h5" component="h2">
				Certificates
			</Typography>
			<div className="flex flex-col items-start gap-6 ml-3">
				<div className="flex flex-col gap-2">
					<Typography textAlign="start">
						Celebrate your customers by offering them a certificate upon course
						completion.
					</Typography>
					<Typography textAlign="start">
						The certificate will be emailed upon course completion. Customize
						the content of the email in Email templates.
					</Typography>
				</div>

				<FormGroup>
					<FormControlLabel
						control={
							<CertificateSwitch
								value={hasCertificate}
								onChange={onCertificateSwitch}
							/>
						}
						label="Provide certificates for this course"
					/>
				</FormGroup>

				<div className="flex flex-col gap-2">
					<Typography variant="h6" component="label" textAlign="start">
						Logo
					</Typography>
					<ImageField setImageAsset={onUploadLogo} />
				</div>
			</div>
		</div>
	);
}

const CertificateSwitch = styled(Switch)(() => ({
	"& .MuiSwitch-switchBase": {
		"&.Mui-checked": {
			"& + .MuiSwitch-track": {
				backgroundColor: "rgb(20, 184, 166)",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		backgroundColor: "rgb(20, 184, 166)",
	},
	"& .MuiSwitch-track": {
		backgroundColor: "#777",
	},
}));
