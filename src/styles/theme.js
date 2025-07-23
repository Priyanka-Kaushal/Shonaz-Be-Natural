import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#faf9f8', 
      // Off White / Linen
      paper: '#ffffff',
    },
    text: {
      primary: '#FAF5ED',
      secondary: '#4A4A4A',
    },
    primary: {
      main: '#45523e',
      // Olive Green / Rifle Green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B29F7E',
      // Khaki / Desert Sand
      contrastText: '#ffffff',
    },
    
    success: {
      main: '#81C784',
    },
    warning: {
      main: '#FFB74D',
    },
    error: {
      main: '#E57373',
    },
  },
  typography: {
    fontFamily: "'Ortica Light','Jost', 'Odoo Unicode Support Noto', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    fontSize: 16,

    
    allVariants: {
      color: '#45523e', 
      //  Olive Green / Rifle Green
    },

    h1: {
      fontSize: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#555',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 300,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '1px',
    },
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1200,
    drawer: 1300,
    modal: 1400,
    snackbar: 1500,
    tooltip: 1600,
  },
  shape: {
    borderRadius: 2,
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.05)',
    '0px 1px 5px rgba(0,0,0,0.12)',
    '0px 3px 5px rgba(0,0,0,0.1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: "10px 20px",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "#45523e",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#2e3a28",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
  
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'none',
            color: '#2e7d32',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          body1: 'p',
          body2: 'p',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
