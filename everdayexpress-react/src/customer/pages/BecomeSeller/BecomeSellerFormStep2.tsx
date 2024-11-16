import { Box, Grid2, TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep2 = ({ formik }: any) => {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-5">픽업 주소</p>
      <>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="name"
              label="이름"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="address"
              label="주소"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="pinCode"
              label="우편번호"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="mobile"
              label="전화번호(- 포함)"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid2>
        </Grid2>
      </>
    </Box>
  );
};

export default BecomeSellerFormStep2;
