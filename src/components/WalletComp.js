// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import React from "react";
// import { useAccount } from "wagmi";
// import { useContract, useSigner } from "wagmi";

// function WalletComp() {
//   const { address, isConnecting, isDisconnected } = useAccount();
//   const { data: signer, isError, isLoading } = useSigner();
//   console.log(signer);
//   if (isConnecting) return <div>Connecting…</div>;
//   return (
//     <div>
//       <ConnectButton label="Mint NFT" />

//     </div>
//   );
// }

// export default WalletComp;

import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "@mui/material/styles";
import { Contract_ABI, Contract_Address } from "../constants";
import { ethers, providers } from "ethers";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      darker: "#053e85",
    },
    secondary: {
      main: "#36454F",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default async function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  // const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  // return (
  //   <>
  //     {openConnectModal && (
  //       <button onClick={openConnectModal} type="button">
  //         Open Connect Modal
  //       </button>
  //     )}
  //     {openAccountModal && (
  //       <button onClick={openAccountModal} type="button">
  //         Open Account Modal
  //       </button>
  //     )}
  //     {openChainModal && (
  //       <button onClick={openChainModal} type="button">
  //         Open Chain Modal
  //       </button>
  //     )}
  //   </>
  // );

  // const chain = signer.getChainId();
  // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // const signer = provider.getSigner();
  // console.log(signer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    openConnectModal();
    setFlag(true);
  }

  const Buy = () => {};

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Send Some ETH
        </Button>
        <ConnectButton />
        <Dialog
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          fullScreen={fullScreen}
          open={open}
          color="secondary"
        >
          <DialogTitle
            id="responsive-dialog-title"
            color="primary"
            style={{
              backgroundColor: "#36454F",
            }}
          >
            {"Give me some ETH would ya?"}
          </DialogTitle>
          <DialogContent style={{ backgroundColor: "#36454F" }}>
            <DialogContent>
              {openConnectModal && (
                <button
                  onClick={handleClick}
                  type="button"
                  // className="justify-center"
                >
                  Connect Wallet
                </button>
              )}
            </DialogContent>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </DialogContent>
          <DialogActions
            style={{
              backgroundColor: "#36454F",
            }}
          >
            <Button autoFocus onClick={handleClose} color="error">
              Disagree
            </Button>
            <Button onClick={Buy} autoFocus color="success">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
