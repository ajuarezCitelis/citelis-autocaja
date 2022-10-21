import { Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, react/prop-types
export default function ModalCard({setOpen} : any) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1080px',
        height:'1920px',
        border: '2px solid #000',
        display: 'flex',
        margin: '248.5px 0px 0px 0px',
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        
      };
      const style2 = {
        bgcolor: '#751132',
        width: '489px',
        height: '162px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-around',
      };
      const style3 = {
        position: 'absolute',
        marginTop: '672px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'634px',
        height:'300px',
        bgcolor: 'green',
        borderRadius: '10px',
        border: 'solid 1px var(--very-light-pink)',
        backgroundColor: '#fff',
      };
 
      const button = {
        paddingRight: '68px',
        paddingTop: '14px',
        float: 'right',
        width: '54px',
        height: '54px',
      };

      const subtitleModal = {
        width: '570px',
        height: '72px',
        margin: '21px 10px 14px 5px',
        fontFamily: 'MazdaType',
        fontSize: '34px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.12',
        letterSpacing: '0.51px',
        textAlign: 'center',
        color: '#000',
      };
      const subtitleModalP = {
        height: '65px',
        margin: '21px 10px 14px 5px',
        fontFamily: 'MazdaType',
        fontSize: '46px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '0.83',
        letterSpacing: '0.69px',
        textAlign: 'left',
        color: '#fff',
      };

    const handleClose = () => setOpen(false);

  return (
    <>
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={Boolean(setOpen)}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={Boolean(setOpen)}>
    <Box sx={style} >
    <Box sx={style2}>
        <Box>
            <Typography  sx={subtitleModalP}>
            Terminal de pago <ArrowCircleRightIcon sx={{ fontSize: "41.8px", width:'50px',float:'right', margin:'0px 0 12.2px 18.2px', }}/> 
          </Typography> 
        </Box>
    </Box>
    <Box sx={style3}>
    <Box sx={button} onClick={handleClose}><CancelIcon sx={{ fontSize: "54px" }}/></Box>
    <Box className="box_modal">
          <Typography  sx={subtitleModal}>
            Continua tu proceso en la terminal de pago que se encuentra a tu derecha.
          </Typography>
    </Box>
    </Box>
    </Box>
    </Fade>
  </Modal></>
  );
};
