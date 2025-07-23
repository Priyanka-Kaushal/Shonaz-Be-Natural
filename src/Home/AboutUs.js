import {
  Box,
  Typography,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import BannerImage from "../Assets/Images/BannerImage.jpg";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LeftContentSection = () => {
  const theme = useTheme();

  return (
    <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
     <Box
  sx={{
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
    textAlign: "center", 
    minHeight: "70px", 
    px: 2, 
    mt: "40px"
  }}
>
  <Typography
    variant="h3"
    sx={{ fontWeight: "bold", mb: 2 }}
  >
    SHONAZ BE NATURAL
  </Typography>

  <Typography
    variant="body1"
    color="text.secondary"
    sx={{ maxWidth: "800px", lineHeight: 1.6 }}
  >
    Where comfort meets consciousness in fashion.
    <br />
    Tiny trends, Big impact.
  </Typography>
</Box>

      </AccordionSummary>

      <AccordionDetails>
        <Container className="main-conatiner" width= "100%" sx= {{mt: "40px"}}>
          <Box
            className="cont-1"
            alignItems="center"
            sx={{ p: 4, margin: "auto"}}
          >
            <Box
              className="cont-2"
              sx={{
                alignItems: "center",
                margin: "20px 0px 20px 80px",
                width: "100%",
              }}
            >
              <Box
                className="cont-3"
                alignItems="center"
                width="35%"
                sx={{
                  display: "flex",
                  mb: 10,
                  position: "relative",
                  gap: 2,
                }}
              >
                <Box
                  className="cont-4"
                  sx={{
                    backgroundColor: "#FAF5EDDE",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    minHeight: "900px",
                  }}
                >
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    style={{
                      position: "absolute",
                      backgroundImage: `url(${BannerImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "110%",
                      height: "450px",
                      borderRadius: "8px",
                      top: "-5%",
                      right: "-95%",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      zIndex: 2,
                    }}
                  />

                  <Box
                    sx={{
                      textAlign: "left",
                      width: "600px",
                      pt: "100px",
                      pl: "55px",
                      pb: "100px",
                      pr: "100px",
                      color: theme.palette.primary.main,
                    }}
                  >
                    <Typography variant="body1">
                      Shona means “God is gracious,” therefore giving your baby
                      this name will serve as a constant reminder to be thankful
                      for everything in their life. Mothers in India also refer
                      to their child as SHONA as a way of expressing their
                      unwavering devotion.
                    </Typography>

                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      pb={2}
                      sx={{ textAlign: "center", mt: "65px", 
                        color: theme.palette.primary.main,
                      }}
                    >
                      Our Story
                    </Typography>
                  </Box>

                  <Box
                    className="cont-4"
                    sx={{
                     backgroundColor: "#FAF5EDDE",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      minHeight: "520px",
                    }}
                  >
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      style={{
                        position: "absolute",
                        backgroundImage: `url(${BannerImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "450px",
                        top: "45%",
                        left: "-10%",
                        zIndex: 2,
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      }}
                    />

                    <Paper
                      elevation={6}
                      sx={{
                        width: "100%",
                        zIndex: 3,
                        backgroundColor: "white",
                        top: "90%",
                        mt: "-40%",
                        mr: "-70%",
                        ml: "70%",
                        padding: "6%",
                        boxShadow: "0 3px 20px 0 rgba(0, 0, 0, .12)",
                        position: { md: "absolute" },
                        color: theme.palette.primary.main,
                      }}
                    >
                      <Typography variant="body1">
                        It became alarming to be a parent when my 2.5-year-old
                        elder daughter displayed a little rash on her legs. A
                        specialist told us that a baby’s skin prefers moisture up
                        until the age of five, and that pollutants in fabric can
                        cause the skin to get irritated and itchy. However, we
                        were worried because we usually wear cotton clothing.
                        The dermatologist said, “Impurities,” once more. Her
                        rashes were resolved with time. However, the SHONA’Z was
                        born when my younger daughter experienced the same thing.
                        I delved into the world of eco-friendly products, pure
                        fabrics, and eco-friendly colours to keep our kids
                        comfortable.
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </AccordionDetails>
    </Accordion>
  );
};

export default LeftContentSection;
