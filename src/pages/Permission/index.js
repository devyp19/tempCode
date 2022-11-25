import React from "react";

import { Column, Row, Text, Img, Button, Input, List } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";

const PermissionPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar1 className="w-[15%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Documents
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] rounded-radius8 w-[96%]">
              <Column className="items-end justify-start lg:mb-[42px] xl:mb-[53px] 2xl:mb-[60px] 3xl:mb-[72px] w-[100%]">
                <Row className="items-center w-[96%]">
                  <Row className="items-center justify-between rounded-radius4 w-[25%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Sort By
                    </Text>
                    <Row className="bg-bluegray_50 items-center justify-between lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius4 w-[81%]">
                      <Column className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[33%]">
                        <Text
                          className="columnselectone_one"
                          as="h6"
                          variant="h6"
                        >
                          --Select one--
                        </Text>
                      </Column>
                      <Img
                        src="images/img_arrowup_24X24.svg"
                        className="arrowup8"
                        alt="arrowup"
                      />
                    </Row>
                  </Row>
                  <Button
                    className="2xl:ml-[520px] 3xl:ml-[624px] flex items-center justify-center lg:ml-[370px] text-center w-[10%] xl:ml-[463px]"
                    leftIcon={
                      <Img
                        src="images/img_plus.svg"
                        className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                        alt="plus"
                      />
                    }
                  >
                    <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                      Create Folder
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[18px] 3xl:ml-[21px] flex items-center justify-center lg:ml-[12px] text-center w-[9%] xl:ml-[16px]"
                    leftIcon={
                      <Img
                        src="images/img_download.svg"
                        className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                        alt="download"
                      />
                    }
                  >
                    <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                      Download
                    </div>
                  </Button>
                  <Button
                    className="2xl:ml-[18px] 3xl:ml-[21px] flex items-center justify-center lg:ml-[12px] text-center w-[7%] xl:ml-[16px]"
                    leftIcon={
                      <Img
                        src="images/img_upload_24X24.svg"
                        className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                        alt="upload"
                      />
                    }
                    variant="FillDeeporangeA200"
                  >
                    <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                      Upload
                    </div>
                  </Button>
                </Row>
                <Input
                  className="placeholder:text-black_900 GroupThirtyOne"
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[100%] xl:mt-[10px]"
                  name="GroupSixteen"
                  placeholder="Permission"
                  prefix={
                    <Img
                      src="images/img_arrowleft_24X24.svg"
                      className="lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[7px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[8px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[9px] 3xl:mr-[10px] my-[auto]"
                      alt="arrow_left"
                    />
                  }
                  size="3xl"
                  variant="OutlineGray300"
                ></Input>
                <Button
                  className="2xl:mt-[22px] 3xl:mt-[27px] flex items-center justify-center lg:mt-[16px] text-center w-[11%] xl:mt-[20px]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                      alt="plus"
                    />
                  }
                >
                  <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                    Add Permission
                  </div>
                </Button>
                <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[95%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                      <Row className="bg-white_A700 items-start justify-between lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs1 w-[100%]">
                        <Column className="justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] py-[2px] w-[18%]">
                          <Row className="items-center mr-[auto] mt-[1px] w-[66%]">
                            <Text className="Name" as="h5" variant="h5">
                              Name :
                            </Text>
                            <Text className="AlexDenver" as="h5" variant="h5">
                              Alex Denver
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Email :
                            </Text>
                            <Text className="email_One" as="h5" variant="h5">
                              alexdenver@gmail.com
                            </Text>
                          </Row>
                          <Row className="items-start mr-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[65%]">
                            <Text className="Roles" as="h5" variant="h5">
                              Roles :
                            </Text>
                            <Text className="ReadWrite" as="h5" variant="h5">
                              Read, Write
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius8 w-[8%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_edit_44X44.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_trash_44X44.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                      <Row className="bg-white_A700 items-start justify-between lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs1 w-[100%]">
                        <Column className="justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] py-[2px] w-[18%]">
                          <Row className="items-center mr-[auto] mt-[1px] w-[66%]">
                            <Text className="Name" as="h5" variant="h5">
                              Name :
                            </Text>
                            <Text className="AlexDenver" as="h5" variant="h5">
                              Alex Denver
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Email :
                            </Text>
                            <Text className="email_One" as="h5" variant="h5">
                              alexdenver@gmail.com
                            </Text>
                          </Row>
                          <Row className="items-start mr-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[65%]">
                            <Text className="Roles" as="h5" variant="h5">
                              Roles :
                            </Text>
                            <Text className="ReadWrite" as="h5" variant="h5">
                              Read, Write
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius8 w-[8%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_edit_44X44.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit One"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_trash_44X44.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash One"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
                      <Row className="bg-white_A700 items-start justify-between lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs1 w-[100%]">
                        <Column className="justify-end lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] py-[2px] w-[18%]">
                          <Row className="items-center mr-[auto] mt-[1px] w-[66%]">
                            <Text className="Name" as="h5" variant="h5">
                              Name :
                            </Text>
                            <Text className="AlexDenver" as="h5" variant="h5">
                              Alex Denver
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Email :
                            </Text>
                            <Text className="email_One" as="h5" variant="h5">
                              alexdenver@gmail.com
                            </Text>
                          </Row>
                          <Row className="items-start mr-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[65%]">
                            <Text className="Roles" as="h5" variant="h5">
                              Roles :
                            </Text>
                            <Text className="ReadWrite" as="h5" variant="h5">
                              Read, Write
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center justify-center lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius8 w-[8%]">
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_edit_44X44.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="edit Two"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                            shape="icbRoundedBorder8"
                            size="mdIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_trash_44X44.svg"
                              className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                              alt="trash Two"
                            />
                          </Button>
                        </Row>
                      </Row>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PermissionPage;
