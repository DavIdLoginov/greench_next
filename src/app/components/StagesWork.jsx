import React from "react";
import {
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepIcon,
} from "@mui/material";

const steps = [
  {
    title: "Предпроектный анализ",
    description:
      "Консультация, выезд на объект. Для того, чтобы разработать проект дизайна, нужно произвести предварительный анализ территории и составить Техническое Задание от Заказчика.",
  },
  {
    title: "Разработка чертежей",
    description:
      "После изучения предпроектных материалов, архитекторы приступают к разработке — сначала создается эскизная часть и обсуждается план для подготовки полного пакета документов.",
  },
  {
    title: "Реализация ландшафта",
    description:
      "Комплекс мер по созданию условий для основных работ по озеленению и благоустройству загородного участка. Сдача объекта Заказчику в назначенный срок с соблюдением всех дедлайнов.",
  },
  {
    title: "Обслуживание и уход",
    description:
      "Предоставляем сервисное обслуживание сада — вся территория находится на гарантии и постоянном присмотре, т.к. мы заинтересованы в высоком качестве наших услуг.",
  },
];

const StagesWork = () => {
  return (
    <section>
      <Container maxWidth="md" sx={{ color: "#333", marginTop: '80px', marginBottom: '100px' }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 500,
              display: "inline",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Этапы работы
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paddingTop='10px'
            paragraph
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
          >
            От концепции до реализации
          </Typography>
        </Box>
        <Stepper orientation="vertical" activeStep={-1}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={(props) => (
                  <StepIcon
                    {...props}
                    sx={{
                      fontSize: { xs: '30px', md: '38px' },
                      color: "#5B7759",
                    }}
                  />
                )}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#5B7759",
                    fontWeight: "600",
                    fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2rem' },
                  }}
                >
                  {step.title}
                </Typography>
              </StepLabel>
              <Box sx={{ pl: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Step>
          ))}
        </Stepper>
      </Container>
    </section>
  );
};

export default StagesWork;
