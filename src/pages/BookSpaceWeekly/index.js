import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Stack,
  Line,
  Input,
  List,
  SelectBox,
  CheckBox,
} from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";

const BookSpaceWeeklyPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[26px] xl:pb-[33px] 2xl:pb-[37px] 3xl:pb-[45px] w-[100%]">
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
              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                <Column className="justify-start pt-[1px] w-[100%]">
                  <Row className="items-end w-[10%]">
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
                      New Booking
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
                </Column>
                <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[80%]">
                  <Column className="items-center justify-start w-[46%]">
                    <Row className="items-center justify-between rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Booking Type:
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 FirstName"
                        wrapClassName="w-[59%]"
                        name="Group3997"
                        placeholder="Text"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text className="rowaddress_one" as="h5" variant="h5">
                        Date & Time:
                      </Text>
                      <Column className="items-center justify-start w-[59%]">
                        <Input
                          className="placeholder:text-gray_500 Group4000"
                          wrapClassName="flex w-[100%]"
                          name="Group3999"
                          placeholder="--Select date--"
                          suffix={
                            <Img
                              src="images/img_calendar.svg"
                              className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[18px] xl:w-[16px] xl:h-[17px] xl:ml-[23px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[26px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[31px] my-[auto]"
                              alt="calendar"
                            />
                          }
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                          <Column className="bg-bluegray_50 items-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[49%]">
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
                          <Column className="bg-bluegray_50 items-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[49%]">
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
                      </Column>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listdepartment">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Spaces:
                        </Text>
                        <Column className="bg-bluegray_50 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[59%]">
                          <Row className="items-end justify-between w-[95%]">
                            <Text
                              className="rowcurrentspaces"
                              as="h5"
                              variant="h5"
                            >
                              Current Spaces
                            </Text>
                            <Img
                              src="images/img_arrowup_24X24.svg"
                              className="settings_One"
                              alt="arrowup"
                            />
                          </Row>
                        </Column>
                      </Row>
                      <Line className="self-center w-[100%] justify-between items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8" />
                      <Row className="listdepartment">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Host:
                        </Text>
                        <Column className="bg-bluegray_50 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[59%]">
                          <Row className="items-end justify-between w-[95%]">
                            <Text
                              className="rowcurrentspaces"
                              as="h5"
                              variant="h5"
                            >
                              Current Spaces
                            </Text>
                            <Img
                              src="images/img_arrowup_24X24.svg"
                              className="settings_One"
                              alt="arrowup One"
                            />
                          </Row>
                        </Column>
                      </Row>
                      <Line className="self-center w-[100%] justify-between items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8" />
                      <Row className="listdepartment">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Invites:
                        </Text>
                        <Column className="bg-bluegray_50 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[59%]">
                          <Row className="items-end justify-between w-[95%]">
                            <Text
                              className="rowcurrentspaces"
                              as="h5"
                              variant="h5"
                            >
                              Current Spaces
                            </Text>
                            <Img
                              src="images/img_arrowup_24X24.svg"
                              className="settings_One"
                              alt="arrowup Two"
                            />
                          </Row>
                        </Column>
                      </Row>
                    </List>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Booking Title:
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 FirstName"
                        wrapClassName="w-[59%]"
                        name="Group3997 One"
                        placeholder="Text"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                  </Column>
                  <Column className="justify-start lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] mt-[1px] w-[46%]">
                    <Row className="items-center w-[77%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Repeat
                      </Text>
                      <Column className="bg-bluegray_50 items-center lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[71%]">
                        <Row className="items-end justify-between w-[94%]">
                          <Text
                            className="rowcurrentspaces"
                            as="h5"
                            variant="h5"
                          >
                            Weekly
                          </Text>
                          <Img
                            src="images/img_arrowup_24X24.svg"
                            className="settings_One"
                            alt="arrowup Three"
                          />
                        </Row>
                      </Column>
                    </Row>
                    <Column className="justify-end 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[78%]">
                      <Column className="justify-start w-[95%]">
                        <Text
                          className="font-medium text-indigo_600 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Weekly Rules*
                        </Text>
                        <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Img
                            src="images/img_airplane.svg"
                            className="airplane_Three"
                            alt="airplane"
                          />
                          <Text
                            className="column2filltheinf"
                            as="h5"
                            variant="h5"
                          >
                            Every
                          </Text>
                          <Button
                            className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 text-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                            variant="FillBluegray50"
                          >
                            1
                          </Button>
                          <Text
                            className="column2filltheinf"
                            as="h5"
                            variant="h5"
                          >
                            Week(s)
                          </Text>
                          <Column className="bg-bluegray_50 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[49%]">
                            <Row className="items-center justify-between w-[87%]">
                              <Text
                                className="column2filltheinf"
                                as="h5"
                                variant="h5"
                              >
                                Mon
                              </Text>
                              <Img
                                src="images/img_arrowup_24X24.svg"
                                className="settings_One"
                                alt="arrowup Four"
                              />
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                        <Text
                          className="font-medium text-indigo_600 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          End*
                        </Text>
                        <Column className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                          <Row className="items-center w-[100%]">
                            <Img
                              src="images/img_airplane.svg"
                              className="airplane_Three"
                              alt="airplane One"
                            />
                            <Text className="EndbyFor" as="h5" variant="h5">
                              End Day:
                            </Text>
                            <SelectBox
                              className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[71%]"
                              placeholderClassName=""
                              name="columnselectone"
                              placeholder=""
                              isSearchable={true}
                              isMulti={false}
                            ></SelectBox>
                          </Row>
                          <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[62%]">
                            <Img
                              src="images/img_airplane.svg"
                              className="airplane_Three"
                              alt="airplane Two"
                            />
                            <Text className="EndbyFor" as="h5" variant="h5">
                              End by For:
                            </Text>
                            <Button
                              className="font-normal lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_500 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                              variant="FillBluegray50"
                            >
                              0
                            </Button>
                            <Text
                              className="font-medium 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Occurrence
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <CheckBox
                  className="font-medium lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-black_900"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  name="SendInvitation"
                  label="Send Invitation to Join via Email."
                  shape="RoundedBorder2"
                  variant="FillIndigo200"
                ></CheckBox>
                <Row className="items-center justify-center lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] rounded-radius8 w-[24%]">
                  <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[47%]">
                    Create
                  </Button>
                  <Button
                    className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[47%]"
                    variant="OutlineIndigo600"
                  >
                    Cancel Booking
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default BookSpaceWeeklyPage;
