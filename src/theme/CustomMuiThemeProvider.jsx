/* eslint-disable react/prop-types */
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#14b8a6",
		},
	},
});

export default function CustomMuiThemeProvider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
