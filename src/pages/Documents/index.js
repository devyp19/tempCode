import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  Img,
  Input,
  Line,
  Button,
  Grid,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";

const DocumentsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
        <Sidebar className="w-[18%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Documents
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius8 w-[96%]">
              <Column className="items-center justify-start 3xl:mb-[109px] lg:mb-[65px] xl:mb-[81px] 2xl:mb-[91px] w-[98%]">
                <Row className="items-start justify-between w-[100%]">
                  <Stack className="lg:h-[233px] xl:h-[291px] 2xl:h-[328px] 3xl:h-[393px] w-[32%]">
                    <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[96%]">
                      <Column className="justify-start w-[100%]">
                        <Img
                          src="images/img_arrowup_24X24.svg"
                          className="lg:ml-[164px] xl:ml-[205px] 2xl:ml-[231px] 3xl:ml-[277px] settings_One"
                          alt="arrowup"
                        />
                        <Column className="bg-white_A700 items-end justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[100%]">
                          <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="overflowmenu"
                              alt="overflowmenu"
                            />
                            <Column className="items-center justify-start 2xl:mr-[101px] 3xl:mr-[121px] lg:mr-[72px] xl:mr-[90px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                              <Img
                                src="images/img_folder_122X142.png"
                                className="Folder"
                                alt="Folder"
                              />
                              <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[40%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Demo
                                </Text>
                                <Text
                                  className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_502 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  4 Items
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="absolute items-end justify-start left-[0] rounded-radius4 w-[76%]">
                      <Row className="items-center justify-between rounded-radius4 w-[100%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sort By
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                          wrapClassName="w-[81%]"
                          name="Group3997"
                          placeholder="--Select one--"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                      <Column className="bg-gray_103 justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 shadow-bs1 w-[81%]">
                        <Column className="items-center justify-start ml-[2px] w-[35%]">
                          <Text
                            className="columnselectone_one"
                            as="h6"
                            variant="h6"
                          >
                            --Select one--
                          </Text>
                        </Column>
                        <Column className="justify-start ml-[2px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[98%]">
                          <Text
                            className="columnselectone_one"
                            as="h6"
                            variant="h6"
                          >
                            (A-Z)
                          </Text>
                          <Line className="bg-gray_301 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                        </Column>
                        <Input
                          className="placeholder:text-bluegray_500 GroupSixtySeven"
                          wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] ml-[2px] w-[98%] xl:mt-[12px]"
                          name="GroupSixtySeven"
                          placeholder="(Z-A)"
                          size="4xl"
                        ></Input>
                        <Input
                          className="placeholder:text-bluegray_500 GroupSixtySeven"
                          wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] ml-[2px] w-[98%] xl:mt-[12px]"
                          name="GroupSixtyNine"
                          placeholder="Newest"
                          size="4xl"
                        ></Input>
                        <Input
                          className="placeholder:text-bluegray_500 GroupSixtySeven"
                          wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] ml-[2px] w-[98%] xl:mt-[12px]"
                          name="GroupSeventyOne"
                          placeholder="Oldest"
                          size="4xl"
                        ></Input>
                        <Input
                          className="placeholder:text-bluegray_500 GroupSixtySeven"
                          wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] ml-[2px] w-[98%] xl:mt-[12px]"
                          type="text"
                          name="GroupSeventyThree"
                          placeholder="Name Wise"
                          size="4xl"
                        ></Input>
                        <Text
                          className="xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] columnselectone_one"
                          as="h6"
                          variant="h6"
                        >
                          Date Wise
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="bg-white_A700 items-end justify-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[31%]">
                    <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="overflowmenu"
                        alt="overflowmenu One"
                      />
                      <Stack className="lg:h-[110px] xl:h-[138px] 2xl:h-[155px] 3xl:h-[186px] 3xl:mr-[11px] lg:mr-[6px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[95%]">
                        <Column className="absolute items-center justify-start left-[0] w-[54%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder One"
                          />
                          <Text className="Employee" as="h3" variant="h3">
                            Employee
                          </Text>
                          <Text
                            className="itemsCounter_One"
                            as="h5"
                            variant="h5"
                          >
                            2 Items
                          </Text>
                        </Column>
                        <Column className="absolute bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] right-[0] rounded-radius12 shadow-bs1 top-[1%] w-[66%]">
                          <Column className="justify-start w-[100%]">
                            <Row className="items-center w-[56%]">
                              <Img
                                src="images/img_edit.svg"
                                className="settings_One"
                                alt="edit"
                              />
                              <Text className="rowedit" as="h5" variant="h5">
                                Edit
                              </Text>
                            </Row>
                            <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[72%]">
                              <Img
                                src="images/img_trash.svg"
                                className="settings_One"
                                alt="trash"
                              />
                              <Text className="rowedit" as="h5" variant="h5">
                                Delete
                              </Text>
                            </Row>
                            <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                              <Img
                                src="images/img_clock.svg"
                                className="settings_One"
                                alt="clock"
                              />
                              <Text className="rowedit" as="h5" variant="h5">
                                Permission
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                  </Column>
                  <Column className="justify-start w-[32%]">
                    <Row className="items-center justify-end ml-[auto] w-[91%]">
                      <Button
                        className="flex items-center justify-center text-center w-[35%]"
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
                        className="2xl:ml-[18px] 3xl:ml-[21px] flex items-center justify-center lg:ml-[12px] text-center w-[29%] xl:ml-[16px]"
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
                        className="2xl:ml-[18px] 3xl:ml-[21px] flex items-center justify-center lg:ml-[12px] text-center w-[25%] xl:ml-[16px]"
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
                    <Column className="bg-white_A700 items-end justify-start lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[96%]">
                      <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu Two"
                        />
                        <Column className="items-center justify-start 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder Two"
                          />
                          <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[40%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Demo
                            </Text>
                            <Text
                              className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_502 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              4 Items
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[97%]">
                  <Grid className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 w-[100%]">
                    <Column className="bg-white_A700 items-end justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu Three"
                        />
                        <Column className="items-center justify-start 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder Three"
                          />
                          <Text className="Employee" as="h3" variant="h3">
                            Employee
                          </Text>
                          <Text
                            className="itemsCounter_One"
                            as="h5"
                            variant="h5"
                          >
                            2 Items
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-end justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu Four"
                        />
                        <Column className="items-center justify-start 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder Four"
                          />
                          <Text className="Employee" as="h3" variant="h3">
                            Employee
                          </Text>
                          <Text
                            className="itemsCounter_One"
                            as="h5"
                            variant="h5"
                          >
                            2 Items
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-end justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu Five"
                        />
                        <Column className="items-center justify-start 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder Five"
                          />
                          <Text className="Employee" as="h3" variant="h3">
                            Employee
                          </Text>
                          <Text
                            className="itemsCounter_One"
                            as="h5"
                            variant="h5"
                          >
                            2 Items
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-end justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu Six"
                        />
                        <Column className="items-center justify-start 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder Six"
                          />
                          <Text className="Employee" as="h3" variant="h3">
                            Employee
                          </Text>
                          <Text
                            className="itemsCounter_One"
                            as="h5"
                            variant="h5"
                          >
                            2 Items
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-end justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius12 shadow-bs1 w-[100%]">
                      <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] pb-[3px] w-[67%]">
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu Seven"
                        />
                        <Column className="items-center justify-start 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                          <Img
                            src="images/img_folder_122X142.png"
                            className="Folder"
                            alt="Folder Seven"
                          />
                          <Text className="Employee" as="h3" variant="h3">
                            Employee
                          </Text>
                          <Text
                            className="itemsCounter_One"
                            as="h5"
                            variant="h5"
                          >
                            2 Items
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DocumentsPage;
