// src/app/components/Footer.jsx
'use client'; // Обозначаем, что это клиентский компонент

import React from "react";
import { Container, Typography, Box, Grid, Link } from "@mui/material";
import {
  Instagram,
  Facebook,
  WhatsApp,
  Telegram,
} from "@mui/icons-material"; // Обновленные иконки социальных сетей

const Footer = () => {
  return (
    <footer id="contacts" style={{ backgroundColor: "#111", color: "#fff", padding: "60px 0", marginTop: "60px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Колонка 1 - О нас и контактная информация */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, marginBottom: "16px" }}>
              Свяжитесь с нами!
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: "16px" }}>
              Готовы преобразить ваш участок? Свяжитесь с нами для бесплатной консультации и оценки. Мы находимся в Бишкеке и с удовольствием поможем вам создать ландшафт вашей мечты!
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "8px" }}>
              Телефоны:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "16px" }}>
              +996 555 886 168 <br />
              +996 700 555 862
            </Typography>
          </Grid>

          {/* Колонка 2 - Контакты и социальные сети */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "16px" }}>
              Социальные сети:
            </Typography>
            <Box display="flex" flexDirection="column" gap="20px" justifyContent="flex-start">
              {/* Социальные сети */}
              <Box display="flex" gap="20px" justifyContent="flex-start">
                <Link
                  href="https://instagram.com/Greench_kg"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", "&:hover": { color: "#E4405F" } }}
                >
                  <Instagram fontSize="large" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", "&:hover": { color: "#3b5998" } }}
                >
                  <Facebook fontSize="large" />
                </Link>
                <Link
                  href="https://wa.me/996555886168"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", "&:hover": { color: "#25D366" } }}
                >
                  <WhatsApp fontSize="large" />
                </Link>
                <Link
                  href="https://t.me/Greench_kg"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", "&:hover": { color: "#0088cc" } }}
                >
                  <Telegram fontSize="large" />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          textAlign="center"
          sx={{
            marginTop: "40px",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "20px",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ color: "#afafaf" }}>
            &copy; {new Date().getFullYear()} Greench. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
