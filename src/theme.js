import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    textPrimary: {
      main: '#FFFFFF',
    },
    textSecondary: {
      main: "#313131",
    },
    textTretiary: {
      main: "rgba(49, 49, 49, 0.5)",
    },
    backgroundGradient: {
      main: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    },
    backgroundColor: {
      main: '#01BDA7',
    },
    buttonColor: {
      main: "#00BFA5",
    },
    separator: {
      main: "#CAE7FE",
    },
    error: {
      main: "#EB5757",
    },
    validated: {
      main: "#359FF4",
    }
  },
});

export default theme;
