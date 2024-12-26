import React, { useEffect, useState } from "react";

import authBanner from "./auth-bg.png";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import { Button, ThemeProvider } from "@mui/material";
import { useAppSelector } from "../../../Redux/Store";
import { useNavigate } from "react-router-dom";
import CustomTheme from "../../../Theme/CustomTheme";
import Navbar from "../../Component/Navbar";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleShowLogin = () => {
    setIsLogin(!isLogin);
  };

  const { customer } = useAppSelector((store) => store);

  const navigate = useNavigate();

  useEffect(() => {
    if (customer.userProfile?.email) {
      navigate("/");
    }
  }, [customer.userProfile?.email]);

  return (
    <div>

       <ThemeProvider theme={CustomTheme}>
        <Navbar/>
       </ThemeProvider>

      <div className="px-10 md:p-0 my-10  flex justify-center items-center">
        <div className="max-w-md py-5  rounded-md shadow-2xl">
          <img className="w-full rounded-t-md" src={authBanner} alt="" />

          <div className="pt-5 px-10">
            {isLogin ? <LoginComponent /> : <RegisterComponent />}
          </div>

          <div className="flex gap-2 mt-3 items-center justify-center">
            <h1 className="text-center text-sm font-medium">
              {isLogin ? "don't have an account ?" : "have account ?"}
            </h1>
            <Button onClick={handleShowLogin}>
              {isLogin ? "Register" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
