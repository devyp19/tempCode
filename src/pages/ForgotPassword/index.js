import React from "react";

import { Column, Text, Row, Input, Button } from "components";
import { forgotPassword } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";

const ForgotPassword = () => {
  const [apiData, setapiData] = React.useState();
  const form = useForm({ email: "" });

  function callApi(data) {
    const req = { data: { ...data } };

    forgotPassword(req)
      .then((res) => {
        setapiData(res);
        toast.success("Check your mail to reset password.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened.");
      });
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:p-[169px] xl:p-[211px] 2xl:p-[237px] 3xl:p-[285px] w-[100%]">
        <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
          Forgot Password
        </Text>
        <Text
          className="text-black_900 w-[auto] mt-[20px]"
          as="h2"
          variant="h2"
        >
          Enter Your Email Id to Forgot Password
        </Text>
        <Row className="bg-gray_200 items-center justify-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius12 w-[39%]">
          <Text
            className="font-bold ml-[1px] my-[1px] text-gray_800 w-[auto]"
            as="h5"
            variant="h5"
          >
            Email
          </Text>
          <Input
            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-gray_400 text-gray_800 w-[100%]"
            wrapClassName="2xl:ml-[63px] 2xl:mr-[106px] 3xl:ml-[76px] 3xl:mr-[127px] lg:ml-[45px] lg:mr-[75px] mt-[4px] w-[40%] xl:ml-[56px] xl:mr-[94px]"
            onChange={(e) => {
              form.handleChange("email", e.target.value);
            }}
            value={form?.values?.email}
            name="Enteryouremai"
            placeholder="Enter your email address"
          ></Input>
        </Row>
        <Button
          className="font-normal lg:mb-[36px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center uppercase w-[39%]"
          shape="RoundedBorder12"
          size="lg"
          onClick={() => {
            form.handleSubmit(callApi);
          }}
        >
          Confirm
        </Button>
      </Column>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
