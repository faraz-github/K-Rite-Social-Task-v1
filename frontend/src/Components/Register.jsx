import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { useState } from "react";

const Register = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedImage, setSelectedImage] = useState("");

  const [registerLoading, setRegisterLoading] = useState(false);

  const handleFileChange = (event) => {
    setRegisterLoading(true);
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image); // base 64 encoding
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      setProfilePicture(reader.result);
    };
    setRegisterLoading(false);
  };

  // TODO upload the profile picture to cloudinary and get the url
  // TODO register with name, email, picture, password

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    console.log({
      name,
      username,
      email,
      profilePicture,
      password,
      confirmPassword,
      selectedImage,
    });
    setRegisterLoading(false);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Register</DialogTitle>
      <Box sx={{ p: 5 }}>
        <form onSubmit={onSubmitHandler}>
          <Stack spacing={1} sx={{ mb: 1 }}>
            <TextField
              label="Name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Username"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <TextField
              label="Confirm Password"
              type="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Stack>

          <IconButton component="label" size="large" color="secondary">
            <Input
              accept="image/*"
              multiple={false}
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <AddAPhotoIcon />
          </IconButton>
          <Typography variant="overline" sx={{ ml: 1 }}>
            Profile Picture
          </Typography>

          <LoadingButton
            fullWidth
            color="secondary"
            variant="contained"
            size="large"
            type="submit"
            loading={registerLoading}
            sx={{ my: 1 }}
          >
            Register
          </LoadingButton>
        </form>
      </Box>
    </Dialog>
  );
};

export default Register;
