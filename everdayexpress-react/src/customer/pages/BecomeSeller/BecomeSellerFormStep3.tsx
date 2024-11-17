import { TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep3 = ({ formik }: any) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="bankDetails.accountNumber"
        label="계좌번호"
        value={formik.values.bankDetails.accountNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountNumber &&
          Boolean(formik.errors.bankDetails?.accountNumber)
        }
        helperText={
          formik.touched.bankDetails?.accountNumber &&
          formik.errors.bankDetails?.accountNumber
        }
      />
      <TextField
        fullWidth
        name="bankDetails.accountPassword"
        label="계좌 비밀번호"
        value={formik.values.bankDetails.accountPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountPassword &&
          Boolean(formik.errors.bankDetails?.accountPassword)
        }
        helperText={
          formik.touched.bankDetails?.accountPassword &&
          formik.errors.bankDetails?.accountPassword
        }
      />
      <TextField
        fullWidth
        name="bankDetails.accountHolderName"
        label="카드 소유자"
        value={formik.values.bankDetails.accountHolderName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountHolderName &&
          Boolean(formik.errors.bankDetails?.accountHolderName)
        }
        helperText={
          formik.touched.bankDetails?.accountHolderName &&
          formik.errors.bankDetails?.accountHolderName
        }
      />
    </div>
  );
};

export default BecomeSellerFormStep3;
