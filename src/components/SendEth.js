import React, { useEffect, useState } from "react";
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
import { useContract, useSigner, useProvider } from "wagmi";
import { Contract_ABI, Contract_Address } from "../constants";
import { utils, ethers } from "ethers";

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
  const [balance, setBalance] = useState(0);
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    address: "0xF5C429fA05912EfaB969A7777f4aC7Bf1eCA2dB3",
    abi: Contract_ABI,
    signerOrProvider: signer,
  });
  const provider = useProvider();
  // checkBalance();
  async function SendEther() {
    try {
      console.log(signer);
      const tx = await contract.contribute({
        value: utils.parseEther(funds),
      });
      // setLoading(true);
      await tx.wait();
      console.log(funds);
      await checkBalance();
    } catch (error) {
      console.log(error);
    }
  }

  async function checkBalance() {
    try {
      const balance = await provider.getBalance(Contract_Address);

      // const balance = await tx.wait();
      const paisa = balance.toString();
      // console.log(paisa);
      const EtherValue = ethers.utils.formatUnits(paisa, "ether");
      console.log(EtherValue);
      setBalance(EtherValue);
    } catch (error) {
      console.error(error);
    }
  }

  async function Withdraw() {
    try {
      const tx = await contract.withdraw();
      await tx.wait();
      await checkBalance();
    } catch (error) {
      console.error(error);
    }
  }

  function renderOwnerDashboard() {
    if (address === "0xDf201019A4abd8A5386e443C051DD9eF35d37AA1") {
      return (
        // <Box sx={{ margin: "sm", height: "10px" }}>
        <div>
          <Typography
            variant="h6"
            display="block"
            gutterBottom
            sx={{ mt: "10px", marginLeft: "40px", marginBottom: "10px" }}
          >
            Withdraw Funds
          </Typography>
          <Typography
            variant="subtitle"
            display="block"
            gutterBottom
            sx={{ marginLeft: "20px", marginBottom: "10px" }}
          >
            Contract Balance: ${balance}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={Withdraw}
            sx={{
              margin: "auto",
              display: "flex",
              textAlign: "center",
            }}
          >
            Withdraw
          </Button>
        </div>
      );
    }
  }

  useEffect(() => {
    checkBalance();
  }, []);

  if (address) {
    return (
      <div style={{display: "inline"}}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="100%" sx={{ display: "flex" }}>
            <Box sx={{ display: "block" }}>
              <Typography
                variant="h6"
                display="block"
                gutterBottom
                sx={{ mt: "20px" }}
              >
                Send Funds
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                bgcolor: "#808080",
                height: "60px",
                maxWidth: "300px",
                display: "block",
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
                  marginBottom: "5px",
                  display: "flex",
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={SendEther}
                  sx={{
                    margin: "auto",
                    // display: "flex",
                    textAlign: "center",
                  }}
                >
                  Send
                </Button>
              </Box>
            
          </Container>

          <Container sx={{display: "flex"}}>
            <Box sx={{ display: "flex" }}>{renderOwnerDashboard()}</Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <Typography
          variant="subtitle"
          display="block"
          gutterBottom
          sx={{ marginTop: "20px" }}
        >
          Wallet Not Connected!
        </Typography>
      </div>
    );
  }
};

export default SendEth;
