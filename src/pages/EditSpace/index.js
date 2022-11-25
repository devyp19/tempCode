import React from "react";

import {
  Stack,
  Row,
  Text,
  Column,
  Button,
  Img,
  List,
  Input,
  TextArea,
  Line,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";

const EditSpacePage = () => {
  return (
    <>
      <Stack className="bg-gray_100 font-inter 3xl:h-[1096px] lg:h-[650px] xl:h-[812px] 2xl:h-[914px] mx-[auto] w-[100%]">
        <Row className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] right-[0] top-[0] w-[85%]">
          <Text className="CreateEmployee" as="h3" variant="h3">
            Manage your Space
          </Text>
          <Text className="TopBar" variant="body2">
            AP
          </Text>
        </Row>
        <Sidebar className="w-[15%]" />
        <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[3%] items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] right-[2%] rounded-radius8 w-[82%]">
          <Row className="items-center justify-between rounded-radius8 w-[98%]">
            <Text
              className="font-medium text-black_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              My Space
            </Text>
            <Button
              className="flex items-center justify-center text-center w-[10%]"
              leftIcon={
                <Img
                  src="images/img_plus.svg"
                  className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                  alt="plus"
                />
              }
            >
              <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                Create Space
              </div>
            </Button>
          </Row>
          <List
            className="gap-[0] lg:mb-[35px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] min-h-[auto] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[96%]"
            orientation="vertical"
          >
            <Row className="listoverflowmenu">
              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs1 w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] items-center justify-start rounded-radius8 w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-end justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="question"
                        alt="overflowmenu"
                      />
                      <Column className="bg-white_A700 items-center justify-start lg:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs1 w-[48%]">
                        <Column className="justify-start w-[100%]">
                          <Row className="items-end w-[84%]">
                            <Img
                              src="images/img_eyealt.svg"
                              className="question"
                              alt="eyealt"
                            />
                            <Text className="roweyealt" as="h5" variant="h5">
                              View Spase
                            </Text>
                          </Row>
                          <Row className="items-end lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[79%]">
                            <Img
                              src="images/img_edit.svg"
                              className="question"
                              alt="edit"
                            />
                            <Text className="roweyealt" as="h5" variant="h5">
                              Edit Spase
                            </Text>
                          </Row>
                          <Row className="items-end lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                            <Img
                              src="images/img_trash.svg"
                              className="question"
                              alt="trash"
                            />
                            <Text className="roweyealt" as="h5" variant="h5">
                              Remove Space
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="items-end justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[97%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="question"
                      alt="location"
                    />
                    <Text className="rowlocation" as="h5" variant="h5">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text className="timeZone" as="h6" variant="h6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs1 w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[134px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu_One"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="items-end justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[97%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="question"
                      alt="location One"
                    />
                    <Text className="rowlocation" as="h5" variant="h5">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text className="timeZone" as="h6" variant="h6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs1 w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[134px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu_One"
                        alt="overflowmenu Two"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="items-end justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[97%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="question"
                      alt="location Two"
                    />
                    <Text className="rowlocation" as="h5" variant="h5">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text className="timeZone" as="h6" variant="h6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="listoverflowmenu">
              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs1 w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[134px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu_One"
                        alt="overflowmenu One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="items-end justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[97%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="question"
                      alt="location One"
                    />
                    <Text className="rowlocation" as="h5" variant="h5">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text className="timeZone" as="h6" variant="h6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs1 w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[134px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu_One"
                        alt="overflowmenu One One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="items-end justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[97%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="question"
                      alt="location One One"
                    />
                    <Text className="rowlocation" as="h5" variant="h5">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text className="timeZone" as="h6" variant="h6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs1 w-[32%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="backdrop-opacity-[0.5] bg-indigo_700 blur-[4.00px] items-center justify-start rounded-radius8 w-[100%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[134px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group4135.png')",
                      }}
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu_One"
                        alt="overflowmenu Two One"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Organization Name
                  </Text>
                  <Row className="items-end justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[97%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="question"
                      alt="location Two One"
                    />
                    <Text className="rowlocation" as="h5" variant="h5">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Text className="timeZone" as="h6" variant="h6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis...
                  </Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Column>
        <Column className="absolute bg-black_900_99 items-center justify-start lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] w-[100%]">
          <Column className="bg-white_A700 items-center justify-start lg:pb-[27px] xl:pb-[34px] 2xl:pb-[39px] 3xl:pb-[46px] rounded-radius12 shadow-bs1 w-[36%]">
            <Column className="bg-gray_101 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
              <Row className="items-end justify-between mt-[2px] w-[95%]">
                <Text className="rowuploadfile" as="h5" variant="h5">
                  Edit Space
                </Text>
                <Img
                  src="images/img_arrowright_gray_900.svg"
                  className="arrowright1"
                  alt="arrowright One"
                />
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]">
              <Column className="justify-start w-[84%]">
                <Column className="items-end justify-start xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] lg:pl-[9px] w-[100%]">
                  <Row className="items-center justify-between rounded-radius8 w-[100%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Space Name:
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 FirstName2"
                      wrapClassName="w-[76%]"
                      type="text"
                      name="EmailId"
                      placeholder="Enter Name"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBluegray50"
                    ></Input>
                  </Row>
                  <Row className="items-start justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                    <Text className="rowmessage" as="h5" variant="h5">
                      Description:
                    </Text>
                    <TextArea
                      className="placeholder:text-gray_500 Group3999"
                      name="EmailId One"
                      placeholder="Write here.."
                    ></TextArea>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[94%]">
                    <Row className="items-center justify-between rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Loaction:
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 FirstName2"
                        wrapClassName="w-[81%]"
                        name="EmailId Two"
                        placeholder="Enter Location"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Capacity:
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 FirstName2"
                        wrapClassName="w-[81%]"
                        name="EmailId Three"
                        placeholder="Capacity to accomodate"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Location:
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 FirstName2"
                        wrapClassName="w-[81%]"
                        name="EmailId Four"
                        placeholder="Add Location"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                  </Column>
                </Column>
                <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[54%]">
                  <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[46%]">
                    Edit
                  </Button>
                  <Button
                    className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[46%]"
                    variant="OutlineIndigo600"
                  >
                    Reset
                  </Button>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Line className="bg-bluegray_102 h-[1px] w-[100%]" />
                <Column className="justify-start lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] w-[84%]">
                  <Row className="items-start justify-between rounded-radius6 w-[100%]">
                    <Text className="rowrewind" as="h5" variant="h5">
                      Upload Image:
                    </Text>
                    <Column className="bg-bluegray_50 items-center justify-start outline outline-[2px] outline-indigo_600 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius6 w-[75%]">
                      <Img
                        src="images/img_rectangle501.png"
                        className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius4 w-[41%]"
                        alt="Rectangle501"
                      />
                      <Row className="items-center justify-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[75%]">
                        <Button
                          className="flex items-center justify-center text-center w-[58%]"
                          leftIcon={
                            <Img
                              src="images/img_music.svg"
                              className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[5px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[7px]"
                              alt="music"
                            />
                          }
                          size="sm"
                          variant="OutlineIndigo600"
                        >
                          <div className="bg-transparent font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                            Click to upload
                          </div>
                        </Button>
                        <Text
                          className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rowselectone"
                          as="h5"
                          variant="h5"
                        >
                          No file chosen
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-center justify-end ml-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius8 w-[55%]">
                    <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[46%]">
                      Upload
                    </Button>
                    <Button
                      className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[46%]"
                      variant="OutlineIndigo600"
                    >
                      Reset
                    </Button>
                  </Row>
                </Column>
                <Line className="bg-bluegray_102 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                <Column className="justify-start lg:ml-[103px] xl:ml-[129px] 2xl:ml-[145px] 3xl:ml-[174px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] pt-[4px] rounded-radius8 w-[62%]">
                  <Column className="justify-start rounded-radius8 w-[100%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Select available resources:
                    </Text>
                    <Column className="bg-bluegray_50 justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius8 w-[100%]">
                      <Row className="items-center rounded-radius8 w-[42%]">
                        <Button
                          className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[46%]"
                          size="sm"
                          variant="OutlineBluegray102"
                        >
                          ABC
                        </Button>
                        <Button
                          className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[45%]"
                          size="sm"
                          variant="OutlineBluegray102"
                        >
                          PQR
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Button className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[34%]">
                    Update
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default EditSpacePage;
