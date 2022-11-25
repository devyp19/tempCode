import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Input,
  SelectBox,
  Datepicker,
  List,
  TextArea,
  Button,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import * as yup from "yup";
import {
  getUsertypeselect,
  postInvite,
  getCityselect,
  getCountryselect,
  getStateselect,
  getJobtitlepositionselect,
  getDepartmentjobtitleselect,
  getEmploymentstatusselect,
  getDepartmentselect,
  postEmployee,
  getCurrencyselect,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import { useNavigate } from "react-router-dom";
import { getEmployeeselect, postUserProfile } from "../../service/api";

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

const AddEmployeePage = () => {
  const [departmentOption, setdepartmentOption] = React.useState();
  const [employeeStatusOption, setemployeeStatusOption] = React.useState();
  const [jobPosition, setjobPosition] = React.useState();
  const [jobTitle, setjobTitle] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const [cityOption, setcityOption] = React.useState();
  const [stateOption, setstateOption] = React.useState();
  const [countryOption, setcountryOption] = React.useState();
  const [currencyOption, setcurrencyOption] = React.useState();
  const [ReportToOption, setReportToOption] = React.useState();
  const [file, setFile] = React.useState();
  const [userTypeOption, setuserTypeOption] = React.useState();
  const navigate = useNavigate();
  const inputRef = React.useRef(null);

  const formValidationSchema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    middle_name: yup.string().required("Middle Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid email"),
    phone_number: yup
      .number()
      .required("Phone Number is required")
      .typeError("Phone_number must be a number")
      .transform((v, originalVal) =>
        isNaN(v) && originalVal === "" ? undefined : v
      ),
  });

  const form = useForm(
    {
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      gender: "",
      location: "",
      dob: "",
      department_id: null,
      job_title_position_id: null,
      department_job_title_id: null,
      employment_status_id: null,
      report_to_id: null,
      hire_date: "",
      city_id: null,
      zipcode: "",
      currency_id: null,
      pay_type: "",
      pay_rate_amount: "",
      pay_rate_per: "",
      address: "",
      profile: "",
    },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  const addressForm = useForm({
    country_id: null,
    state_id: null,
  });

  React.useEffect(() => {
    getdepartmentApi();
    getEmployeeStatusApi();
    getJobTitleApi();
    getjobPositionApi();
    getStateApi();
    getCountryApi();
    getCityApi();
    getCurrencyApi();
    getReportToOption();
    getUserType();
  }, []);

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

  function inviteUser() {
    const req = { data: { email: form?.values?.email } };

    postInvite(req)
      .then((res) => {
        // setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
        createEmployee(form?.values, res?.Key);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function createEmployee(profileUrl) {
    const req = file
      ? { data: { ...form?.values, profile: profileUrl } }
      : { data: { ...form?.values } };

    postEmployee(req)
      .then((res) => {
        setapiData1(res);
        inviteUser();
        toast.success("Employee added successfully.");
        navigate("/employeelist");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }

  // to get report_to data
  const getReportToOption = () => {
    const req = { params: { select: "id,first_name,middle_name,last_name" } };
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
      ({ id, first_name, middle_name, last_name }, index) => {
        return {
          value: id,
          label: `${first_name} ${middle_name} ${last_name}`,
        };
      }
    );
    return options;
  }
  const resetForm = () => {
    inputRef.current.value = null;
    setFile("");
    form.resetForm();
  };

  function dropdownOptions(data) {
    const options = data?.map(({ id, label }, index) => {
      return { value: id, label: label };
    });
    return options;
  }

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[25px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar className="w-[18%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Add Employee
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius8 w-[96%]">
              <Column className="justify-start w-[100%]">
                <Column className="justify-start pt-[1px] w-[100%]">
                  <Row className="items-center w-[auto]">
                    <Img
                      src="images/img_objectscolumn_1.svg"
                      className="settings_One"
                      alt="objectscolumn One"
                    />
                    <Text className="rowobjectscolumn_one" as="h4" variant="h4">
                      Personal Information
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[71%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[70%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upload Profile Picture
                      </Text>
                      <Column className="bg-bluegray_50 items-center justify-start outline outline-[2px] outline-indigo_600 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius6 w-[35%] 2xl:ml-[38px] 3xl:ml-[45px] flex lg:ml-[27px] xl:ml-[34px]">
                        {file ? (
                          <Img
                            src={URL.createObjectURL(file)}
                            className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                            alt="rewind"
                          />
                        ) : (
                          <Img
                            src="images/img_rewind.svg"
                            className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                            alt="rewind"
                          />
                        )}
                        <Input
                          className="placeholder:text-gray_500 Group4000"
                          wrapClassName="d-flex"
                          variant="OutlineIndigo600"
                          type="file"
                          ref={inputRef}
                          accept="image/*"
                          id="file_input"
                          suffix={
                            <Img
                              src="images/img_arrowright_24X24.svg"
                              className="settings_One"
                              alt="arrowright One"
                              onClick={() => {
                                inputRef.current.value = null;
                                setFile("");
                              }}
                            />
                          }
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Name
                      </Text>
                      <Row className="items-center justify-between rounded-radius8 w-[89%]">
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[32%]"
                          type="text"
                          onChange={(e) => {
                            form.handleChange("first_name", e.target.value);
                          }}
                          errors={form?.errors?.first_name}
                          value={form?.values?.["first_name"]}
                          name="FirstName"
                          placeholder="First Name"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[32%]"
                          type="text"
                          onChange={(e) => {
                            form.handleChange("middle_name", e.target.value);
                          }}
                          errors={form?.errors?.["middle_name"]}
                          value={form?.values?.["middle_name"]}
                          name="MiddleName"
                          placeholder="Middle Name"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[32%]"
                          type="text"
                          onChange={(e) => {
                            form.handleChange("last_name", e.target.value);
                          }}
                          errors={form?.errors?.["last_name"]}
                          value={form?.values?.["last_name"]}
                          name="LastName"
                          placeholder="Last Name"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                      <Row className="items-center justify-between rounded-radius8 w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Email
                        </Text>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[73%]"
                          type="email"
                          onChange={(e) => {
                            form.handleChange("email", e.target.value);
                          }}
                          errors={form?.errors?.email}
                          value={form?.values?.email}
                          name="EmailId"
                          placeholder="Email Id"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
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
                          onChange={(e) => {
                            form.handleChange("phone_number", e.target.value);
                          }}
                          errors={form?.errors?.["phone_number"]}
                          value={form?.values?.["phone_number"]}
                          name="Group3995"
                          placeholder="Phone no."
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center justify-between w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Gender
                        </Text>
                        <SelectBox
                          className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                          onChange={(e) => {
                            form.handleChange("gender", e);
                          }}
                          value={form?.values?.gender}
                          name="Gender"
                          options={GenderOptions}
                          placeholder="Select Gender"
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between rounded-radius8 w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date of Birth
                        </Text>
                        <Datepicker
                          className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%] rounded-radius8 bg-bluegray_50 3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]"
                          onChange={(e) => {
                            form.handleChange("dob", e);
                          }}
                          value={form?.values?.dob}
                          name="dob"
                          placeholder="--Select date--"
                        ></Datepicker>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[40%]">
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
                            form.handleChange("location", e.target.value);
                          }}
                          value={form?.values?.location}
                          name="Group4000"
                          placeholder="Select Location"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between rounded-radius8 w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          User Type
                        </Text>
                        <SelectBox
                          className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%] rounded-radius8 bg-bluegray_50 3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]"
                          onChange={(e) => {
                            form.handleChange("user_type_id", e);
                          }}
                          value={form?.values?.["user_type_id"]}
                          options={userTypeOption}
                          name="user_type"
                          placeholder="Select User Type"
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] w-[100%]"
                orientation="vertical"
              >
                <Column className="justify-start lg:my-[18px] xl:my-[23px] 2xl:my-[26px] 3xl:my-[31px] w-[100%]">
                  <Column className="justify-start pt-[1px] w-[auto]">
                    <Row className="items-center w-[100%]">
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
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[72%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-center justify-between w-[39%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Department
                          </Text>
                          <SelectBox
                            className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                            onChange={(e) => {
                              console.log("E", e);
                              form.handleChange("department_id", e);
                            }}
                            value={form?.values?.["department_id"]}
                            placeholderClassName=""
                            name="columnselectone one"
                            placeholder="Select Department"
                            options={departmentOption}
                            isSearchable={true}
                            isMulti={false}
                          ></SelectBox>
                        </Row>
                        <Row className="items-center justify-between w-[43%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Employment Status
                          </Text>
                          <SelectBox
                            className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[65%]"
                            onChange={(e) => {
                              form.handleChange("employment_status_id", e);
                            }}
                            value={form?.values?.["employment_status_id"]}
                            options={employeeStatusOption}
                            name="employment_status"
                            placeholder="Select Employment Status"
                            isSearchable={true}
                            isMulti={false}
                          ></SelectBox>
                        </Row>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Row className="items-center justify-between w-[39%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Position
                          </Text>
                          <SelectBox
                            className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                            onChange={(e) => {
                              form.handleChange("job_title_position_id", e);
                            }}
                            value={form?.values?.["job_title_position_id"]}
                            options={jobPosition}
                            name="position"
                            placeholder="Select Position"
                            isSearchable={true}
                            isMulti={false}
                          ></SelectBox>
                        </Row>
                        <Row className="items-center justify-between w-[43%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Report To
                          </Text>
                          <SelectBox
                            className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[65%]"
                            onChange={(e) => {
                              form.handleChange("report_to_id", e);
                            }}
                            value={form?.values?.["report_to_id"]}
                            options={ReportToOption}
                            name="report_to"
                            placeholder="Select Repoting"
                            isSearchable={true}
                            isMulti={false}
                          ></SelectBox>
                        </Row>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Row className="items-center justify-between w-[39%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Job Title
                          </Text>
                          <SelectBox
                            className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                            onChange={(e) => {
                              form.handleChange("department_job_title_id", e);
                            }}
                            value={form?.values?.["department_job_title_id"]}
                            options={jobTitle}
                            name="job_title"
                            placeholder="Select Job Title"
                            isSearchable={true}
                            isMulti={false}
                          ></SelectBox>
                        </Row>
                        <Row className="items-center justify-between w-[43%]">
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
                            value={form?.values?.["hire_date"]}
                            name="hire_date"
                            placeholder="--Select date--"
                          ></Datepicker>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="justify-start lg:my-[18px] xl:my-[23px] 2xl:my-[26px] 3xl:my-[31px] w-[100%]">
                  <Column className="justify-start pt-[1px] w-[100%]">
                    <Row className="items-start w-[7%]">
                      <Img
                        src="images/img_objectscolumn_1.svg"
                        className="settings_One"
                        alt="objectscolumn Three"
                      />
                      <Text
                        className="mt-[3px] rowobjectscolumn_one"
                        as="h4"
                        variant="h4"
                      >
                        Address
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[73%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Row className="items-start justify-between rounded-radius8 w-[56%]">
                        <Text className="rowaddress_one" as="h5" variant="h5">
                          Address
                        </Text>
                        <TextArea
                          className="font-normal lg:mb-[43px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[81%]"
                          onChange={(e) => {
                            form.handleChange("address", e.target.value);
                          }}
                          value={form?.values?.address}
                          name="Enteryouraddr"
                          placeholder="Enter your address"
                        ></TextArea>
                      </Row>
                      <Column className="items-center justify-start w-[38%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Country
                          </Text>
                          <SelectBox
                            className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                            name="country"
                            onChange={(e) => {
                              getStateApi(e);
                              addressForm.handleChange("country_id", e);
                            }}
                            placeholder="Select Country"
                            options={countryOption}
                            isSearchable={true}
                            isMulti={false}
                          ></SelectBox>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            State
                          </Text>
                          <SelectBox
                            className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                            name="state"
                            placeholder="Select State"
                            onChange={(e) => {
                              getCityApi(e);
                              addressForm.handleChange("state_id", e);
                            }}
                            options={stateOption}
                            isSearchable={true}
                            isMulti={false}
                            isDisabled={!addressForm?.values?.country_id}
                          ></SelectBox>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            City
                          </Text>
                          <SelectBox
                            className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                            onChange={(e) => {
                              form.handleChange("city_id", e);
                            }}
                            value={form?.values?.["city_id"]}
                            name="city"
                            placeholder="Select City"
                            options={cityOption}
                            isSearchable={true}
                            isMulti={false}
                            isDisabled={!addressForm?.values?.state_id}
                          ></SelectBox>
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
                            onChange={(e) => {
                              form.handleChange("zipcode", e.target.value);
                            }}
                            value={form?.values?.zipcode}
                            name="Group3997"
                            placeholder="Enter 6 digit code"
                            shape="RoundedBorder8"
                            size="2xl"
                            variant="FillBluegray50"
                          ></Input>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </List>
              <Column className="justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] w-[100%]">
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
                <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[71%]">
                  <List
                    className="lg:gap-[118px] xl:gap-[148px] 2xl:gap-[166px] 3xl:gap-[199px] grid grid-cols-2 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Pay Type
                      </Text>
                      <SelectBox
                        className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                        onChange={(e) => {
                          form.handleChange("pay_type", e);
                        }}
                        value={form?.values?.pay_type}
                        options={PayTypeOption}
                        name="paytype"
                        placeholder="Select Pay Type"
                        isSearchable={true}
                        isMulti={false}
                      ></SelectBox>
                    </Row>
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Currency
                      </Text>
                      <SelectBox
                        className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[73%]"
                        onChange={(e) => {
                          form.handleChange("currency_id", e);
                        }}
                        value={form?.values?.["currency_id"]}
                        options={currencyOption}
                        name="currency"
                        placeholder="Select Currency"
                        isSearchable={true}
                        isMulti={false}
                      ></SelectBox>
                    </Row>
                  </List>
                  <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[47%]">
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
                            <SelectBox
                              className="ml-[10px] w-[45%]"
                              placeholderClassName=""
                              onChange={(e) => {
                                form.handleChange("pay_rate_per", e);
                              }}
                              value={form?.values?.pay_rate_per}
                              name="columnselectone six"
                              options={PayPerOption}
                              placeholder=""
                              isSearchable={true}
                              isMulti={false}
                            ></SelectBox>
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
              </Column>
              <Row className="items-center justify-end lg:mb-[45px] xl:mb-[57px] 2xl:mb-[64px] 3xl:mb-[77px] ml-[auto] lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] rounded-radius8 w-[15%]">
                <Button
                  className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  onClick={() => {
                    file ? handleUpload() : form.handleSubmit(createEmployee());
                  }}
                >
                  Save
                </Button>
                <Button
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  variant="OutlineIndigo600"
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>

      <ToastContainer />
    </>
  );
};

export default AddEmployeePage;
