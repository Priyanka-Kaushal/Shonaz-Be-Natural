// // src/theme.js
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     mode: 'light', // or 'dark'
//     primary: {
//       main: '#000000',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#f9f9f9',
//       paper: '#ffffff',
//     },
//     text: {
//       primary: '#000000',
//     },
//   },
//   typography: {
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     button: {
//       textTransform: 'none',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '12px',
//           fontWeight: 'bold',
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           borderRadius: '8px',
//         },
//       },
//     },
//   },
// });

// export default theme;
// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;
