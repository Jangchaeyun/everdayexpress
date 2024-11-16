import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const steps = [
  "세금 세부 정보 및 모바일",
  "픽업 주소",
  "은행 세부 정보",
  "공급업체 세부 정보",
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (value: number) => () => {
    (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) &&
      setActiveStep(activeStep + value);
    activeStep == steps.length - 1 && handleCreateAccount();
    console.log("active step: ", activeStep);
  };

  const handleCreateAccount = () => {
    console.log("create account");
  };

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      BIN: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
      },
      bankDetails: {
        accountNumber: "",
        cvcCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "formik submitted");
      console.log("active step ", activeStep);
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-20 space-y-10">
        <div>
          {activeStep == 0 ? (
            <BecomeSellerFormStep1 formik={formik} />
          ) : activeStep == 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activeStep == 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : (
            <BecomeSellerFormStep4 formik={formik} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)}
            variant="contained"
            disabled={activeStep == 0}
          >
            뒤로
          </Button>
          <Button onClick={handleStep(1)} variant="contained">
            {activeStep == steps.length - 1 ? "계정 생성하기" : "계속"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
