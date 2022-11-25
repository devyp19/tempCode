import React from "react";

import { Column, Row, Text, Input, Button } from "components";
import * as yup from "yup";
import { postInvite } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import Sidebar from "components/Sidebar/Sidebar";

const InvitationPage = () => {
  const [apiData, setapiData] = React.useState();
  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid email"),
  });
  const form = useForm(
    { email: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  function callApi(data) {
    const req = { data: { ...data } };

    postInvite(req)
      .then((res) => {
        setapiData(res);

        toast.success("User Invited Successfully.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Somethig bad happened!");
      });
  }

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[202px] xl:pb-[252px] 2xl:pb-[284px] 3xl:pb-[341px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar className="w-[15%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
              <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[23%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Search
                </Text>
              </Row>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border-bw06 border-gray_300 border-solid items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 3xl:p-[117px] lg:p-[69px] xl:p-[86px] 2xl:p-[97px] rounded-radius483 w-[45%]">
              <Column className="items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] rounded-radius12 w-[100%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Enter email to send invitation
                </Text>
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_400"
                    wrapClassName="w-[100%]"
                    onChange={(e) => {
                      form.handleChange("email", e.target.value);
                    }}
                    errors={form?.errors?.email}
                    value={form?.values?.email}
                    type="email"
                    name="GroupThree"
                    placeholder="Enter email address"
                    shape="RoundedBorder12"
                    size="2xl"
                    variant="srcFillBluegray50"
                  ></Input>
                  <Button
                    className="font-normal lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center uppercase w-[100%]"
                    shape="RoundedBorder12"
                    size="lg"
                    onClick={() => {
                      form.handleSubmit(callApi);
                    }}
                  >
                    INVITE
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
      <ToastContainer />
    </>
  );
};

export default InvitationPage;
