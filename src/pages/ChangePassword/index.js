import React from "react";

import { Column, Text, Row, Input, SelectBox, Button } from "components";
import { updateUser } from "service/api";
import useForm from "hooks/useForm";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
const GenderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];
const ChangePassword = () => {
  const [apiData, setapiData] = React.useState();
  const [confirmPassword, setconfirmPassword] = React.useState();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(
    localStorage.getItem("sb-awmgldofkkbalduukncj-auth-token")
  );
  const formValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be minimum of length 8"),
  });
  const form = useForm(
    {
      password: "",
    },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  function callApi(data) {
    const req = { data: { ...data }, token: userData?.access_token };

    updateUser(req)
      .then((res) => {
        setapiData(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [error, setError] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (confirmPassword && value !== confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (
            form?.values?.password &&
            value !== form?.values?.password
          ) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center mx-[auto] xl:p-[122px] 2xl:p-[138px] 3xl:p-[165px] lg:p-[98px] w-[100%]">
        <Column className="w-[49%]">
            <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
              Reset Password
            </Text>
            <Text
              className="text-black_900 w-[auto] mt-[20px]"
              as="h2"
              variant="h2"
            >
              Please enter new password below.
            </Text>
          <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="bg-gray_200 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
                <Text
                  className="font-bold text-gray_800 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Password
                </Text>
                <Input
                  className="placeholder:text-gray_400 Enteryouremai"
                  wrapClassName="2xl:ml-[30px] 3xl:ml-[36px] lg:ml-[21px] w-[15%] xl:ml-[26px]"
                  onChange={(e) => {
                    form.handleChange("password", e.target.value),
                      validateInput(e);
                  }}
                  errors={form?.errors?.password}
                  value={form?.values?.password}
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  onBlur={validateInput}
                ></Input>
              </Row>
              {error.password && (
                <span className={`text-red-500`}>{error.password}</span>
              )}
              <Row className="bg-gray_200 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
                <Text
                  className="font-bold text-gray_800 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Confirm Password
                </Text>
                <Input
                  className="placeholder:text-gray_400 Enteryouremai"
                  wrapClassName="2xl:ml-[30px] 3xl:ml-[36px] lg:ml-[21px] w-[15%] xl:ml-[26px]"
                  onChange={(e) => {
                    setconfirmPassword(e.target.value), validateInput(e);
                  }}
                  value={confirmPassword}
                  onBlur={validateInput}
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                ></Input>
              </Row>
              {error.confirmPassword && (
                <span className={`text-red-500`}>{error.confirmPassword}</span>
              )}
            </Column>
          </Column>
          <Button
            className="font-normal lg:mb-[36px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center uppercase w-[39%]"
            onClick={() => {
              form.handleSubmit(callApi);
            }}
            shape="RoundedBorder12"
            size="lg"
          >
            Confirm
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default ChangePassword;
