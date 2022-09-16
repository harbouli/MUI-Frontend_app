import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import Separetor from "@Components/Separetor";
import SocialMediaBox from "./SocialMediaBox";
import FacebookIcone from "@Assets/SVG/facebook-icon.svg";
import GoogleIcone from "@Assets/SVG/google-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";
import UserAction from "../store/actions/UserAction";

export default function SignupForm({isOpen, handleClose, setIsOpenSignUp}) {
  // State
  const {user} = useSelector((state) => state.User);
  // useEffect(() => {
  //   console.log(user);
  // }, []);
  const dispatch = useDispatch();

  // Add User Emeil to Store
  const addMailStore = (val) => {
    dispatch(UserAction.adduser({email: val.email}));
    console.log(user);
  };

  // On Sign UP
  const onSignUp = async (val) => {
    dispatch(
      UserAction.adduser({
        ...user,
        firstname: val.firstname,
        lastname: val.lastname,
      })
    );
    console.log(user);
  };
  return (
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
            mx={3}
          >
            Join Sharewasher
          </Typography>
          <Separetor height={50} />
          {!user.email ? (
            <>
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

              {/* Form Validation On Submit */}
              <Formik
                initialValues={{email: ""}}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .required("Please Enter Your Email")
                    .email("Email Format is Incorrect"),
                })}
                onSubmit={addMailStore}
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
                      name="email"
                      size="small"
                      onBlur={handleBlur}
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <Separetor height={15} />
                    {/* Submit Button  */}
                    <Button
                      disabled={
                        values.email === "" || errors.email ? true : false
                      }
                      onClick={handleSubmit}
                      variant="contained"
                      color="primary"
                      sx={{py: "10px"}}
                    >
                      Continue
                    </Button>
                  </>
                )}
              </Formik>
            </>
          ) : (
            <Formik
              initialValues={{firstname: "", lastname: "", password: ""}}
              validationSchema={Yup.object({
                firstname: Yup.string().required("Please Enter Your Firsname"),
                lastname: Yup.string().required("Please Enter Your Lastname"),
                password: Yup.string()
                  .required("Please Enter Your password")
                  .min(8, "Password Most Be At Least 8 characters"),
              })}
              onSubmit={onSignUp}
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
                  {errors.firstname && touched.firstname && (
                    <Typography
                      fontWeight="500"
                      color="red"
                      fontSize="12px"
                      mb={1}
                    >
                      {errors.firstname}
                    </Typography>
                  )}
                  <TextField
                    id="outlined-basic"
                    label="Firstname"
                    name="firstname"
                    size="small"
                    onBlur={handleBlur}
                    variant="outlined"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  <Separetor height={15} />
                  {errors.lastname && touched.lastname && (
                    <Typography
                      fontWeight="500"
                      color="red"
                      fontSize="12px"
                      mb={1}
                    >
                      {errors.lastname}
                    </Typography>
                  )}
                  <TextField
                    id="outlined-basic"
                    label="Lastname"
                    name="lastname"
                    size="small"
                    onBlur={handleBlur}
                    variant="outlined"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  <Separetor height={15} />
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
                    id="outlined-basic"
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    onBlur={handleBlur}
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Separetor height={15} />
                  <Button
                    disabled={
                      values.password === "" ||
                      errors.password ||
                      values.lastname === "" ||
                      values.firstname === ""
                        ? true
                        : false
                    }
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    sx={{py: "10px"}}
                  >
                    Continue
                  </Button>
                  <Separetor height={15} />
                  <Typography
                    variant="subtitle2"
                    color="#393939"
                    textAlign="center"
                    fontSize="12px"
                  >
                    By joining, you agree to Sharewasher’s{" "}
                    <Typography variant="span" color="primary">
                      Terms of Service,
                    </Typography>
                    <br /> as well as to receive occasional emails from us.
                  </Typography>
                </>
              )}
            </Formik>
          )}
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
