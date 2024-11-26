import React from "react";
import { useAppDispatch } from "../../../State/Store";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { sendLoginSignupOtp, signin } from "../../../State/AuthSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data ", values);
      // values.otp = Number(values.otp);
      dispatch(signin(values));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-8">
        로그인
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="이메일"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {true && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-20">
              이메일로 전송된 OTP를 입력
            </p>
            <TextField
              fullWidth
              name="otp"
              label="OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}
        <Button
          onClick={handleSendOtp}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          OTP 보내기
        </Button>
        <Button
          onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          sx={{ py: "11px" }}
        >
          로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
