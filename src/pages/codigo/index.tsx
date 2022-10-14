import {
  Box,
  Button,
  Typography,
  Container
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import imageFondo from "public/fondo_mazda.png";
import imageEscaner from "public/imagenes_escanear.png";
import Image from "next/image";
import Navbar from "../../components/navbar";
import styles from "../../styles/Codigo.module.css"
import type { NextPage } from "next";

const pageCodigo: NextPage = () => {
  return (
    <Box className="content">
    <Navbar />

    <Box className={styles.contentBox} >
      <Image src={imageFondo} />


      <Box className={styles.texto_encima}>
        
      <Box className={styles.boxRegresar}>       
        <Button
          size="large"
          color="inherit"
          startIcon={<KeyboardBackspace />}
          variant="text"
          className={styles.button}
        >
          Regresar
        </Button>
      </Box>
      <Typography className="title2" variant="h5" gutterBottom>
          REALIZA TU PAGO
        </Typography>
      </Box>
      <Container className={styles.rectangulo_codigo}>
        <Box className={styles.imagen}><Image src={imageEscaner}/></Box>
        <Typography className={styles.texto_codigo}>
          Coloca tu código QR debajo del escáner que se encuentra en la parte inferior de la pantalla
        </Typography>
        </Container>

      <Box className={styles.boxFooter}>
            <Box className={styles.footerText}>
              <Box>
              <Typography className={styles.footerTypo}>ESCANER QR </Typography>
              <ExpandCircleDownIcon className={styles.icon}style={{ fill: 'white' }}/> 
                </Box>
            </Box>
        </Box>
      
    </Box>
  </Box>
  );
};

export default pageCodigo;
