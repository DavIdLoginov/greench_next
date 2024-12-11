"use client";
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { Person, Group, CheckCircle, Build } from "@mui/icons-material"; // Импортируем иконки

const reasonsData = [
  {
    title: "Индивидуальный подход",
    description:
      "В отличие от многих конкурентов, мы разрабатываем уникальные проекты, основываясь на личных предпочтениях наших клиентов и особенностях их участков.",
    icon: <Person fontSize="inherit" />, // Иконка для этого пункта
  },
  {
    title: "Сотрудничество и внимание к вашим идеям",
    description:
      "С нами вы получите не просто услуги, а полноценное сотрудничество. Мы внимательно слушаем и учитываем ваши идеи, превращая их в реальность.",
    icon: <Group fontSize="inherit" />, // Иконка для этого пункта
  },
  {
    title: "Качество, проверенное временем",
    description:
      "Мы используем только лучшие материалы и передовые технологии, гарантируя, что ваш ландшафт будет радовать вас долгие годы.",
    icon: <CheckCircle fontSize="inherit" />, // Иконка для этого пункта
  },
  {
    title: "Полный спектр услуг",
    description:
      "Мы предлагаем не только создание ландшафта, но и его дальнейшее обслуживание. Наша команда готова позаботиться о вашем саде в любое время года.",
    icon: <Build fontSize="inherit" />, // Иконка для этого пункта
  },
];

const Why = () => {
  return (
    <section>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "100px",
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.5rem" }, // Уменьшены размеры заголовка для мобильных
              display: "inline",
            }}
          >
            Почему выбирают нас?
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          {reasonsData.map((reason, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Box
                mb={2}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#f7f7f7",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    marginRight: "20px",
                    fontSize: { xs: "30px", sm: "40px", md: "45px" }, // Уменьшение размера иконок для мобильных
                    color: "#4caf50",
                  }}
                >
                  {reason.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1.25rem", sm: "1.4rem", md: "1.5rem" }, // Уменьшение размера заголовков на мобильных
                      color: "#333",
                    }}
                    gutterBottom
                  >
                    {reason.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem", md: "1.125rem" }, // Уменьшение размера текста
                      lineHeight: 1.6,
                      color: "#555",
                      fontWeight: 400,
                    }}
                    color="text.secondary"
                  >
                    {reason.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Why;
