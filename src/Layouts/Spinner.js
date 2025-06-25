import * as React from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function FullscreenLoader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        zIndex: 1300,
      }}
    >
      <CircularProgress variant="solid" color="primary" />
    </Box>
  );
}

