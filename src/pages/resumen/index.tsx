import { KeyboardBackspace } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography
} from "@mui/material";
import type { NextPage } from "next";
import imageFondo from "public/fondo_mazda.png";
import Navbar from "../../components/navbar";
import Image from "next/image";
import styles from "../../styles/Resumen.module.css"
import DataGridDemo from "../../components/dataGrid";

import {useState } from 'react';
import ModalCard from '../../components/modal';

const pageResumen: NextPage = () => {

  const [open,setOpen] = useState(false);
  const handleEvent = () => {

      setOpen(true);
    };

  return    (
  <Box className="content">

  <Navbar />
  <Box
    className="content"
    margin="0.7px 0 0"
    height="1920px"
    width="1080px"
  >
    <Image src={imageFondo} />
  </Box>

  <Box className="content2">
    <Button
      size="large"
      color="inherit"
      startIcon={<KeyboardBackspace />}
      variant="text"
    >
      Regresar
    </Button>
  </Box>
  <Box className="content">
        <Typography className="title2" variant="h5" gutterBottom>
         TICKET DE SERVICIOS
        </Typography>
        <Container className={styles.rectangulo}>
          <Box
            sx={{
              maxWidth: "100%",
                        }}
          >
           <Box className={styles.formBox}>
            <Box className={styles.TextRight}>
            <Box className={styles.Texts}>
                          <Typography className={styles.title}>CLIENTE</Typography>
                          <Typography className={styles.descripcionNombre}>JUAN PATRICIO PEREZ PIÑÓN</Typography>
              </Box>
              <Box className={styles.Texts}>
                          <Typography className={styles.title}>UNIDAD</Typography>
                          <Typography className={styles.descripcion}>MAZDA 2 SÉDAN</Typography>
              </Box>
              <Box className={styles.Texts}>
                          <Typography className={styles.title}>NO. DE PLACA</Typography>
                          <Typography className={styles.descripcion}>PKL-223-334</Typography>
              </Box>

            </Box>
            <Box className={styles.TextLeft}>
              
            <Box className={styles.Texts2}>
                          <Typography className={styles.title}>FECHA</Typography>
                          <Typography className={styles.descripcionFecha}>20/09/2022</Typography>
              </Box>
              <Box className={styles.Texts2}>
                          <Typography className={styles.title}>NO.</Typography>
                          <Typography className={styles.descripcion}>D123509-A3</Typography>
              </Box>
              
            </Box>
           </Box>
           <Box className={styles.tableGrid}>
                          <DataGridDemo/>
           </Box>
           <Box className={styles.totalBox}>
            <Typography className={styles.total}>Total</Typography>
            <Typography className={styles.totalPrice} >$1,700.00</Typography>
            </Box>
          </Box>
        </Container>

  </Box>
      <Box className={styles.boxButtons}>
            <Button variant="contained" className={styles.buttonSecundary} onClick={handleEvent}>
              <Typography className={styles.text_button} gutterBottom>
                PAGAR SERVICIO
              </Typography>
            </Button>
        </Box>
        <Box className={styles.boxButtonss} >

              <Typography className={styles.text_button2} gutterBottom>
                CANCELAR OPERACIÓN
              </Typography>
        </Box>
        <>{open? <ModalCard setOpen={setOpen}  />:""} </>

  </Box>
  
  );
};

export default pageResumen;
