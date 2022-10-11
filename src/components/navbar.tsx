import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import logomazda from "public/logo-mazda.png";
import imageFondo from "public/fondo_mazda.png";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";

const Navbar = () => {
  return (
    <div >
      
      <AppBar color="primary" className="appbar" position="absolute">
      <Toolbar variant="dense">
        <Image
          src={logomazda}
          alt="Logo de Mazda"
          height="88.2px"
          width="388.5px"
          
        ></Image>
        <Box>
          <Typography
            className="text_caja"
            width="500px"
            height="44px"
            margin="22px"
            font-size="37px"
            font-weight="500"
            font-stretch="normal"
            font-style="normal"
            line-height="1.57"
            letter-spacing="0.74px"
            color="#dedede"
            fontSize={"37px"}
            paddingLeft={"45%"}
          >
            Caja de pago
          </Typography>
        </Box>
      </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
