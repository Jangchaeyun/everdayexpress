import { Box, Button, Grid2, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("이름은 필수입니다!"),
  mobile: Yup.string()
    .required("전화번호는 필수입니다!")
    .matches(
      /^01[0|1|6|7|8|9]-?\d{3,4}-?\d{4}$/,
      "전화번호 형식이 맞지 않습니다."
    ),
  pinCode: Yup.string()
    .required("우편번호는 필수입니다!")
    .matches(/^[1-9][0-9]{5}$/, "우편번호 형식이 맞지 않습니다."),
  address: Yup.string().required("주소는 필수입니다!"),
});

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      pinCode: "",
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">베송지 정보</p>
      <form onSubmit={formik.handleSubmit}>
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
          <Grid2 size={{ xs: 12 }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ py: "14px" }}
            >
              배송지 추가
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default AddressForm;
