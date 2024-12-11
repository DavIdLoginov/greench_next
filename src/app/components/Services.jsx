'use client';
import React from 'react';
import Head from 'next/head';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

const servicesData = [
  {
    title: 'Ландшафтный дизайн',
    description: 'Индивидуальные проекты, учитывающие ваши пожелания и особенности участка.',
    image: '/services.jpeg',
  },
  {
    title: 'Устройство газонов',
    description: 'Посев газона, выбор лучших сортов трав для нашего региона.',
    image: '/services1.jpg',
  },
  {
    title: 'Посадка деревьев и кустарников',
    description: 'Подбор растений, которые подходят для нашего климата и стиля.',
    image: 'services2.jpg',
  },
  {
    title: 'Установка систем полива',
    description: 'Эффективные решения для автоматического орошения вашего сада.',
    image: 'services3.jpg',
  },
  {
    title: 'Установка ландшафтного освещения',
    description: 'Правильно подобранное освещение не только украшает территорию, но и повышает ее безопасность.',
    image: 'services4.jpg',
  },
  {
    title: 'Уход за участком',
    description: 'Профессиональное обслуживание, включая стрижку, подкормку и защиту растений.',
    image: 'services5.jpg',
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Наши услуги | Ландшафтный дизайн, озеленение, полив и освещение</title>
        <meta
          name="description"
          content="Наши услуги включают ландшафтный дизайн, устройство газонов, посадку деревьев, системы полива и уход за участками. Профессиональный подход к каждому проекту."
        />
        <meta
          name="keywords"
          content="ландшафтный дизайн, озеленение, проектирование ландшафтов, газоны, установка газона, yстройство газонов, cитемы полива, установка систем полива, полив, ландшафтное освещение, установка освещения, уход за участком, посадка деревьев, посадка кустарников, подбор растений, ландшафтное освещение, профессиональные услуги"
        />
      </Head>

      <section id='services'>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                marginBottom: '50px',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Наши услуги:
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {servicesData.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    position: 'relative',
                    background: `url(${service.image}) no-repeat center center/cover`,
                    color: 'white',
                    height: '100%',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    borderRadius: '15px',
                  }}
                >
                  <CardContent
                    sx={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      paddingBottom: '20px',
                      borderRadius: '0 0 15px 15px',
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Services;
