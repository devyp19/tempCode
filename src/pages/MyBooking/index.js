import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Stack,
  Line,
  SelectBox,
} from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";

const MyBookingPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[30px] xl:pb-[38px] 2xl:pb-[43px] 3xl:pb-[52px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar2 className="w-[15%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Manage your Space
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius8 w-[96%]">
              <Row className="items-center justify-between rounded-radius8 w-[99%]">
                <Text
                  className="font-medium text-black_901 w-[auto]"
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
              <Column className="justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[98%]">
                <Row className="items-center justify-between lg:mr-[26px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[45px] w-[97%]">
                  <Stack className="backdrop-opacity-[0.5] bg-indigo_700 blur-[16.00px] lg:h-[214px] xl:h-[268px] 2xl:h-[301px] 3xl:h-[362px] rounded-radius8 w-[48%]">
                    <Img
                      src="images/img_projecttitle2.png"
                      className="projecttitleTwo"
                      alt="projecttitleTwo"
                    />
                  </Stack>
                  <Column className="pr-[3px] py-[3px] rounded-radius4 w-[48%]">
                    <Row className="items-center mr-[auto] mt-[3px] w-[45%]">
                      <Text className="SpaceName" as="h4" variant="h4">
                        Space Name :
                      </Text>
                      <Text className="OrganizationNa" as="h4" variant="h4">
                        Organization Name
                      </Text>
                    </Row>
                    <Row className="items-start ml-[3px] mr-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[85%]">
                      <Text className="language" as="h4" variant="h4">
                        Location :
                      </Text>
                      <Text
                        className="test_4517Washington"
                        as="h4"
                        variant="h4"
                      >
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </Text>
                    </Row>
                    <Row className="items-center mr-[auto] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[40%]">
                      <Text className="language" as="h4" variant="h4">
                        Capacity :
                      </Text>
                      <Text
                        className="test_4517Washington"
                        as="h4"
                        variant="h4"
                      >
                        1000 Employee
                      </Text>
                    </Row>
                    <Row className="items-center mr-[auto] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius4 w-[91%]">
                      <Text
                        className="font-medium text-gray_801 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Resource :
                      </Text>
                      <Row className="items-center justify-between lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius4 w-[77%]">
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[15%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo6001_2"
                        >
                          Table
                        </Button>
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[15%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo6001_2"
                        >
                          Chair
                        </Button>
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[18%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo6001_2"
                        >
                          Laptop
                        </Button>
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[22%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo6001_2"
                        >
                          Keyboard
                        </Button>
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[17%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo6001_2"
                        >
                          Mouse
                        </Button>
                      </Row>
                    </Row>
                    <Row className="items-start ml-[3px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[97%]">
                      <Text
                        className="font-medium text-gray_801 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Description :
                      </Text>
                      <Text className="description" as="h4" variant="h4">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-end ml-[auto] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] rounded-radius8 w-[35%]">
                  <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[30%]">
                    Book Space
                  </Button>
                  <Button className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[30%]">
                    View Booking
                  </Button>
                  <Button className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[30%]">
                    My Booking
                  </Button>
                </Row>
              </Column>
              <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                <Column className="justify-start pt-[1px] w-[100%]">
                  <Row className="items-end w-[9%]">
                    <Img
                      src="images/img_objectscolumn_1.svg"
                      className="objectscolumn_Four"
                      alt="objectscolumn One"
                    />
                    <Text
                      className="rowobjectscolumn_four"
                      as="h4"
                      variant="h4"
                    >
                      My Booking
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
                </Column>
                <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[50%]">
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    shape="icbRoundedBorder4"
                    size="mdIcn"
                    variant="icbOutlineBluegray5003d"
                  >
                    <Img
                      src="images/img_volume_42X42.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="volume"
                    />
                  </Button>
                  <SelectBox
                    className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[43%]"
                    placeholderClassName=""
                    name="columnselectone"
                    placeholder=""
                    isSearchable={true}
                    isMulti={false}
                  ></SelectBox>
                  <Row className="items-center justify-between lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[44%]">
                    <Column className="bg-bluegray_50 items-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[48%]">
                      <Row className="items-center justify-between ml-[auto] mr-[4px] w-[88%]">
                        <Text
                          className="columnclick_to_upload"
                          as="h5"
                          variant="h5"
                        >
                          --From--
                        </Text>
                        <Img
                          src="images/img_clock_24X24.svg"
                          className="settings_One"
                          alt="clock"
                        />
                      </Row>
                    </Column>
                    <Column className="bg-bluegray_50 items-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[48%]">
                      <Row className="items-center justify-between ml-[auto] mr-[4px] w-[88%]">
                        <Text
                          className="columnclick_to_upload"
                          as="h5"
                          variant="h5"
                        >
                          --To--
                        </Text>
                        <Img
                          src="images/img_clock_24X24.svg"
                          className="settings_One"
                          alt="clock One"
                        />
                      </Row>
                    </Column>
                  </Row>
                </Row>
                <div className="bg-white_A700 border border-gray_300 border-solid lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Row className="bg-gray_101 border border-gray_300 border-solid items-center w-[100%]">
                    <Row className="items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[26%]">
                      <Text className="rowbookingid1" as="h5" variant="h5">
                        Booking Id
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] xl:mr-[119px] 2xl:mr-[134px] 3xl:mr-[161px] lg:mr-[95px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="arrowup One"
                      />
                    </Row>
                    <Row className="items-center justify-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[20%]">
                      <Text className="rowtitle1" as="h5" variant="h5">
                        Title
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] lg:mr-[102px] xl:mr-[128px] 2xl:mr-[144px] 3xl:mr-[173px] my-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="arrowup Two"
                      />
                    </Row>
                    <Row className="items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[13%]">
                      <Text className="rowdate" as="h5" variant="h5">
                        Date
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="arrowup Three"
                      />
                    </Row>
                    <Row className="items-center justify-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[17%]">
                      <Text className="rowtime" as="h5" variant="h5">
                        Time
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] 3xl:mr-[118px] lg:mr-[70px] xl:mr-[88px] 2xl:mr-[99px] my-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="arrowup Four"
                      />
                    </Row>
                    <Row className="items-center p-[3px] w-[13%]">
                      <Text className="rowmembers" as="h5" variant="h5">
                        Members
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] ml-[4px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="arrowup Five"
                      />
                    </Row>
                    <Row className="items-center justify-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[10%]">
                      <Text className="rowaction" as="h5" variant="h5">
                        Action
                      </Text>
                    </Row>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Row className="items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[26%]">
                        <Text className="rowbook1231" as="h5" variant="h5">
                          BOOK123
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[20%]">
                        <Text
                          className="rowlesliealexande1"
                          as="h5"
                          variant="h5"
                        >
                          Leslie Alexander
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text className="rowdate_one" as="h5" variant="h5">
                          12/12/2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[17%]">
                        <Text className="rowtime_one" as="h5" variant="h5">
                          09:00 AM - 06:00 PM
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text
                          className="rowmemberscounter"
                          as="h5"
                          variant="h5"
                        >
                          100 Members
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[10%]">
                        <Row className="items-center justify-between lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] rounded-radius8 w-[85%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_trash_1.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[26%]">
                        <Text className="rowbook1231" as="h5" variant="h5">
                          BOOK123
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[20%]">
                        <Text
                          className="rowlesliealexande1"
                          as="h5"
                          variant="h5"
                        >
                          Leslie Alexander
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text className="rowdate_one" as="h5" variant="h5">
                          12/12/2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[17%]">
                        <Text className="rowtime_one" as="h5" variant="h5">
                          09:00 AM - 06:00 PM
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text
                          className="rowmemberscounter"
                          as="h5"
                          variant="h5"
                        >
                          100 Members
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[10%]">
                        <Row className="items-center justify-between lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] rounded-radius8 w-[85%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit One"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_trash_1.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash One"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[26%]">
                        <Text className="rowbook1231" as="h5" variant="h5">
                          BOOK123
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[20%]">
                        <Text
                          className="rowlesliealexande1"
                          as="h5"
                          variant="h5"
                        >
                          Leslie Alexander
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text className="rowdate_one" as="h5" variant="h5">
                          12/12/2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[17%]">
                        <Text className="rowtime_one" as="h5" variant="h5">
                          09:00 AM - 06:00 PM
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text
                          className="rowmemberscounter"
                          as="h5"
                          variant="h5"
                        >
                          100 Members
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[10%]">
                        <Row className="items-center justify-between lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] rounded-radius8 w-[85%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit Two"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_trash_1.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash Two"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[26%]">
                        <Text className="rowbook1231" as="h5" variant="h5">
                          BOOK123
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[20%]">
                        <Text
                          className="rowlesliealexande1"
                          as="h5"
                          variant="h5"
                        >
                          Leslie Alexander
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text className="rowdate_one" as="h5" variant="h5">
                          12/12/2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[17%]">
                        <Text className="rowtime_one" as="h5" variant="h5">
                          09:00 AM - 06:00 PM
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text
                          className="rowmemberscounter"
                          as="h5"
                          variant="h5"
                        >
                          100 Members
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[10%]">
                        <Row className="items-center justify-between lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] rounded-radius8 w-[85%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit Three"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_trash_1.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash Three"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[26%]">
                        <Text className="rowbook1231" as="h5" variant="h5">
                          BOOK123
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[20%]">
                        <Text
                          className="rowlesliealexande1"
                          as="h5"
                          variant="h5"
                        >
                          Leslie Alexander
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text className="rowdate_one" as="h5" variant="h5">
                          12/12/2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[17%]">
                        <Text className="rowtime_one" as="h5" variant="h5">
                          09:00 AM - 06:00 PM
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[13%]">
                        <Text
                          className="rowmemberscounter"
                          as="h5"
                          variant="h5"
                        >
                          100 Members
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] lg:pr-[13px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[10%]">
                        <Row className="items-center justify-between lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] rounded-radius8 w-[85%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_edit_24X24.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit Four"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbOutlineIndigo600"
                          >
                            <Img
                              src="images/img_trash_1.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash Four"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Row>
                  </Column>
                </div>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MyBookingPage;
