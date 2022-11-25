import React from "react";

import {
  Stack,
  Row,
  Text,
  Column,
  Button,
  Img,
  Input,
  List,
  Line,
  Switch,
  CheckBox,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const EmployeeListFilterPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-gray_100 font-inter 2xl:h-[1096px] 3xl:h-[1314px] lg:h-[779px] xl:h-[974px] mx-[auto] w-[100%]">
        <Row className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] right-[0] top-[0] w-[85%]">
          <Text className="CreateEmployee" as="h3" variant="h3">
            Employee Details
          </Text>
          <Text className="TopBar" variant="body2">
            AP
          </Text>
        </Row>
        <Sidebar className="absolute left-[0] top-[0] w-[18%]" />
        <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[3%] items-center justify-start xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] right-[2%] rounded-radius8 w-[82%]">
          <Row className="items-center w-[97%]">
            <Row className="items-center justify-between w-[15%]">
              <Button
                className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] items-center justify-center lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[37px]"
                shape="icbRoundedBorder4"
                size="mdIcn"
                variant="icbOutlineBluegray5003d"
              >
                <Img
                  src="images/img_volume_42X42.svg"
                  className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                  alt="volume One"
                />
              </Button>
              <Row className="items-end w-[67%]">
                <Img
                  src="images/img_cut.svg"
                  className="settings_One"
                  alt="cut"
                />
                <Text className="EmployeeCounts" as="h5" variant="h5">
                  125 Employees
                </Text>
              </Row>
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
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                wrapClassName="2xl:ml-[12px] 3xl:ml-[14px] flex lg:ml-[8px] w-[81%] xl:ml-[10px]"
                name="Group3997"
                placeholder="Search Employee..."
                prefix={
                  <Img
                    src="images/img_search_16X16.svg"
                    className="cursor-pointer ml-[2px] lg:w-[8px] lg:h-[9px] lg:mr-[9px] xl:w-[10px] xl:h-[11px] xl:mr-[12px] 2xl:w-[12px] 2xl:h-[13px] 2xl:mr-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[16px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#757e8a"
                      className="cursor-pointer lg:w-[8px] lg:h-[9px] lg:ml-[5px] lg:mr-[11px] xl:w-[10px] xl:h-[11px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                      onClick={() => setInputvalue("")}
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
            >
              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                New Employee
              </div>
            </Button>
          </Row>
          <Column className="items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <div className="w-[100%]">
                <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] w-[100%]">
                  <Row className="items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[7%]">
                    <Text className="row" as="h5" variant="h5">
                      Image
                    </Text>
                  </Row>
                  <Row className="items-start justify-center lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[14%]">
                    <Text className="rowemployeeid" as="h5" variant="h5">
                      Employee Id
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mb-[3px] ml-[3px] lg:mr-[42px] xl:mr-[53px] 2xl:mr-[60px] 3xl:mr-[72px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup"
                    />
                  </Row>
                  <Row className="items-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[13%]">
                    <Text className="rowfullname" as="h5" variant="h5">
                      Full Name
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] ml-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup One"
                    />
                  </Row>
                  <Row className="items-start justify-center lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[8%]">
                    <Text className="rowgender" as="h5" variant="h5">
                      Gender
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mb-[3px] ml-[4px] lg:mr-[17px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup Two"
                    />
                  </Row>
                  <Row className="items-start justify-center lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[13%]">
                    <Text className="rowemployeeid" as="h5" variant="h5">
                      Department
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mb-[3px] ml-[3px] lg:mr-[33px] xl:mr-[42px] 2xl:mr-[47px] 3xl:mr-[56px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup Three"
                    />
                  </Row>
                  <Row className="items-start justify-center xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[10%]">
                    <Text className="rowjobtitle" as="h5" variant="h5">
                      Job Title
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] lg:mr-[28px] xl:mr-[35px] 2xl:mr-[39px] 3xl:mr-[47px] my-[2px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup Four"
                    />
                  </Row>
                  <Row className="items-start justify-center xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[10%]">
                    <Text className="rowjobtitle" as="h5" variant="h5">
                      Position
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="arrowup_Five"
                      alt="arrowup Five"
                    />
                  </Row>
                  <Row className="items-start justify-center xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[10%]">
                    <Text className="rowjobtitle" as="h5" variant="h5">
                      Location
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="arrowup_Five"
                      alt="arrowup Six"
                    />
                  </Row>
                  <Row className="items-center justify-center lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[10%]">
                    <Text className="rowemployeeid" as="h5" variant="h5">
                      Emp. Status
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mb-[3px] ml-[3px] lg:mr-[11px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup Seven"
                    />
                  </Row>
                  <Row className="items-center justify-center xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] w-[3%]">
                    <Text className="rowjobtitle" as="h5" variant="h5">
                      Action
                    </Text>
                  </Row>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mx-[auto] w-[97%]"
                  orientation="vertical"
                >
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen One"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Two"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Three"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Four"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Five"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Six"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Seven"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Eight"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                  <Row className="columnellipsethirteen">
                    <Row className="items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[7%]">
                      <Img
                        src="images/img_ellipse13.png"
                        className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="EllipseThirteen Nine"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[14%]">
                      <Text className="rowemp001" as="h5" variant="h5">
                        EMP001
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                      <Text className="rowlesliealexande" as="h5" variant="h5">
                        Leslie Alexander
                      </Text>
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]">
                      <Text className="rowgender_one" as="h5" variant="h5">
                        Female
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[13%]">
                      <Text className="rowdesign" as="h5" variant="h5">
                        Design
                      </Text>
                    </Row>
                    <Row className="items-center p-[1px] w-[10%]">
                      <Text className="rowuidesigner" as="h5" variant="h5">
                        UI Designer
                      </Text>
                    </Row>
                    <Row className="items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowjunior" as="h5" variant="h5">
                        Junior
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowsurat" as="h5" variant="h5">
                        Surat
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[10%]">
                      <Text className="rowfulltime" as="h5" variant="h5">
                        Full-Time
                      </Text>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] py-[1px] w-[3%]">
                      <Switch
                        value={true}
                        className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      />
                    </Row>
                  </Row>
                </List>
              </div>
              <Row className="items-end justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[97%]">
                <Text className="rowshowing120" as="h5" variant="h5">
                  Showing 1-20
                </Text>
                <Row className="items-center justify-between w-[20%]">
                  <Button
                    className="flex items-center justify-center settings"
                    shape="icbRoundedBorder4"
                    size="smIcn"
                    variant="icbFillIndigo100"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="arrowleft"
                    />
                  </Button>
                  <Row className="items-center justify-center lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] rounded-radius4 w-[63%]">
                    <Button
                      className="font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center settings"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineIndigo600"
                    >
                      1
                    </Button>
                    <Column className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius352 w-[4%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius375 w-[4%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius396 w-[4%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        4
                      </Text>
                    </Column>
                    <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius4 w-[5%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        ...
                      </Text>
                    </Column>
                    <Column className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius4 w-[11%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10
                      </Text>
                    </Column>
                  </Row>
                  <Button
                    className="flex items-center justify-center rotate-[180deg] settings"
                    shape="icbRoundedBorder4"
                    size="smIcn"
                    variant="icbFillIndigo100"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="arrowleft One"
                    />
                  </Button>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="absolute bg-black_900_99 justify-start xl:p-[104px] 2xl:p-[117px] 3xl:p-[141px] lg:p-[83px] w-[100%]">
          <Column className="bg-white_A700 justify-start lg:mb-[257px] xl:mb-[322px] 2xl:mb-[362px] 3xl:mb-[434px] lg:ml-[109px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[184px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[18%]">
            <Row className="items-center justify-between w-[100%]">
              <Row className="items-end w-[64%]">
                <Img
                  src="images/img_cut.svg"
                  className="settings_One"
                  alt="cut One"
                />
                <Text className="EmployeeCounts" as="h5" variant="h5">
                  125 Employees
                </Text>
              </Row>
              <Img
                src="images/img_arrowright_24X24.svg"
                className="settings_One"
                alt="arrowright One"
              />
            </Row>
            <Row className="items-end justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text className="rowdepartments" as="h5" variant="h5">
                Departments
              </Text>
              <Img
                src="images/img_arrowup_24X24.svg"
                className="settings_One"
                alt="arrowup Eight"
              />
            </Row>
            <CheckBox
              className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              name="IT"
              label="IT"
              shape="RoundedBorder2"
              variant="OutlineBluegray101"
            ></CheckBox>
            <CheckBox
              className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              name="HR"
              label="HR"
              shape="RoundedBorder2"
              variant="OutlineBluegray101"
            ></CheckBox>
            <CheckBox
              className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              name="Sales"
              label="Sales"
              shape="RoundedBorder2"
              variant="OutlineBluegray101"
            ></CheckBox>
            <CheckBox
              className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_402"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              name="Finance"
              label="Finance"
              shape="RoundedBorder2"
              variant="OutlineBluegray101"
            ></CheckBox>
            <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Location
              </Text>
              <Img
                src="images/img_arrowup_24X24.svg"
                className="settings_One"
                alt="arrowup Nine"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Job Title
              </Text>
              <Img
                src="images/img_arrowup_24X24.svg"
                className="settings_One"
                alt="arrowup Ten"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Position
              </Text>
              <Img
                src="images/img_arrowup_24X24.svg"
                className="settings_One"
                alt="arrowup Eleven"
              />
            </Row>
            <Row className="items-end justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text className="rowdepartments" as="h5" variant="h5">
                Employment Status
              </Text>
              <Img
                src="images/img_arrowup_24X24.svg"
                className="settings_One"
                alt="arrowup Twelve"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Gender
              </Text>
              <Img
                src="images/img_arrowup_24X24.svg"
                className="settings_One"
                alt="arrowup Thirteen"
              />
            </Row>
            <Row className="items-start justify-between lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
              <Text
                className="font-medium mt-[3px] text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Active
              </Text>
              <Switch value={true} className="w-[18%]" />
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default EmployeeListFilterPage;
