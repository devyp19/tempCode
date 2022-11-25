import React, { useState } from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Input,
  List,
  SelectBox,
  Switch,
} from "components";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";
import {
  updateEmployee,
  getEmployeesCount,
  getEmployeeselect,
  getSearchEmployeeList,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterModal } from "modals/Filters";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import TableFooter from "./tableFooter.js";
import { isEmpty } from "lodash";

// Per Page rows
const rowsPerPageOption = [
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
  { value: 150, label: "150" },
];

const EmployeeListPage = () => {
  const [isOpenFilterModal, setisOpenFilterModal] = React.useState(false);
  const navigate = useNavigate();

  const [filterData, setfilterData] = React.useState(); // Set Filter Data from Modal
  const [employeeCount, setemployeeCount] = React.useState(); // Set Employees Count
  const [apiData, setapiData] = React.useState(); // Set Employees Data
  const [isLoading, setIsLoading] = useState(false); // Loading State
  // Pagination States
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(20);
  // Search data State
  const [search, setSearch] = React.useState("");

  function handleOpenFilterModal() {
    //Open Filter Modal
    setisOpenFilterModal(true);
  }
  function handleCloseFilterModal() {
    // Close FIlter Modal
    setisOpenFilterModal(false);
  }

  // get total count of employees
  const getCount = async (data) => {
    const req = data
      ? {
          params: {
            or: `(firstName.ilike.%${data}%,lastName.ilike.%${data}%,middleName.ilike.%${data}%)`,
          },
        }
      : filterData
      ? { filterURL: filterData.join("&") }
      : {};
    !data && setIsLoading(true);
    await getEmployeesCount(req)
      .then((res) => {
        setemployeeCount(res[0]?.count);
        !data && setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  };

  // to get employee data
  const callApi = async (data) => {
    const req = filterData
      ? { headers: { Range: data }, filterURL: filterData.join("&") }
      : { headers: { Range: data } };
    setIsLoading(true);
    await getEmployeeselect(req)
      .then((res) => {
        setapiData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  };

  // Pagination

  // To calculate the range for pagination
  const calculateRange = (totalRows, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(totalRows / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  // To set the range for API
  const sliceData = (page, rowsPerPage) => {
    return `${(page - 1) * rowsPerPage}-${page * rowsPerPage - 1}`;
  };

  const pagiantion = (count, rows, page) => {
    const range = calculateRange(count, rows);
    setTableRange([...range]);

    const data = sliceData(page, rowsPerPage);
    setSlice(data ? data : "");

    search ? getSearchList(search, data) : callApi(data);
  };

  // Search
  const handleSearch = (val) => {
    if (val !== "") {
      getCount(val);
      setSearch(val);
    } else {
      setSearch("");
      getCount();
    }
  };

  // To get Search List
  function getSearchList(data, range) {
    const req = {
      params: {
        or: `(firstName.ilike.%${data}%,lastName.ilike.%${data}%,middleName.ilike.%${data}%)`,
      },
      headers: { Range: range },
    };
    // setIsLoading(true);
    getSearchEmployeeList(req)
      .then((res) => {
        setapiData(res);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  }

  // Navigation to Create Employee page
  function handleNavigate() {
    navigate("/addemployee");
  }

  function handleNavigate1(id) {
    navigate("/employeepage", { state: { id: id } });
  }

  React.useEffect(() => {
    getCount();
  }, [filterData]);

  // To Change the Employee Status
  const handleSwitchChange = (activeStatus, id) => {
    const req = { data: { id, is_active: activeStatus } };

    updateEmployee(req)
      .then((res) => {
        toast.success("Employee Status updated.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  };

  React.useEffect(() => {
    pagiantion(employeeCount, rowsPerPage, page);
  }, [employeeCount, setTableRange, page, setSlice, rowsPerPage]);

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Row className="items-start justify-evenly w-[100%]">
            <Sidebar className="w-[18%]" />
            <Column className="items-center justify-start w-[85%]">
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Text className="CreateEmployee" as="h3" variant="h3">
                  Employees Details
                </Text>
                <Text className="TopBar" variant="body2">
                  AP
                </Text>
              </Row>
              <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] rounded-radius8 w-[96%]">
                <Row className="items-center w-[100%]">
                  <Row className="items-center  ml-[15px] w-[25%]">
                    <Button
                      className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] items-center justify-center lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                      shape="icbRoundedBorder4"
                      size="mdIcn"
                      variant="icbOutlineBluegray5003d"
                      onClick={handleOpenFilterModal}
                    >
                      <Img
                        src="images/img_volume_42X42.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="volume One"
                      />
                    </Button>
                    <Row className="items-center ml-[15px] w-[auto]">
                      <Img
                        src="images/img_cut.svg"
                        className="settings_One"
                        alt="cut"
                      />
                      <Text className="EmployeeCounts" as="h5" variant="h5">
                        {employeeCount} Employees
                      </Text>
                    </Row>
                    {!isEmpty(filterData) && (
                      <Button
                        className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[9px] 3xl:ml-[11px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[50%]"
                        variant="OutlineIndigo600"
                        onClick={() => setfilterData([])}
                      >
                        Reset Filters
                      </Button>
                    )}
                  </Row>
                  <Row className="items-center justify-center lg:ml-[393px] xl:ml-[491px] 2xl:ml-[553px] 3xl:ml-[663px] w-[25%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Search
                    </Text>
                    <Input
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                      wrapClassName="2xl:ml-[12px] 3xl:ml-[14px] flex lg:ml-[8px] w-[81%] xl:ml-[10px]"
                      name="Group3997"
                      placeholder="Search Employee by name"
                      prefix={
                        <Img
                          src="images/img_search_16X16.svg"
                          className="cursor-pointer ml-[2px] lg:w-[8px] lg:h-[9px] lg:mr-[9px] xl:w-[10px] xl:h-[11px] xl:mr-[12px] 2xl:w-[12px] 2xl:h-[13px] 2xl:mr-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[16px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        search?.length > 0 ? (
                          <CloseSVG
                            color="#757e8a"
                            className="cursor-pointer lg:w-[8px] lg:h-[9px] lg:ml-[5px] lg:mr-[11px] xl:w-[10px] xl:h-[11px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                            onClick={() => {
                              setSearch(""), getCount(), setPage(1);
                            }}
                          />
                        ) : (
                          ""
                        )
                      }
                      shape="srcRoundedBorder4"
                      size="smSrc"
                      variant="srcFillBluegray50"
                    ></Input>
                  </Row>
                  <Button
                    className="2xl:ml-[18px] 3xl:ml-[21px] flex items-center justify-center lg:ml-[12px] text-center w-[11%] xl:ml-[16px]"
                    leftIcon={
                      <Img
                        src="images/img_plus.svg"
                        className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                        alt="plus"
                      />
                    }
                    onClick={handleNavigate}
                  >
                    <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                      New Employee
                    </div>
                  </Button>
                </Row>
                <Column className="items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <div className="w-[100%]">
                      <Row className="bg-gray_101 border border-gray_300 border-solid items-center lg:px-[12px] xl:px-[20px] 2xl:px-[17px] 3xl:px-[20px] w-[100%]">
                        <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[7%]">
                          <Text className="row" as="h5" variant="h5">
                            Image
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[10%]">
                          <Text className="rowemployeeid" as="h5" variant="h5">
                            Employee Id
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[3px] ml-[3px] lg:mr-[42px] xl:mr-[53px] 2xl:mr-[60px] 3xl:mr-[72px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            alt="arrowup"
                          /> */}
                        </Row>
                        <Row className="items-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[10%]">
                          <Text className="rowfullname" as="h5" variant="h5">
                            Full Name
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] ml-[4px] lg:mt-[3px] 2xl:mt-[5px] xl:mt-[4px] 3xl:mt-[5px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            alt="arrowup One"
                          /> */}
                        </Row>
                        <Row className="items-start justify-center lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[10%]">
                          <Text className="rowgender" as="h5" variant="h5">
                            Gender
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[3px] ml-[4px] lg:mr-[17px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            alt="arrowup Two"
                          /> */}
                        </Row>
                        <Row className="items-start justify-center lg:pr-[3px] xl:pr-[5px] 2xl:pr-[7px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                          <Text className="rowemployeeid" as="h5" variant="h5">
                            Department
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[3px] ml-[3px] lg:mr-[10px] xl:mr-[10px] 2xl:mr-[47px] 3xl:mr-[56px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            alt="arrowup Three"
                          /> */}
                        </Row>
                        <Row className="items-start justify-center xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[12%]">
                          <Text className="rowjobtitle" as="h5" variant="h5">
                            Job Title
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] lg:mr-[14px] xl:mr-[20px] 2xl:mr-[39px] 3xl:mr-[47px] my-[2px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                            alt="arrowup Four"
                          /> */}
                        </Row>
                        <Row className="items-start justify-center xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[12%]">
                          <Text className="rowjobtitle" as="h5" variant="h5">
                            Report To
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="arrowup_Five"
                            alt="arrowup Five"
                          /> */}
                        </Row>
                        <Row className="items-start justify-center xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[10%]">
                          <Text className="rowjobtitle" as="h5" variant="h5">
                            Location
                          </Text>
                          {/* <Img
                            src="images/img_arrowup.svg"
                            className="arrowup_Five"
                            alt="arrowup Six"
                          /> */}
                        </Row>
                        <Row className="items-center justify-center xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[3%]">
                          <Text className="rowjobtitle" as="h5" variant="h5">
                            Action
                          </Text>
                        </Row>
                      </Row>
                      {employeeCount ? (
                        <List
                          className="gap-[0] min-h-[auto] lg:mt-[12px] pl-[25px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mx-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          {apiData?.map((apiDataResponseEle, index) => {
                            return (
                              <React.Fragment
                                key={`apiDataResponseEle${index}`}
                              >
                                <Row className="columnellipsethirteen">
                                  <Row className="lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[9px] 3xl:pr-[13px] mx-w-[7%] w-[auto]">
                                    <Img
                                      src="images/img_ellipse13.png"
                                      className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                                      alt="EllipseThirteen"
                                    />
                                  </Row>
                                  <Row className="items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] max-w-[10%] w-[auto]">
                                    <Text
                                      className="rowemp001"
                                      as="h5"
                                      variant="h5"
                                      onClick={() =>
                                        handleNavigate1(apiDataResponseEle?.id)
                                      }
                                    >
                                      {apiDataResponseEle?.id}
                                    </Text>
                                  </Row>
                                  <Row className="nav-link hover:underline text-blue-800 items-center justify-center mx-w-[13%] w-[10%]">
                                    <Text
                                      onClick={() =>
                                        handleNavigate1(apiDataResponseEle?.id)
                                      }
                                      as="h5"
                                      variant="h5"
                                    >
                                      {apiDataResponseEle?.firstName}{" "}
                                      {apiDataResponseEle?.middleName}{" "}
                                      {apiDataResponseEle?.lastName}
                                    </Text>
                                  </Row>
                                  <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] mx-w-[10%] w-[10%]">
                                    <Text
                                      className="rowgender_one"
                                      as="h5"
                                      variant="h5"
                                    >
                                      {apiDataResponseEle?.gender}
                                    </Text>
                                  </Row>
                                  <Row className="items-center justify-center w-[10%]">
                                    <Text
                                      // className="rowdesign"
                                      as="h5"
                                      variant="h5"
                                    >
                                      {apiDataResponseEle?.department}
                                    </Text>
                                  </Row>
                                  <Row className="items-center p-[1px] w-[10%]">
                                    <Text
                                      className="rowuidesigner"
                                      as="h5"
                                      variant="h5"
                                    >
                                      {apiDataResponseEle?.jobTitle}
                                    </Text>
                                  </Row>
                                  <Row className="items-center xl:p-[5px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                                    <Text
                                      className="rowjunior"
                                      as="h5"
                                      variant="h5"
                                    >
                                      {apiDataResponseEle?.supervisor}
                                    </Text>
                                  </Row>
                                  <Row className="items-center justify-start lg:p-[11px] xl:p-[3px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                                    <Text as="h5" variant="h5">
                                      {apiDataResponseEle?.location}
                                    </Text>
                                  </Row>
                                  <Row className="items-center justify-end pr-[1px] py-[1px] w-[10%]">
                                    <Switch
                                      value={apiDataResponseEle?.is_active}
                                      className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                                      // onChange={(e) =>
                                      //   handleSwitchChange(
                                      //     e,
                                      //     apiDataResponseEle?.id
                                      //   )
                                      // }
                                      disabled
                                    />
                                  </Row>
                                </Row>
                              </React.Fragment>
                            );
                          })}
                        </List>
                      ) : (
                        <Text
                          className="font-medium text-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          No data Found
                        </Text>
                      )}
                    </div>
                    {employeeCount ? (
                      <Row className="items-center justify-between w-[auto]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Showing
                        </Text>
                        <SelectBox
                          className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] w-[auto]"
                          onChange={(e) => {
                            setPage(1);
                            setrowsPerPage(e);
                          }}
                          placeholder={rowsPerPage}
                          value={rowsPerPage}
                          options={rowsPerPageOption}
                          name="rowsPerPage"
                          isSearchable={false}
                          isMulti={false}
                        ></SelectBox>
                        <TableFooter
                          range={tableRange}
                          slice={slice}
                          setPage={setPage}
                          page={page}
                        />
                      </Row>
                    ) : (
                      ""
                    )}
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
        )}
      </Column>
      {isOpenFilterModal ? (
        <FilterModal
          filters={(e) => setfilterData(e)}
          page={(e) => setPage(e)}
          isOpen={isOpenFilterModal}
          onRequestClose={handleCloseFilterModal}
        />
      ) : null}
      <ToastContainer />
    </>
  );
};

export default EmployeeListPage;
