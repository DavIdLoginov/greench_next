import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
  return (
    <Fab
      aria-label="WhatsApp"
      href="https://wa.me/996555886168"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: '70px',
        height: '70px',
        position: 'fixed',
        bottom: "20px",
        right: {xs: '5%', md: '10%',},
        zIndex: 1000,
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        animation: `${pulse} 2s infinite`,
        '&:hover': {
          backgroundColor: '#1EBE54',
        },
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
    >
      <WhatsAppIcon 
      sx={{
        width: '50px',
        height: '50px'
      }}
      />
    </Fab>
  );
};

export default WhatsappBtn;
