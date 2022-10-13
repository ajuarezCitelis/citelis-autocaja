import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/navbar";
import imageFondo from "public/fondo_mazda.png";
import imageLogo from "public/logo-mazda.png";
import styles from "../styles/Home.module.css"
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
  <Box className="content">
    <Navbar />

    <Box className={styles.content}>
      <Image src={imageFondo} />


      <Box className={styles.texto_encima}>
        
        <Box className={styles.logoBox}>
        <Image src={imageLogo}/>
        </Box>

        <Typography className={styles.titleBienvenido}>
          BIENVENIDO A LA CAJA DE PAGO DIGITAL
        </Typography>
        <Typography className={styles.title_pago}>
          Para realizar tu pago ingresa tu placa o escanea tu ticket
        </Typography>  
     
          <Box className={styles.boxButtons}>
            <Button variant="contained" className={styles.buttonSecundary}>
              <Typography className={styles.text_button} gutterBottom>
                INGRESA TU PLACA
              </Typography>
            </Button>
            <Button variant="contained" className={styles.buttonSecundary}>
              <Typography className={styles.text_button} gutterBottom>
              ESCANEAR TICKET
              </Typography>
            </Button>  
          </Box>

      </Box>
      <Footer/>
      
    </Box>
  </Box>
  );
};

export default Home;
