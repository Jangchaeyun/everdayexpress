import { TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep3 = ({ formik }: any) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="bankDetails.accountNumber"
        label="카드번호"
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
        name="bankDetails.cvcCode"
        label="CVC"
        value={formik.values.bankDetails.cvcCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.cvcCode &&
          Boolean(formik.errors.bankDetails?.cvcCode)
        }
        helperText={
          formik.touched.bankDetails?.cvcCode &&
          formik.errors.bankDetails?.cvcCode
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
