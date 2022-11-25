import React from "react";

import { Column, Text, Row, Input, Button } from "components";
import * as yup from "yup";
import { postTokengranttypepassword } from "service/api";
import useForm from "hooks/useForm";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  function handleNavigate() {
    navigate("/forgotpassword");
  }
  const [apiData, setapiData] = React.useState();
  const formValidationSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const form = useForm(
    { email: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  function callApi(data) {
    const req = { params: { grant_type: "password" }, data: { ...data } };

    postTokengranttypepassword(req)
      .then((res) => {
        setapiData(res);
        localStorage.setItem("access_token", res?.access_token);
        dispatch(login(res));
        navigate("/employeelist");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:p-[169px] xl:p-[211px] 2xl:p-[237px] 3xl:p-[285px] w-[100%]">
        <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
          Login
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
            className="placeholder:text-gray_400 Enteryouremai"
            wrapClassName="w-[auto]"
            onChange={(e) => {
              form.handleChange("email", e.target.value);
            }}
            errors={form?.errors?.email}
            value={form?.values?.email}
            name="Enteryouremai"
            placeholder="Enter your email address"
          ></Input>
        </Row>
        <Row className="bg-gray_200 items-center justify-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius12 w-[39%]">
          <Text
            className="font-bold ml-[1px] my-[1px] text-gray_800 w-[auto]"
            as="h5"
            variant="h5"
          >
            Password
          </Text>
          <Input
            className="placeholder:text-gray_400 Enteryouremai"
            wrapClassName="w-[auto]"
            onChange={(e) => {
              form.handleChange("password", e.target.value);
            }}
            errors={form?.errors?.password}
            value={form?.values?.password}
            type="password"
            name="Enteryourpass"
            placeholder="Enter your password"
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
        <Row className="nav-link hover:underline text-blue-800 items-center justify-center mx-w-[13%] w-[10%]">
          <Text
            className="underline"
            as="h5"
            variant="h5"
            onClick={handleNavigate}
          >
            Forgot Password
          </Text>
        </Row>
      </Column>
    </>
  );
};

export default SignInPage;
