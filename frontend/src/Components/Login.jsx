import { Box, Dialog, DialogTitle, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useState } from "react";

const Login = ({ open, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginLoading, setLoginLoading] = useState(false);

  // TODO Login with  email, password

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    console.log({
      email,
      password,
    });
    setLoginLoading(false);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Login</DialogTitle>
      <Box sx={{ p: 5 }}>
        <form onSubmit={onSubmitHandler}>
          <Stack spacing={1} sx={{ mb: 1 }}>
            <TextField
              label="Email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>

          <LoadingButton
            fullWidth
            color="secondary"
            variant="contained"
            size="large"
            type="submit"
            loading={loginLoading}
            sx={{ my: 1 }}
          >
            Login
          </LoadingButton>
        </form>
      </Box>
    </Dialog>
  );
};

export default Login;
