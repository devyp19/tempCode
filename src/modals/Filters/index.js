import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button, CheckBox } from "components";
import {
  getDepartmentselect,
  getDepartmentjobtitleselect,
  getEmploymentstatusselect,
  getJobtitlepositionselect,
} from "../../service/api";
import { isEmpty } from "lodash";

const FilterModal = (props) => {
  // FIlter toggle State
  const [toggle, setToggle] = React.useState({
    depToggle: false,
    jobTitleToggle: false,
    jobPositionToggle: false,
    statusToggle: false,
  });

  const toggleFunction = (toggleField) => {
    setToggle({ ...toggle, [toggleField]: !toggle[toggleField] });
  };

  const [departmentOption, setdepartmentOption] = React.useState([]);
  const [employeeStatusOption, setemployeeStatusOption] = React.useState();
  const [jobPosition, setjobPosition] = React.useState();
  const [jobTitle, setjobTitle] = React.useState();
  const [depIds, setdepIds] = React.useState([]);
  const [jobTitleIds, setjobTitleIds] = React.useState([]);
  const [jobPosIds, setjobPosIds] = React.useState([]);
  const [emplStatusIds, setemplStatusIds] = React.useState([]);

  function getJobTitleApi() {
    const req = {};

    getDepartmentjobtitleselect(req)
      .then((res) => {
        const data = res?.map((data) => {
          return { ...data, checked: false };
        });
        setjobTitle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getjobPositionApi() {
    const req = {};

    getJobtitlepositionselect(req)
      .then((res) => {
        setjobPosition(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getEmployeeStatusApi() {
    const req = {};

    getEmploymentstatusselect(req)
      .then((res) => {
        setemployeeStatusOption(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getdepartmentApi() {
    const req = {};

    getDepartmentselect(req)
      .then((res) => {
        const data = res?.map((data) => {
          return { ...data, checked: false };
        });
        setdepartmentOption(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleChange = (e, options, setOptions, fieldids) => {
    const data = options?.map((obj) => {
      if (obj?.label === e.name) {
        return { ...obj, checked: e.checked };
      }
      return obj;
    });
    setOptions(data);
    const check = data?.filter((x) => x?.checked === true);
    const Ids = check?.map((data) => {
      return data?.id;
    });
    if (fieldids === "depIds") {
      setdepIds(Ids);
    } else if (fieldids === "jobTitleIds") {
      setjobTitleIds(Ids);
    } else if (fieldids === "jobPosIds") {
      setjobPosIds(Ids);
    } else if (fieldids === "emplStatusIds") {
      setemplStatusIds(Ids);
    }
  };

  React.useEffect(() => {
    getdepartmentApi();
    getEmployeeStatusApi();
    getJobTitleApi();
    getjobPositionApi();
  }, []);

  function handleSubmit() {
    const filters = [
      ...(!isEmpty(depIds) ? [`department_id=in.(${depIds?.join(",")})`] : []),
      ...(!isEmpty(jobTitleIds)
        ? [`department_job_title_id=in.(${jobTitleIds?.join(",")})`]
        : []),
      ...(!isEmpty(jobPosIds)
        ? [`job_title_position_id=in.(${jobPosIds?.join(",")})`]
        : []),
      ...(!isEmpty(emplStatusIds)
        ? [`employment_status_id=in.(${emplStatusIds?.join(",")})`]
        : []),
    ];
    props?.filters(filters);
    props?.page(1);
    props?.onRequestClose();
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-black_900_99 justify-start xl:p-[104px] 2xl:p-[117px] 3xl:p-[141px] lg:p-[83px] w-[100%]">
            <Column className="bg-white_A700 justify-start lg:mb-[257px] xl:mb-[322px] 2xl:mb-[362px] 3xl:mb-[434px] lg:ml-[109px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[184px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[18%]">
              <Row className="items-center justify-between w-[100%]">
                <Button
                  className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Filter Data
                </Button>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright One"
                  onClick={() => props?.onRequestClose()}
                />
              </Row>

              <Row
                className="items-end common-pointer justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
                onClick={() => toggleFunction("depToggle")}
              >
                <Text className="rowdepartments" as="h5" variant="h5">
                  Departments
                </Text>
                {toggle.depToggle ? (
                  <Img
                    src="images/img_uparrow.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                ) : (
                  <Img
                    src="images/img_arrowup_24X24.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                )}
              </Row>
              {toggle.depToggle ? (
                departmentOption?.map((apiDataResponseEle, index) => {
                  return (
                    <CheckBox
                      className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
                      inputClassName="h-[24px] mr-[5px] w-[24px]"
                      name={apiDataResponseEle?.label}
                      onChange={(e) => {
                        handleChange(
                          e.target,
                          departmentOption,
                          setdepartmentOption,
                          "depIds"
                        );
                      }}
                      checked={apiDataResponseEle?.checked}
                      value={apiDataResponseEle?.id}
                      label={apiDataResponseEle?.label}
                      shape="RoundedBorder2"
                      variant="OutlineBluegray101"
                    ></CheckBox>
                  );
                })
              ) : (
                <></>
              )}
              <Row
                className="items-center common-pointer justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
                onClick={() => toggleFunction("jobTitleToggle")}
              >
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Job Title
                </Text>
                {toggle.jobTitleToggle ? (
                  <Img
                    src="images/img_uparrow.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                ) : (
                  <Img
                    src="images/img_arrowup_24X24.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                )}
              </Row>
              {toggle.jobTitleToggle ? (
                jobTitle?.map((apiDataResponseEle, index) => {
                  return (
                    <CheckBox
                      className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
                      inputClassName="h-[24px] mr-[5px] w-[24px]"
                      onChange={(e) => {
                        handleChange(
                          e.target,
                          jobTitle,
                          setjobTitle,
                          "jobTitleIds"
                        );
                      }}
                      checked={apiDataResponseEle?.checked}
                      value={apiDataResponseEle?.value}
                      name={apiDataResponseEle?.label}
                      label={apiDataResponseEle?.label}
                      shape="RoundedBorder2"
                      variant="OutlineBluegray101"
                    ></CheckBox>
                  );
                })
              ) : (
                <></>
              )}
              <Row
                className="items-center common-pointer justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
                onClick={() => toggleFunction("jobPositionToggle")}
              >
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Position
                </Text>
                {toggle.jobPositionToggle ? (
                  <Img
                    src="images/img_uparrow.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                ) : (
                  <Img
                    src="images/img_arrowup_24X24.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                )}
              </Row>
              {toggle.jobPositionToggle ? (
                jobPosition?.map((apiDataResponseEle, index) => {
                  return (
                    <CheckBox
                      className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
                      inputClassName="h-[24px] mr-[5px] w-[24px]"
                      onChange={(e) => {
                        handleChange(
                          e.target,
                          jobPosition,
                          setjobPosition,
                          "jobPosIds"
                        );
                      }}
                      checked={apiDataResponseEle?.checked}
                      value={apiDataResponseEle?.value}
                      name={apiDataResponseEle?.label}
                      label={apiDataResponseEle?.label}
                      shape="RoundedBorder2"
                      variant="OutlineBluegray101"
                    ></CheckBox>
                  );
                })
              ) : (
                <></>
              )}
              <Row
                className="items-end common-pointer justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
                onClick={() => toggleFunction("statusToggle")}
              >
                <Text className="rowdepartments" as="h5" variant="h5">
                  Employment Status
                </Text>
                {toggle.statusToggle ? (
                  <Img
                    src="images/img_uparrow.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                ) : (
                  <Img
                    src="images/img_arrowup_24X24.svg"
                    className="settings_One"
                    alt="arrowup Twelve"
                  />
                )}
              </Row>
              {toggle.statusToggle ? (
                employeeStatusOption?.map((apiDataResponseEle, index) => {
                  return (
                    <CheckBox
                      className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
                      inputClassName="h-[24px] mr-[5px] w-[24px]"
                      onChange={(e) => {
                        handleChange(
                          e.target,
                          employeeStatusOption,
                          setemployeeStatusOption,
                          "emplStatusIds"
                        );
                      }}
                      checked={apiDataResponseEle?.checked}
                      value={apiDataResponseEle?.value}
                      name={apiDataResponseEle?.label}
                      label={apiDataResponseEle?.label}
                      shape="RoundedBorder2"
                      variant="OutlineBluegray101"
                    ></CheckBox>
                  );
                })
              ) : (
                <></>
              )}
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { FilterModal };
