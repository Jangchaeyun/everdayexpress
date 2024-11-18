import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const BankDetails = () => {
  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      accountPassword: "",
      accountHolderName: "",
    },
    onSubmit: (values) => {
      console.log(values, "formik submitted");
    },
  });
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="accountNumber"
        label="계좌번호"
        value={formik.values.accountNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.accountNumber && Boolean(formik.errors.accountNumber)
        }
        helperText={formik.touched.accountNumber && formik.errors.accountNumber}
      />
      <TextField
        fullWidth
        name="accountPassword"
        label="계좌 비밀번호"
        value={formik.values.accountPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.accountPassword &&
          Boolean(formik.errors.accountPassword)
        }
        helperText={
          formik.touched.accountPassword && formik.errors.accountPassword
        }
      />
      <TextField
        fullWidth
        name="accountHolderName"
        label="카드 소유자"
        value={formik.values.accountHolderName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.accountHolderName &&
          Boolean(formik.errors.accountHolderName)
        }
        helperText={
          formik.touched.accountHolderName && formik.errors.accountHolderName
        }
      />
      <Button fullWidth variant="contained">
        수정
      </Button>
    </div>
  );
};

export default BankDetails;
