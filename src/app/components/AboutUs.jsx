"use client";
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <section id="about_us">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { md: '100px 0 0', xs: '0px' },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              paddingBottom: "10px",
              margin: '20px 0',
              fontWeight: 500,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            О компании
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "@media (max-width:600px)": {
              flexDirection: "column",
            },
          }}
        >
          <div className="aboutUs__photo" style={{ marginRight: "30px" }}></div>
          <Box sx={{ textAlign: "start", maxWidth: "600px" }} mb={4}>
            <Typography
              variant="h4"
              sx={{
                marginBottom:{xs: "20px", md: '50px'},
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: "#333",
                marginTop: {xs: "15px"},

              }}
            >
              Greench: Эксперты в ландшафтном дизайне и озеленении
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                lineHeight: 1.6,
                color: "#555",
                fontWeight: 400,
              }}
              paragraph
            >
              Компания Greench занимает лидирующие позиции в сфере озеленения и
              благоустройства. Основанная цель нашего бюро — привнести красоту
              природы в каждый уголок, мы остаёмся ведущими специалистами в
              области ландшафтного дизайна, озеленения и автополива на
              протяжении 10 лет.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default AboutUs;
