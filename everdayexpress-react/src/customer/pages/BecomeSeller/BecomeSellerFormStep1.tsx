import { Box, TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep1 = ({ formik }: any) => {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-9">정보 입력</p>
      <div className="space-y-9">
        <TextField
          fullWidth
          name="mobile"
          label="전화번호"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.error.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <TextField
          fullWidth
          name="BIN"
          label="사업자등록번호"
          value={formik.values.BIN}
          onChange={formik.handleChange}
          error={formik.touched.BIN && Boolean(formik.error.BIN)}
          helperText={formik.touched.BIN && formik.errors.BIN}
        />
      </div>
    </Box>
  );
};

export default BecomeSellerFormStep1;
