import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { dataFields } from "../../constant";
import { Column, Row, Text, Button } from "components";
import {
  postCustomformatJSONonlyCurrenttrue,
  postEmploye,
  getEmployeselectworkEmailinyashgmailcomvicil40645rubeshicom,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { supabase } from "../../util/supabase";
import { postInvite } from "../../service/api";
const SyncEmployee = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const [difference, setdifference] = React.useState();
  const [bmbEmail, setbmbEmail] = React.useState([]);
  const [emailData, setemailData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false); // Loading State

  function callApi1(data) {
    const req = { data };
    setIsLoading(true);
    postEmploye(req)
      .then((res) => {
        setapiData1(res);
        setIsLoading(false);
        toast.success("Synced Successfully.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Sync failed.");
      });
  }

  function getDifference(bmbEmail, emailData) {
    let difference = bmbEmail.filter((x) => !emailData.includes(x));
    setdifference(difference);
  }

  function getduplicateData(email) {
    const req = {
      params: {
        select: "*",
        workEmail: `in.(${email.join(",")})`,
      },
    };
    setIsLoading(true);
    getEmployeselectworkEmailinyashgmailcomvicil40645rubeshicom(req)
      .then((res) => {
        // setemailData(res);
        const supaEmail = res?.map((data) => {
          return data?.workEmail;
          // data?.workEmail && emailData.push(data?.workEmail);
        });
        getDifference(email, supaEmail);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function callApi() {
    var username = "81b720596f6a0901435dccd656a87dd39e1a1767";
    var password = "Abcd1234@";
    var credentials = btoa(username + ":" + password);
    var basicAuth = "Basic " + credentials;
    const req = {
      headers: { Authorization: basicAuth },
      params: { format: "JSON", onlyCurrent: "true" },
      data: dataFields,
    };
    setIsLoading(true);
    await postCustomformatJSONonlyCurrenttrue(req)
      .then((res) => {
        setapiData(res);
        const bmp = res?.employees?.map((data) => {
          return data?.workEmail;
          // data?.workEmail && bmbEmail.push(data?.workEmail);
        });
        getduplicateData(bmp);
        // callApi1(res?.employees);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  console.log(
    "diff",
    difference?.filter((el) => {
      return el != null;
    })
  );
  async function inviteEmployee(i = 0) {
    let email = difference[i];
    console.log("diff", i, difference[i], "time", new Date());
    const req = { data: { email: email } };
    await postInvite(req)
      .then((res) => {
        // setapiData(res);
        setTimeout(() => {
          i + 1 < difference?.length && inviteEmployee(i + 1);
        }, 1000);

        toast.success("User Invited Successfully.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Somethig bad happened!");
      });
  }

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Sidebar className="w-[18%]" />
              <Column className="items-center justify-start w-[85%]">
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Text className="CreateEmployee" as="h3" variant="h3">
                    Create Bulk Employees
                  </Text>
                  <Text className="TopBar" variant="body2">
                    AP
                  </Text>
                </Row>
                <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius8 w-[100%]">
                  <Text
                    className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Sync Bamboo Employees with supabase
                  </Text>
                  <Column className="justify-start lg:mb-[27px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius8 w-[60%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Steps :
                    </Text>
                    <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[100%]">
                      <Column className="items-center w-[50%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Click here to sync with supabase
                        </Text>
                      </Column>
                      <Button
                        onClick={() => {
                          callApi();
                        }}
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[auto]"
                      >
                        Get Bamboo Employee
                      </Button>
                      <Button
                        onClick={() => {
                          inviteEmployee();
                        }}
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[auto]"
                      >
                        Invite Difference
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </>
          )}
        </Row>
      </Column>{" "}
      <ToastContainer />
    </>
  );
};

export default SyncEmployee;
