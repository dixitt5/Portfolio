import React, { useState } from "react";
import { useAccount } from "wagmi";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import { useContract, useSigner } from "wagmi";
import { Contract_ABI } from "../constants";

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

const SendEth = () => {
  const [funds, setFundValue] = useState(0);
  const { address } = useAccount();

//   async function SendEther() {
//     try {
//       const { data: signer } = useSigner();
//       const contract = useContract({
//         address: "0xF5C429fA05912EfaB969A7777f4aC7Bf1eCA2dB3",
//         abi: Contract_ABI,
//         signerOrProvider: signer,
//       });
//       const tx = await contract.contribute({
//         value: web3.utils.toWei(funds, "ether"),
//       });
//       // setLoading(true);
//       await tx.wait();
//       console.log(funds);
//     } catch (error) {}
//   }

  if (address) {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Container maxWidth="fixed">
            <Box>
              <Typography
                variant="h6"
                display="block"
                gutterBottom
                sx={{ mt: "20px", marginLeft: "60px", marginBottom: "10px" }}
              >
                Send Funds
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                bgcolor: "#808080",
                height: "60px",
                maxWidth: "500px",
              }}
            >
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Tokens
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  onChange={(e) => setFundValue(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                height: "60px",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                // onClick={SendEther}
                sx={{ margin: "auto", display: "flex", textAlign: "center" }}
              >
                Send
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Wallet Not Connected!</h2>
      </div>
    );
  }
};

export default SendEth;
