import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import Separetor from "@Components/Separetor";
import React from "react";
import SocialMediaBox from "./SocialMediaBox";
import FacebookIcone from "@Assets/SVG/facebook-icon.svg";
import GoogleIcone from "@Assets/SVG/google-icon.svg";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {Formik} from "formik";

export default function LoginForm({isOpen, handleClose}) {
  return (
    // Dialog Container
    <Dialog
      maxWidth={"md"}
      PaperProps={{
        style: {borderRadius: 10},
      }}
      open={isOpen}
      onClose={handleClose}
    >
      <DialogContent sx={{padding: 0}}>
        <Box
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          {/* Titele  */}
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight="bold"
            textAlign="center"
          >
            Log In to Sharewasher
          </Typography>
          <Separetor height={50} />
          {/* Facebook */}
          <SocialMediaBox
            textColor="#fff"
            title="Continue With Facebook"
            variant="contained"
            sx={{
              backgroundColor: "#3B5998",
              px: "15px",
              py: "10px",
              borderRadius: 1.2,
              justifyContent: "space-between",
            }}
            icon={FacebookIcone}
          />
          <Separetor height={10} />
          {/* Google */}
          <SocialMediaBox
            textColor="#000"
            title="Continue With Google"
            variant="outlined"
            sx={{
              px: "15px",
              py: "10px",
              borderRadius: 1.2,
              justifyContent: "space-between",
              borderColor: "#707070",
            }}
            icon={GoogleIcone}
          />
          <Separetor height={30} />
          {/* Or */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{width: "40%", height: "1px", backgroundColor: "#393939"}}
            />
            OR
            <Box
              sx={{width: "40%", height: "1px", backgroundColor: "#393939"}}
            />
          </Box>
          <Separetor height={30} />
          <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={Yup.object({
              password: Yup.string()
                .required("Please Enter Your password")
                .min(8, "Password Most Be At Least 8 characters"),
              email: Yup.string()
                .required("Please Enter Your Email")
                .email("Email Format is Incorrect"),
            })}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <>
                {/* Form  */}
                {errors.email && touched.email && (
                  <Typography
                    fontWeight="500"
                    color="red"
                    fontSize="12px"
                    mb={1}
                  >
                    {errors.email}
                  </Typography>
                )}
                <TextField
                  id="outlined-basic"
                  label="Email"
                  size="small"
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                <Separetor height={10} />
                {errors.password && touched.password && (
                  <Typography
                    fontWeight="500"
                    color="red"
                    fontSize="12px"
                    mb={1}
                  >
                    {errors.password}
                  </Typography>
                )}
                <TextField
                  name="password"
                  id="outlined-basic"
                  size="small"
                  label="Password"
                  type="password"
                  value={values.password}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Separetor height={30} />
                {/* Submit Button  */}
                <Button variant="contained" color="primary" sx={{py: "10px"}}>
                  Continue
                </Button>
              </>
            )}
          </Formik>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Label Remember Me */}
            <FormGroup>
              <FormControlLabel
                sx={{fontSize: 3}}
                control={<Checkbox size="small" color="primary" />}
                label="Remember me"
              />
            </FormGroup>
            {/* Forget Passwort=d */}
            <Link style={{color: "#0249FF", textDecoration: "none"}} to="/">
              Forget Password
            </Link>
          </Box>
        </Box>
        <Separetor height={5} />
        {/* Divider */}
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
          }}
        >
          <Typography>Not a member yet? Join now</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
