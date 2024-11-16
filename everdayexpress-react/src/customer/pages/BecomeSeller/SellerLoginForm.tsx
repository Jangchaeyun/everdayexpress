import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SellerLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data ", values);
    },
  });
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-5">
        로그인
      </h1>
      <div className="space-y-2">
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
      </div>
    </div>
  );
};

export default SellerLoginForm;
