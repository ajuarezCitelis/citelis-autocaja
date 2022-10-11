

import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import { Box, Button } from "@mui/material";
import type { NextPage} from "next";
import Navbar from "../../components/navbar";
import imageFondo from "public/fondo_mazda.png";
import Image from "next/image";

const pageFactura: NextPage = () => {
  return (
    <Box>

    
    <Navbar />
    <Box
        className="content"
        margin="0.7px 0 0"
        height="1920px"
        width="1080px"
      >
        <Image src={imageFondo} />
      </Box>
     
    </Box>
  );
};

export default pageFactura;
