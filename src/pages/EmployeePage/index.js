import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  List,
  Input,
  Button,
  SelectBox,
  Datepicker,
  TextArea,
} from "components";
import {
  deleteUserProfile,
  postUserProfile,
  updateEmployee,
  getCityselect,
  getCountryselect,
  getStateselect,
  getJobtitlepositionselect,
  getDepartmentjobtitleselect,
  getEmploymentstatusselect,
  getDepartmentselect,
  getCurrencyselect,
} from "service/api";
import Sidebar from "components/Sidebar/Sidebar";
import { getEmployeesByID } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import useForm from "hooks/useForm";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import Select from "react-select";
import {
  getEmployeeselect,
  getStateAndCountry,
  getUsertypeselect,
} from "../../service/api";

//Dropdown Options
const GenderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];

const PayTypeOption = [
  { value: "Salary", label: "Salary" },
  { value: "Hourly", label: "Hourly" },
];

const PayPerOption = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
  { value: "Quater", label: "Quater" },
  { value: "Year", label: "Year" },
];

const EmployeePagePage = () => {
  const [apiData, setapiData] = React.useState();
  const [isDisabled, setisDisabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [departmentOption, setdepartmentOption] = React.useState();
  const [employeeStatusOption, setemployeeStatusOption] = React.useState();
  const [jobPosition, setjobPosition] = React.useState();
  const [jobTitle, setjobTitle] = React.useState();
  const [cityOption, setcityOption] = React.useState();
  const [stateOption, setstateOption] = React.useState();
  const [countryOption, setcountryOption] = React.useState();
  const [currencyOption, setcurrencyOption] = React.useState();
  const [ReportToOption, setReportToOption] = React.useState();
  const [file, setFile] = React.useState("");
  const location = useLocation();

  const [userTypeOption, setuserTypeOption] = React.useState();
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    callApi();
    // getdepartmentApi();
    // getEmployeeStatusApi();
    // getJobTitleApi();
    // getjobPositionApi();
    // getStateApi();
    // getCountryApi();
    // getCityApi();
    // getCurrencyApi();
    // getReportToOption();
    // getUserType();
  }, []);

  const addressForm = useForm({
    country_id: null,
    state_id: null,
  });
  function getUserType() {
    const req = { params: { select: "*" } };

    getUsertypeselect(req)
      .then((res) => {
        setuserTypeOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Get Currency
  function getCurrencyApi() {
    const req = { params: { select: "*" } };

    getCurrencyselect(req)
      .then((res) => {
        setcurrencyOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //Get Cities
  function getCityApi(stateValue) {
    const req = stateValue
      ? { params: { select: "*", state_id: `eq.${stateValue}` } }
      : {};

    getCityselect(req)
      .then((res) => {
        setcityOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // GET Countries
  function getCountryApi() {
    const req = {};

    getCountryselect(req)
      .then((res) => {
        setcountryOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // GET States
  function getStateApi(countryValue) {
    const req = countryValue
      ? { params: { select: "*", country_id: `eq.${countryValue}` } }
      : {};

    getStateselect(req)
      .then((res) => {
        setstateOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // GET Job titles
  function getJobTitleApi() {
    const req = {};

    getDepartmentjobtitleselect(req)
      .then((res) => {
        setjobTitle(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // GET Job Positions
  function getjobPositionApi() {
    const req = {};

    getJobtitlepositionselect(req)
      .then((res) => {
        setjobPosition(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // GET Employee status
  function getEmployeeStatusApi() {
    const req = {};

    getEmploymentstatusselect(req)
      .then((res) => {
        setemployeeStatusOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // GET Departments
  function getdepartmentApi() {
    const req = {};

    getDepartmentselect(req)
      .then((res) => {
        setdepartmentOption(dropdownOptions(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // to get report_to data
  const getReportToOption = () => {
    const req = { params: { select: "id,firstName,middleName,lastName" } };
    // setIsLoading(true);
    getEmployeeselect(req)
      .then((res) => {
        setReportToOption(reportToDropdown(res));
        // setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  };

  function reportToDropdown(data) {
    const options = data?.map(
      ({ id, firstName, middleName, lastName }, index) => {
        return {
          value: id,
          label: `${firstName} ${middleName} ${lastName}`,
        };
      }
    );
    return options;
  }

  //Form
  const form = useForm({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    location: "",
    workPhone: "",
    mobilePhone: "",
    workworkEmail: "",
    department: "",
    division: "",
    jobTitle: "",
    photoUploaded: false,
    photoUrl: "",
    supervisor: "",
  });

  //Update Employees
  function updateEmployeeDetails(file) {
    const req = file
      ? { data: { ...form?.values, profile: file } }
      : { data: { ...form?.values } };

    updateEmployee(req)
      .then((res) => {
        toast.success("Employee details updated.");
        setFile("");
        callApi();
        setisDisabled(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }

  function callApi() {
    const req = { params: { select: "*", id: `eq.${location?.state?.id}` } };
    setIsLoading(true);
    getEmployeesByID(req)
      .then((res) => {
        setapiData(res);
        // getStateCountry(res[0]?.city_id);
        Object.keys(res?.[0]).map((key) => {
          return form.handleChange(key, res?.[0][key]);
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }

  // GET State&Country
  function getStateCountry(id) {
    const req = { params: { id: `eq.${id}` } };
    setIsLoading(true);
    getStateAndCountry(req)
      .then((res) => {
        res?.map((data) => {
          addressForm.handleChange("state_id", data?.state_id);
          addressForm.handleChange("country_id", data?.state?.country_id);
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // toast.error("Something bad happened!");
      });
  }
  // To create the object of dropdown
  function dropdownOptions(data) {
    const options = data?.map(({ id, label }, index) => {
      return { value: id, label: label };
    });
    return options;
  }

  // To create default value object
  function getDefaultValue(options, value) {
    return options?.filter((item) => item?.value === value)[0];
  }

  //Upload profile picture
  const handleUpload = async () => {
    var formdata = new FormData();
    formdata.append("cacheControl", "3600");
    formdata.append("", file, "file");
    const req = {
      fileName: `${new Date().toISOString()}_${file?.name}`,
      file: formdata,
    };
    postUserProfile(req)
      .then((res) => {
        deleteOldPicture();
        updateEmployeeDetails(res?.Key);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Delete Profile Picture
  const deleteOldPicture = async () => {
    var formdata = new FormData();
    formdata.append("cacheControl", "3600");
    const req = {
      fileName: form?.values?.profile,
      file: formdata,
    };
    await deleteUserProfile(req)
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  //reset Form
  const resetForm = () => {
    Object.keys(apiData?.[0]).map((key) => {
      return form.handleChange(key, apiData?.[0][key]);
    });
    setFile("");
    setisDisabled(true);
  };

  //reset file
  const resetFile = () => {
    inputRef.current.value = null;
    setFile("");
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[25px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] w-[100%]">
            <Row className="items-start justify-evenly w-[100%]">
              <Sidebar className="w-[15%]" />
              <Column className="items-center justify-start w-[85%]">
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                  <Text className="CreateEmployee" as="h3" variant="h3">
                    Employee Details
                  </Text>
                  <Text className="TopBar" variant="body2">
                    AP
                  </Text>
                </Row>
                <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[96%]">
                  <Column className="items-center justify-start lg:my-[21px] xl:my-[10px] 2xl:my-[30px] 3xl:my-[36px] w-[100%]">
                    <Column className="justify-start pt-[1px] w-[100%]">
                      <Row className="items-center w-[auto]">
                        <Img
                          src="images/img_objectscolumn_1.svg"
                          className="settings_One"
                          alt="objectscolumn One"
                        />
                        <Text
                          className="rowobjectscolumn_one"
                          as="h4"
                          variant="h4"
                        >
                          Personal Information
                        </Text>
                        {isDisabled ? (
                          <Row
                            className="items-center cursor-pointer justify-end w-[100%]"
                            onClick={() => setisDisabled(false)}
                          >
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="settings_One"
                              alt="edit"
                            />
                            <Text
                              className="font-medium text-indigo_600 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Edit
                            </Text>
                          </Row>
                        ) : (
                          <Row className="items-center justify-end ml-[auto] rounded-radius8 w-[15%]">
                            <Button
                              className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                              onClick={() => {
                                file
                                  ? handleUpload()
                                  : form.handleSubmit(updateEmployeeDetails());
                              }}
                            >
                              Update
                            </Button>
                            <Button
                              className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                              variant="OutlineIndigo600"
                              onClick={() => resetForm()}
                            >
                              Cancel
                            </Button>
                          </Row>
                        )}
                      </Row>
                      <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                      <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[85%]">
                        <Column>
                          <Stack className="bg-bluegray_50 ml-[50px] xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] lg:px-[32px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] rounded-radius50 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]">
                            {file ? (
                              <Img
                                src={URL.createObjectURL(file)}
                                className="absolute lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-[0] justify-center m-[auto] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] rounded-radius50 3xl:w-[27px] xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius50 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"
                                alt="location"
                              />
                            ) : form?.values?.profile ? (
                              <Img
                                src={`https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/public/${form?.values?.profile}`}
                                className="absolute lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-[0] justify-center m-[auto] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] rounded-radius50 3xl:w-[27px] xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius50 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"
                                alt="Profile"
                              />
                            ) : (
                              <Img
                                src="images/img_location_30X30.svg"
                                className="absolute lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-[0] justify-center m-[auto] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                                alt="location"
                              />
                            )}
                          </Stack>
                          {!isDisabled && (
                            <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                              <Text
                                className="font-medium text-black_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Upload Profile Picture
                              </Text>
                              <Column className="bg-bluegray_50 mt-[10px] items-center justify-start outline outline-[2px] outline-indigo_600 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius6 w-[100%]">
                                <Img
                                  src="images/img_rewind.svg"
                                  className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                                  alt="rewind"
                                />
                                <Input
                                  className="placeholder:text-gray_500 Group4000"
                                  wrapClassName="d-flex"
                                  variant="OutlineIndigo600"
                                  type="file"
                                  ref={inputRef}
                                  accept="image/*"
                                  id="file_input"
                                  onChange={(e) => {
                                    setFile(e.target.files[0]);
                                  }}
                                  suffix={
                                    <Img
                                      src="images/img_arrowright_24X24.svg"
                                      className="settings_One"
                                      alt="arrowright One"
                                      onClick={() => resetFile()}
                                    />
                                  }
                                />
                              </Column>
                            </Column>
                          )}
                        </Column>
                        <Column className="items-center justify-start lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] rounded-radius8 w-[82%]">
                          <List
                            className="gap-[0] min-h-[auto] w-[100%]"
                            orientation="vertical"
                          >
                            <Row className="listdepartment">
                              <Row className="items-center justify-between rounded-radius8 w-[100%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Name
                                </Text>
                                <Input
                                  className="placeholder:text-gray_500 FirstName"
                                  wrapClassName="w-[25%]"
                                  type="text"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "firstName",
                                      e.target.value
                                    );
                                  }}
                                  errors={form?.errors?.["firstName"]}
                                  value={form?.values?.["firstName"]}
                                  name="FirstName"
                                  placeholder="First Name"
                                  shape="RoundedBorder8"
                                  size="lg"
                                  variant="FillBluegray50"
                                  disabled={isDisabled}
                                ></Input>
                                <Input
                                  className="placeholder:text-gray_500 FirstName"
                                  wrapClassName="w-[25%]"
                                  type="text"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "middleName",
                                      e.target.value
                                    );
                                  }}
                                  errors={form?.errors?.["middleName"]}
                                  value={form?.values?.["middleName"]}
                                  name="MiddleName"
                                  placeholder="Middle Name"
                                  shape="RoundedBorder8"
                                  size="lg"
                                  variant="FillBluegray50"
                                  disabled={isDisabled}
                                ></Input>
                                <Input
                                  className="placeholder:text-gray_500 FirstName"
                                  wrapClassName="w-[25%]"
                                  type="text"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "lastName",
                                      e.target.value
                                    );
                                  }}
                                  errors={form?.errors?.["lastName"]}
                                  value={form?.values?.["lastName"]}
                                  name="LastName"
                                  placeholder="Last Name"
                                  shape="RoundedBorder8"
                                  size="lg"
                                  variant="FillBluegray50"
                                  disabled={isDisabled}
                                ></Input>
                              </Row>
                            </Row>
                            <Line className="self-center w-[40%] items-center lg:mt-[12px] lg:mr-[337px] xl:mt-[16px] xl:mr-[421px] 2xl:mt-[18px] 2xl:mr-[474px] 3xl:mt-[21px] 3xl:mr-[569px] rounded-radius8" />
                            <Row className="listdepartment">
                              <Row className="items-center justify-between rounded-radius8 w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Phone
                                </Text>
                                <Input
                                  className="placeholder:text-gray_500 FirstName"
                                  wrapClassName="w-[73%]"
                                  type="number"
                                  name="Group3995"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "workPhone",
                                      e.target.value
                                    );
                                  }}
                                  errors={form?.errors?.["workPhone"]}
                                  value={form?.values?.["workPhone"]}
                                  placeholder="Phone no."
                                  shape="RoundedBorder8"
                                  size="lg"
                                  variant="FillBluegray50"
                                  disabled={isDisabled}
                                ></Input>
                              </Row>
                              {/* <Row className="items-center justify-between rounded-radius8 w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Date of Birth
                                </Text>
                                <Datepicker
                                  className="p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%] rounded-radius8 bg-bluegray_50 3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]"
                                  name="dob"
                                  onChange={(e) => {
                                    form.handleChange("dob", e);
                                  }}
                                  selected={new Date(form?.values?.dob)}
                                  value={new Date(form?.values?.dob)}
                                  placeholder="--Select date--"
                                  disabled={isDisabled}
                                ></Datepicker>
                              </Row> */}
                            </Row>
                            <Line className="self-center w-[40%] items-center lg:mt-[12px] lg:mr-[337px] xl:mt-[16px] xl:mr-[421px] 2xl:mt-[18px] 2xl:mr-[474px] 3xl:mt-[21px] 3xl:mr-[569px] rounded-radius8" />
                            <Row className="listdepartment">
                              {/* <Row className="items-center justify-between rounded-radius8 w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Gender
                                </Text>
                                <SelectBox
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  name="Gender"
                                  options={GenderOptions}
                                  placeholder="Select Gender"
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                  onChange={(e) => {
                                    form.handleChange("gender", e);
                                  }}
                                  value={getDefaultValue(
                                    GenderOptions,
                                    form?.values?.gender
                                  )}
                                ></SelectBox>
                              </Row> */}
                              <Row className="items-center justify-between rounded-radius8 w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Location
                                </Text>
                                <Input
                                  className="placeholder:text-gray_500 Group4000"
                                  wrapClassName="2xl:ml-[38px] 3xl:ml-[45px] flex lg:ml-[27px] w-[73%] xl:ml-[34px]"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "location",
                                      e.target.value
                                    );
                                  }}
                                  value={form?.values?.location}
                                  name="Group4000"
                                  placeholder="Enter the location"
                                  shape="RoundedBorder8"
                                  size="lg"
                                  variant="FillBluegray50"
                                  disabled={isDisabled}
                                ></Input>
                              </Row>
                            </Row>
                            <Line className="self-center w-[40%] items-center lg:mt-[12px] lg:mr-[337px] xl:mt-[16px] xl:mr-[421px] 2xl:mt-[18px] 2xl:mr-[474px] 3xl:mt-[21px] 3xl:mr-[569px] rounded-radius8" />
                            <Row className="listdepartment">
                              <Row className="items-center justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] rounded-radius8 w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  workEmail
                                </Text>
                                <Input
                                  className="placeholder:text-gray_500 FirstName"
                                  wrapClassName="w-[73%]"
                                  disabled={isDisabled}
                                  onChange={(e) => {
                                    form.handleChange("workEmail", e.target.value);
                                  }}
                                  errors={form?.errors?.workEmail}
                                  value={form?.values?.workEmail}
                                  name="workEmailId"
                                  placeholder="workEmail Id"
                                  shape="RoundedBorder8"
                                  size="lg"
                                  variant="FillBluegray50"
                                ></Input>
                              </Row>
                              {/* <Row className="items-center justify-between rounded-radius8 w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  User Type
                                </Text>
                                <Select
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  onChange={(e) => {
                                    form.handleChange("user_type_id", e?.value);
                                  }}
                                  value={getDefaultValue(
                                    userTypeOption,
                                    form?.values?.user_type_id
                                  )}
                                  options={userTypeOption}
                                  name="user_type"
                                  placeholder="Select User Type"
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row> */}
                            </Row>
                          </List>
                        </Column>
                      </Row>
                    </Column>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="add_employee">
                        <Column className="justify-start pt-[1px] w-[100%]">
                          <Row className="items-centerd">
                            <Img
                              src="images/img_objectscolumn_1.svg"
                              className="settings_One"
                              alt="objectscolumn Two"
                            />
                            <Text
                              className="rowobjectscolumn_one"
                              as="h4"
                              variant="h4"
                            >
                              Job Details
                            </Text>
                          </Row>
                          <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                        </Column>
                        <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius8 w-[72%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Row className="items-center justify-between rounded-radius8 w-[39%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Job Title
                                </Text>
                                <Select
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "jobTitle",
                                      e?.value
                                    );
                                  }}
                                  value={getDefaultValue(
                                    jobTitle,
                                    form?.values?.jobTitle
                                  )}
                                  options={jobTitle}
                                  name="job_title"
                                  placeholder="Select Job Title"
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                              {/* <Row className="items-center justify-between rounded-radius8 w-[43%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Employment Status
                                </Text>
                                <Select
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[65%]"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "employment_status_id",
                                      e?.value
                                    );
                                  }}
                                  value={getDefaultValue(
                                    employeeStatusOption,
                                    form?.values?.employment_status_id
                                  )}
                                  options={employeeStatusOption}
                                  name="employment_status"
                                  placeholder="Select Employment Status"
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row> */}
                            </Row>
                            <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                              <Row className="items-center justify-between rounded-radius8 w-[39%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Department
                                </Text>
                                <Select
                                  className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "department",
                                      e?.value
                                    );
                                  }}
                                  value={getDefaultValue(
                                    departmentOption,
                                    form?.values?.department
                                  )}
                                  placeholderClassName=""
                                  name="columnselectone one"
                                  placeholder="Select Department"
                                  options={departmentOption}
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                              <Row className="items-center justify-between rounded-radius8 w-[43%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Report To
                                </Text>
                                <Select
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[65%]"
                                  onChange={(e) => {
                                    form.handleChange("supervisor", e?.value);
                                  }}
                                  value={getDefaultValue(
                                    ReportToOption,
                                    form?.values?.supervisor
                                  )}
                                  options={ReportToOption}
                                  name="report_to"
                                  placeholder="Select Repoting"
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                            </Row>
                            {/* <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                              <Row className="items-center justify-between rounded-radius8 w-[39%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Position
                                </Text>
                                <Select
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "job_title_position_id",
                                      e?.value
                                    );
                                  }}
                                  value={getDefaultValue(
                                    jobPosition,
                                    form?.values?.job_title_position_id
                                  )}
                                  options={jobPosition}
                                  name="position"
                                  placeholder="Select Position"
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                              <Row className="items-center justify-between rounded-radius8 w-[43%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Hire Date
                                </Text>
                                <Datepicker
                                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[65%] rounded-radius8 bg-bluegray_50 3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]"
                                  onChange={(e) => {
                                    form.handleChange("hire_date", e);
                                  }}
                                  selected={new Date(form?.values?.hire_date)}
                                  value={new Date(form?.values?.hire_date)}
                                  name="hire_date"
                                  placeholder="--Select date--"
                                  disabled={isDisabled}
                                ></Datepicker>
                              </Row>
                            </Row> */}
                          </Column>
                        </Column>
                      </Column>
                      <Column className="add_employee mt-[40px]">
                        <Column className="justify-start pt-[1px] w-[100%]">
                          <Row className="items-start w-[7%]">
                            <Img
                              src="images/img_objectscolumn_1.svg"
                              className="settings_One"
                              alt="objectscolumn Three"
                            />
                            <Text
                              className="rowobjectscolumn_three"
                              as="h4"
                              variant="h4"
                            >
                              Address
                            </Text>
                          </Row>
                          <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                        </Column>
                        {/* <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius8 w-[68%]">
                          <Column className="items-end justify-start w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Row className="items-center justify-between rounded-radius8 w-[46%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Address
                                </Text>
                                <TextArea
                                  className="font-normal lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[20px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[81%]"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "address",
                                      e.target.value
                                    );
                                  }}
                                  value={form?.values?.address}
                                  name="Enteryouraddr"
                                  placeholder="Enter your address"
                                  disabled={isDisabled}
                                ></TextArea>
                              </Row>
                              <Row className="items-center justify-between rounded-radius8 w-[41%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Country
                                </Text>
                                <Select
                                  className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  name="country"
                                  onChange={(e) => {
                                    getStateApi(e?.value);
                                    addressForm.handleChange("country_id", e);
                                  }}
                                  value={getDefaultValue(
                                    countryOption,
                                    addressForm?.values?.country_id
                                  )}
                                  placeholder="Select Country"
                                  options={countryOption}
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                            </Row>
                            <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[41%]">
                              <Row className="items-center justify-between rounded-radius8 w-[100%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  State
                                </Text>
                                <Select
                                  className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  name="state"
                                  placeholder="Select State"
                                  onChange={(e) => {
                                    getCityApi(e?.value);
                                    addressForm.handleChange("state_id", e);
                                  }}
                                  value={getDefaultValue(
                                    stateOption,
                                    addressForm?.values?.state_id
                                  )}
                                  options={stateOption}
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                              <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  City
                                </Text>
                                <Select
                                  className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                                  name="city"
                                  placeholder="Select City"
                                  onChange={(e) => {
                                    form.handleChange("city_id", e?.value);
                                  }}
                                  value={getDefaultValue(
                                    cityOption,
                                    form?.values?.city_id
                                  )}
                                  options={cityOption}
                                  isSearchable={true}
                                  isMulti={false}
                                  isDisabled={isDisabled}
                                ></Select>
                              </Row>
                              <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Zip Code
                                </Text>
                                <Input
                                  className="placeholder:text-gray_500 FirstName"
                                  wrapClassName="w-[73%]"
                                  name="Group3997"
                                  placeholder="Enter 6 digit code"
                                  onChange={(e) => {
                                    form.handleChange(
                                      "zipcode",
                                      e.target.value
                                    );
                                  }}
                                  value={form?.values?.zipcode}
                                  shape="RoundedBorder8"
                                  size="2xl"
                                  variant="FillBluegray50"
                                  disabled={isDisabled}
                                ></Input>
                              </Row>
                            </Column>
                          </Column>
                        </Column> */}
                      </Column>
                    </List>
                    {/* <Column className="justify-start w-[100%]">
                      <Column className="justify-start pt-[1px] w-[100%]">
                        <Row className="items-end w-[11%]">
                          <Img
                            src="images/img_objectscolumn_1.svg"
                            className="objectscolumn_Four"
                            alt="objectscolumn Four"
                          />
                          <Text
                            className="rowobjectscolumn_four"
                            as="h4"
                            variant="h4"
                          >
                            Compensation
                          </Text>
                        </Row>
                        <Line className="bg-bluegray_100 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius8 w-[68%]">
                        <Row className="items-center justify-between rounded-radius8 w-[100%]">
                          <Row className="items-center justify-between rounded-radius8 w-[41%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Pay Type
                            </Text>
                            <Select
                              className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                              name="paytype"
                              placeholder="Select Pay Type"
                              onChange={(e) => {
                                form.handleChange("pay_type", e?.value);
                              }}
                              value={getDefaultValue(
                                PayTypeOption,
                                form?.values?.pay_type
                              )}
                              options={PayTypeOption}
                              isSearchable={true}
                              isMulti={false}
                              isDisabled={isDisabled}
                            ></Select>
                          </Row>
                          <Row className="items-center justify-between rounded-radius8 w-[41%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Currency
                            </Text>
                            <Select
                              className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                              name="currency"
                              placeholder="Select Currency"
                              onChange={(e) => {
                                form.handleChange("currency_id", e?.value);
                              }}
                              value={getDefaultValue(
                                currencyOption,
                                form?.values?.currency_id
                              )}
                              options={currencyOption}
                              isSearchable={true}
                              isMulti={false}
                              isDisabled={isDisabled}
                            ></Select>
                          </Row>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius8 w-[49%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Pay Rate
                            </Text>
                            <Row className="items-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                              <Input
                                className="placeholder:text-gray_500 FirstName"
                                wrapClassName="w-[40%]"
                                disabled={isDisabled}
                                onChange={(e) => {
                                  form.handleChange(
                                    "pay_rate_amount",
                                    e.target.value
                                  );
                                }}
                                value={form?.values?.["pay_rate_amount"]}
                                name="Group3997 One"
                                placeholder="Add Value"
                                shape="RoundedBorder8"
                                size="lg"
                                variant="FillBluegray50"
                              ></Input>
                              {form?.values?.pay_type === "Salary" ? (
                                <>
                                  {" "}
                                  <Text
                                    className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-black_900 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Per
                                  </Text>
                                  <Select
                                    className="ml-[10px] w-[45%]"
                                    placeholderClassName=""
                                    onChange={(e) => {
                                      form.handleChange(
                                        "pay_rate_per",
                                        e?.value
                                      );
                                    }}
                                    value={getDefaultValue(
                                      PayPerOption,
                                      form?.values?.pay_rate_per
                                    )}
                                    name="columnselectone six"
                                    options={PayPerOption}
                                    placeholder=""
                                    isSearchable={true}
                                    isMulti={false}
                                    isDisabled={isDisabled}
                                  ></Select>
                                </>
                              ) : (
                                <Text
                                  className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-black_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Per Hour
                                </Text>
                              )}
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Column> */}
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>

          <ToastContainer />
        </>
      )}
    </>
  );
};

export default EmployeePagePage;
