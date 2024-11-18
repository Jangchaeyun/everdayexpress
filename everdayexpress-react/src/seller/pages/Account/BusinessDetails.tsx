import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const BusinessDetails = () => {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      BIN: "",
      accountStatus: "",
    },
    onSubmit: (values) => {
      console.log("form submited", values);
    },
  });
  return (
    <div className="space-y-4">
      <TextField
        fullWidth
        name="businessName"
        label="회사 이름"
        value={formik.values.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.businessName && Boolean(formik.errors.businessName)
        }
        helperText={formik.touched.businessName && formik.errors.businessName}
      />
      <TextField
        fullWidth
        name="BIN"
        label="사업자등록번호"
        value={formik.values.BIN}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.BIN && Boolean(formik.errors.BIN)}
        helperText={formik.touched.BIN && formik.errors.BIN}
      />
      <Button fullWidth variant="contained">
        수정
      </Button>
    </div>
  );
};

export default BusinessDetails;
