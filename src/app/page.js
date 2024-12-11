// src/app/page.js
"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Why from "./components/Why";
import Footer from "./components/Footer";
import { Button, Container, Typography, Grid, Box } from "@mui/material";
import "./globals.css";
import "./page.module.css";
import StagesWork from "./components/StagesWork";
import ProjectType from "./components/ProjectType";

const MainPage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      let counter1 = 0;
      let counter2 = 0;
      let counter3 = 0;
      let counter4 = 0;

      const updateNumbers = () => {
        if (counter1 < 10) counter1 += 0.3;
        if (counter2 < 500) counter2 += 15;
        if (counter3 < 1000) counter3 += 30;
        if (counter4 < 2) counter4 += 0.1;

        setCount1(Math.round(counter1));
        setCount2(Math.round(counter2));
        setCount3(Math.round(counter3));
        setCount4(Math.round(counter4));

        if (
          counter1 < 10 ||
          counter2 < 500 ||
          counter3 < 1000 ||
          counter4 < 2
        ) {
          requestAnimationFrame(updateNumbers);
        }
      };

      requestAnimationFrame(updateNumbers);
    };

    animateNumbers();
  }, []);

  return (
    <main>
      <Header />
      <div className="sc_top" id="sc_top">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "400",
              mb: 2,
              maxWidth: "700px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
            }}
          >
            Ландшафтный дизайн, который вдохновляет
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: "600px",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.1rem" },
            }}
          >
            Greench — это команда профессионалов, объединённая любовью к своему
            делу. Вдохновляясь гармонией природы, мы создаём уникальные
            ландшафты, которые превращают ваш участок в живописный оазис
          </Typography>
          <Button variant="outlined" color="white" size="large">
            Заказать дизайн
          </Button>
        </Container>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            backgroundColor: "#f7f7f7eb",
            color: "#333",
            padding: "20px 0",
            borderRadius: "12px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            bottom: "0px",
            left: 0,
            right: 0,
            transform: "translateY(50%)",
            zIndex: 1,
            width: "70%",
            margin: "0 auto",
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {count1}+
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Лет опыта работаем с 2014
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {count2}+
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ГА территории озеленено
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {count3}+
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Растений и деревьев высажено
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {count4} года
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Гарантии *при нашем уходе
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <AboutUs />
      <Services />
      <StagesWork />
      <ProjectType />
      <Why />
      <Footer />
    </main>
  );
};

export default MainPage;
