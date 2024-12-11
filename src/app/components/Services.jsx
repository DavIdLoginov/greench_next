'use client';
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

const servicesData = [
  {
    title: 'Ландшафтный дизайн',
    description: 'Индивидуальные проекты, учитывающие ваши пожелания и особенности участка.',
    image: 'https://znanie174.ru/wp-content/uploads/2019/09/landshaftniy-dizayn3-min-1024x762.jpeg',
  },
  {
    title: 'Устройство газонов',
    description: 'Посев газона, выбор лучших сортов трав для нашего региона.',
    image: 'https://lifgroup.ru/images/page/service/blagoustroistvo/gazon/3.jpg',
  },
  {
    title: 'Посадка деревьев и кустарников',
    description: 'Подбор растений, которые подходят для нашего климата и стиля.',
    image: 'https://i.pinimg.com/736x/7b/32/21/7b3221ca47def695acad0470682f13b0.jpg',
  },
  {
    title: 'Установка систем полива',
    description: 'Эффективные решения для автоматического орошения вашего сада.',
    image: 'https://i.pinimg.com/736x/96/a4/19/96a41965f2c554373e20f0f2db6325d1.jpg',
  },
  {
    title: 'Установка ландшафтного освещения',
    description: 'Правильно подобранное освещение не только украшает территорию, но и повышает ее безопасность.',
    image: 'https://i.pinimg.com/736x/9d/bb/39/9dbb39a4d34a9b1177cc4a39f4b59d6f.jpg',
  },
  {
    title: 'Уход за участком',
    description: 'Профессиональное обслуживание, включая стрижку, подкормку и защиту растений.',
    image: 'https://na-dache.pro/din/uploads/posts/2022-12/1672307092_na-dache-pro-p-landshaftnii-dizain-professiya-foto-2.jpg',
  },
];

const Services = () => {
  return (
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
  );
};

export default Services;
