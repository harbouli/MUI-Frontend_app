import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "@Components/Navbar";
import LoginForm from "@Components/LoginForm";
import Feature from "@Pages/Home/Feature";
import Home from "@Pages/Home/Home";
import Profile from "@Pages/Profile/Profile";
import SignupForm from "@Components/SignupForm";
import { useSelector } from "react-redux";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    setIsOpenSignUp(false);
  };
  const {UID} = useSelector((state) => state.User);
  return (
    <>
      <Navbar setIsOpen={setIsOpen} setIsOpenSignUp={setIsOpenSignUp} />
      <LoginForm handleClose={handleClose} isOpen={isOpen} />
      <SignupForm
        handleClose={handleClose}
        setIsOpenSignUp={setIsOpenSignUp}
        isOpen={isOpenSignUp}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feature" element={<Feature />} />
        {UID && <>
        <Route path="profile" element={<Profile />} />
        
        </>}
      </Routes>
    </>
  );
}

export default App;
