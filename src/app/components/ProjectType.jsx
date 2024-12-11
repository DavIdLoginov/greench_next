"use client";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const services = [
  {
    title: "Частные владения",
    description:
      "Спроектируем и реализуем частный сад или парк любого размера — от шести соток до нескольких гектар.",
    imageSrc: "/privatProject.png",
  },
  {
    title: "Коммерческие объекты",
    description:
      "Разработаем ландшафтный дизайн и благоустройство для офисных территорий, бизнес-центров и жилых комплексов.",
    imageSrc: "/comProject.png",
  },
  {
    title: "Государственные объекты",
    description:
      "Благоустройство парков, скверов, городских набережных и других объектов федерального и муниципального значения.",
    imageSrc: "/gosProject.png",
  },
];

const ProjectType = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <Container
        maxWidth="lg"
        sx={{
          padding: { xs: "100px 0", sm: "120px 0" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "700",
            color: "#333",
            fontSize: { xs: "1.3rem", sm: "2.2rem", md: "2.5rem" }, // Уменьшены размеры заголовка
            marginBottom: "20px",
          }}
        >
          Работаем с частными и корпоративными объектами
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontSize: { xs: "0.8rem", sm: "1.4rem" },
            marginBottom: "40px",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
            marginTop: "40px",
          }}
        >
          Мы беремся за проектирование и реализацию объектов разной сложности – от частных участков до крупных коммерческих объектов и городских набережных и скверов.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {services.map((item, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#f7f7f7",
                boxShadow: "none",
                border: "none",
                margin: "15px",
                width: { xs: "100%", sm: "45%", md: "30%" }, // Адаптивная ширина карточек
                maxWidth: "350px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                alt="services"
                height="300"
                image={item.imageSrc}
                sx={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "600",
                    marginBottom: "20px",
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    width: "200px",
                    marginTop: "20px",
                    color: "rgba(0, 0, 0, 0.6)",
                    border: "2px solid rgba(0, 0, 0, 0.6)",
                    padding: "12px 18px",
                    fontWeight: "600",
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    window.location.href = "https://wa.me/996555886168";
                  }}
                >
                  Связаться
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default ProjectType;
