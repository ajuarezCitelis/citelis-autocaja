import { Box, Button,Modal,Typography } from "@mui/material";
import type { NextPage } from "next";
import imageFondo from "public/fondo_mazda.png";
import imageInicio from "public/inicio-logo-mazda.png";

import Image from "next/image";
import Navbar from "../../components/navbar";
import { KeyboardBackspace } from "@mui/icons-material";
import { Container } from "@mui/system";
import React from "react";

const pageImprimir: NextPage = () => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





  return (
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
      <Container className="imageinicio">
        <Image src={imageInicio} />
      </Container>
      <Box className="content-text">
        <Typography className="title-imprimir" variant="h5" gutterBottom>
          TU FACTURA HA SIDO ENVIADA AL CORREO:
        </Typography>
        <Typography className="title2-imprimir">
          juanitoperez@hotmail.com
        </Typography>
      </Box>

      <Box className="conteiner-button">
        <Button variant="contained" className="conteiner-button1">
          <Typography className="text-button" gutterBottom>
            IMPRIMIR FACTURA
          </Typography>
        </Button>
        <Button onClick={handleOpen}   variant="contained" className="conteiner-button2">
          <Typography className="text-button" gutterBottom>
            TERMINAR
          </Typography>
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </Box>
    </Box>
  );
};

export default pageImprimir;
