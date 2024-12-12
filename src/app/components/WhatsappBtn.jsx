import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const WhatsappBtn = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!isMobile) return null;

  return (
    <Fab
      aria-label="WhatsApp"
      href="https://wa.me/996555886168"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: '65px',
        height: '65px',
        position: 'fixed',
        bottom: 30,
        right: 20,
        zIndex: 1000,
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        animation: `${pulse} 2s infinite`,
        '&:hover': {
          backgroundColor: '#1EBE54',
        },
      }}
    >
      <WhatsAppIcon 
      sx={{
        width: '45px',
        height: '45px'
      }}
      />
    </Fab>
  );
};

export default WhatsappBtn;