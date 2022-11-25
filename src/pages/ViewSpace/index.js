import React from "react";

import { Column, Row, Text, Button, Img, Stack } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";

const ViewSpacePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar1 className="w-[15%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Manage your Space
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-end justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius8 w-[96%]">
              <Row className="items-center justify-between 2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[9px] rounded-radius8 w-[98%]">
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
              <Row className="items-center justify-between lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[94%]">
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
                  <Row className="items-start ml-[3px] mr-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[85%]">
                    <Text className="language" as="h4" variant="h4">
                      Location :
                    </Text>
                    <Text className="test_4517Washington" as="h4" variant="h4">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </Row>
                  <Row className="items-center mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[40%]">
                    <Text className="language" as="h4" variant="h4">
                      Capacity :
                    </Text>
                    <Text className="test_4517Washington" as="h4" variant="h4">
                      1000 Employee
                    </Text>
                  </Row>
                  <Row className="items-center mr-[auto] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rounded-radius4 w-[91%]">
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
                  <Row className="items-start ml-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
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
              <Row className="items-center justify-end lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] ml-[auto] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] rounded-radius8 w-[34%]">
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
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ViewSpacePage;
