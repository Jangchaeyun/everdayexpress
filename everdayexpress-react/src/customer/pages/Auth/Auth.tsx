import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsSignup] = useState(true);
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh]  rounded-md border shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://ifh.cc/g/mkGBVA.png"
          alt=""
        />
        <div className="mt-8 px-10">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin ? "계정이 없으십니까?" : "계정이 있으십니까?"}</p>
            <Button size="small" onClick={() => setIsSignup(!isLogin)}>
              {isLogin ? "계정 만들기" : "로그인"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
