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
const SignUpPage = () => {
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
    // data: yup.object().shape({
    //   ["first_name"]: yup.string().required("First_name is required"),
    // }),
    // data: yup.object().shape({
    //   ["middle_name"]: yup.string().required("Middle_name is required"),
    // }),
    // data: yup.object().shape({
    //   ["last_name"]: yup.string().required("Last_name is required"),
    // }),
    // data: yup
    //   .object()
    //   .shape({ gender: yup.string().required("Gender is required") }),
    // data: yup
    //   .object()
    //   .shape({ location: yup.string().required("Location is required") }),
    // data: yup.object().shape({
    //   ["phone_number"]: yup.string().required("Phone_number is required"),
    // }),
  });
  const form = useForm(
    {
      password: "",
      // data: {
      //   first_name: "",
      //   middle_name: "",
      //   last_name: "",
      //   gender: "",
      //   location: "",
      //   phone_number: "",
      // },
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
  console.log(userData?.user?.email);
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] xl:p-[122px] 2xl:p-[138px] 3xl:p-[165px] lg:p-[98px] w-[100%]">
        <Column className="justify-start w-[49%]">
          <Column className="justify-start w-[43%]">
            <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
              Sign up
            </Text>
            <Text
              className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Please add below details to create account
            </Text>
          </Column>
          <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              {/* <Row className="items-center justify-between w-[100%]">
                <Row className="bg-gray_200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[32%]">
                  <Text
                    className="font-bold text-gray_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Name
                  </Text>
                  <Input
                    className="placeholder:text-gray_400 Enteryouremai"
                    wrapClassName="2xl:ml-[25px] 3xl:ml-[30px] lg:ml-[18px] w-[40%] xl:ml-[22px]"
                    onChange={(e) => {
                      form.handleChange("data.first_name", e.target.value);
                    }}
                    errors={form?.errors?.data?.["first_name"]}
                    value={form?.values?.data?.["first_name"]}
                    name="FirstName"
                    placeholder="First Name"
                  ></Input>
                </Row>
                <Row className="bg-gray_200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[32%]">
                  <Input
                    className="placeholder:text-gray_400 Enteryouremai"
                    wrapClassName="2xl:ml-[25px] 3xl:ml-[30px] lg:ml-[18px] w-[40%] xl:ml-[22px]"
                    onChange={(e) => {
                      form.handleChange("data.middle_name", e.target.value);
                    }}
                    errors={form?.errors?.data?.["middle_name"]}
                    value={form?.values?.data?.["middle_name"]}
                    name="middle name"
                    placeholder="Middle Name"
                  ></Input>
                </Row>
                <Row className="bg-gray_200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[32%]">
                  <Input
                    className="placeholder:text-gray_400 Enteryouremai"
                    wrapClassName="2xl:ml-[25px] 3xl:ml-[30px] lg:ml-[18px] w-[40%] xl:ml-[22px]"
                    onChange={(e) => {
                      form.handleChange("data.last_name", e.target.value);
                    }}
                    errors={form?.errors?.data?.["last_name"]}
                    value={form?.values?.data?.["last_name"]}
                    name="last name"
                    placeholder="Last Name"
                  ></Input>
                </Row>
              </Row>
              <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                <Row className="bg-gray_200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[66%]">
                  <Text
                    className="font-bold text-gray_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Mobile
                  </Text>
                  <Input
                    className="placeholder:text-gray_400 Enteryouremai"
                    wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] lg:ml-[14px] w-[35%] xl:ml-[18px]"
                    onChange={(e) => {
                      form.handleChange("data.phone_number", e.target.value);
                    }}
                    errors={form?.errors?.data?.["phone_number"]}
                    value={form?.values?.data?.["phone_number"]}
                    name="EnterMonileNu"
                    placeholder="Enter Monile Number"
                  ></Input>
                </Row>
                <Row className="bg-gray_200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[33%]">
                  <SelectBox
                    className="placeholder:text-gray_400 Enteryouremai"
                    wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] lg:ml-[14px] w-[35%] xl:ml-[18px]"
                    onChange={(e) => {
                      form.handleChange("data.gender", e);
                    }}
                    value={form?.values?.data?.gender}
                    name="Gender"
                    options={GenderOptions}
                    placeholder="Select Gender"
                    isSearchable={true}
                    isMulti={false}
                  ></SelectBox>
                </Row>
              </Row>
              <Row className="bg-gray_200 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
                <Text
                  className="font-bold text-gray_800 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Location
                </Text>
                <Input
                  className="placeholder:text-gray_400 Enteryouremai"
                  wrapClassName="2xl:ml-[9px] 3xl:ml-[10px] lg:ml-[6px] w-[15%] xl:ml-[8px]"
                  onChange={(e) => {
                    form.handleChange("data.location", e.target.value);
                  }}
                  errors={form?.errors?.data?.location}
                  value={form?.values?.data?.location}
                  name="EnterLocation"
                  placeholder="Enter Location"
                ></Input>
              </Row> */}
              {userData ? (
                <>
                  <Row className="bg-gray_200 items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
                    <Text
                      className="font-bold text-gray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Email
                    </Text>
                    <Input
                      className="placeholder:text-gray_400 Enteryouremai"
                      wrapClassName="2xl:ml-[27px] 3xl:ml-[33px] lg:ml-[19px] w-[12%] xl:ml-[24px]"
                      name="FirstName One"
                      placeholder="Email"
                      value={userData?.user?.email}
                      disabled
                    ></Input>
                  </Row>
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
                      placeholder="Enter your password"
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
                    <span className={`text-red-500`}>
                      {error.confirmPassword}
                    </span>
                  )}
                </>
              ) : null}
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

export default SignUpPage;
