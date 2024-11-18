import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const PersonalDetails = () => {
  const formik = useFormik({
    initialValues: {
      sellerName: "",
      email: "",
      mobile: "",
    },
    onSubmit: (values) => {
      console.log("form submited", values);
    },
  });
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="sellerName"
        label="회사 이름"
        value={formik.values.sellerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
        helperText={formik.touched.sellerName && formik.errors.sellerName}
      />
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
      <TextField
        fullWidth
        name="mobile"
        label="전화번호"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />
      <Button sx={{ py: "0.8rem" }} fullWidth variant="contained">
        수정
      </Button>
    </div>
  );
};

export default PersonalDetails;
