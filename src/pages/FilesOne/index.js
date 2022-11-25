import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Button,
  CheckBox,
  Stack,
  List,
} from "components";

const FilesOnePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[15%]">
            <Row className="items-end justify-center w-[72%]">
              <Img
                src="images/img_settings.svg"
                className="settings"
                alt="settings"
              />
              <Text className="rowsettings" as="h2" variant="h2">
                Employees
              </Text>
            </Row>
            <Column className="items-center justify-start mb-[3px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_objectscolumn_24X24.svg"
                    className="objectscolumn"
                    alt="objectscolumn"
                  />
                  <Text className="rowobjectscolumn" as="h5" variant="h5">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_mail.svg"
                    className="objectscolumn"
                    alt="mail"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Invitation
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_upload.svg"
                    className="objectscolumn"
                    alt="upload"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Employee Directory
                  </Text>
                  <Img
                    src="images/img_arrowright_16X16.svg"
                    className="arrowright"
                    alt="arrowright"
                  />
                </Row>
                <Input
                  className="font-medium p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] flex lg:mt-[6px] w-[100%] xl:mt-[8px]"
                  name="Frame5933"
                  placeholder="Documents"
                  prefix={
                    <Img
                      src="images/img_menu.svg"
                      className="lg:w-[12px] lg:h-[13px] lg:ml-[3px] lg:mr-[5px] xl:w-[16px] xl:h-[17px] xl:ml-[4px] xl:mr-[6px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[5px] 2xl:mr-[7px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[6px] 3xl:mr-[9px] my-[auto]"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillIndigo600"
                ></Input>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_volume.svg"
                    className="objectscolumn"
                    alt="volume"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Space Management
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_trophy.svg"
                    className="objectscolumn"
                    alt="trophy"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Training
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_search.svg"
                    className="objectscolumn"
                    alt="search"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Hiring
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_settings_24X24.svg"
                    className="objectscolumn"
                    alt="settings One"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Manage Role Position
                  </Text>
                </Row>
              </Column>
              <Input
                className="placeholder:text-bluegray_500 Logout1"
                wrapClassName="2xl:mt-[351px] 3xl:mt-[421px] flex lg:mt-[249px] w-[100%] xl:mt-[312px]"
                name="Logout"
                placeholder="Logout"
                suffix={
                  <Img
                    src="images/img_question.svg"
                    className="mr-[2px] lg:w-[12px] lg:h-[13px] lg:ml-[18px] xl:w-[16px] xl:h-[17px] xl:ml-[23px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[26px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[31px] my-[auto]"
                    alt="question"
                  />
                }
                shape="RoundedBorder8"
                size="2xl"
                variant="FillGray101"
              ></Input>
            </Column>
          </Column>
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
              <Column className="items-center justify-start lg:mb-[173px] xl:mb-[216px] 2xl:mb-[243px] 3xl:mb-[292px] w-[100%]">
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
                  name="GroupThirtyOne"
                  placeholder="Demo"
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
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[96%]">
                  <Row className="items-center w-[100%]">
                    <CheckBox
                      className="font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-indigo_600"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="2FilesSelecte"
                      label="2 Files Selected"
                    ></CheckBox>
                    <Button
                      className="2xl:ml-[722px] 3xl:ml-[866px] flex items-center justify-center lg:ml-[513px] text-center w-[9%] xl:ml-[641px]"
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
                    <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius8 w-[6%]">
                      <Row className="items-center justify-center w-[81%]">
                        <Img
                          src="images/img_edit_24X24.svg"
                          className="settings_One"
                          alt="edit"
                        />
                        <Text className="rowedit1" as="h6" variant="h6">
                          Edit
                        </Text>
                      </Row>
                    </Column>
                    <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius8 w-[7%]">
                      <Row className="items-center justify-center w-[84%]">
                        <Img
                          src="images/img_trash_24X24.svg"
                          className="settings_One"
                          alt="trash"
                        />
                        <Text className="rowedit1" as="h6" variant="h6">
                          Delete
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  <Row className="items-center justify-between lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[97%]">
                    <Stack className="bg-white_A700 lg:h-[177px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[299px] lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius12 shadow-bs1 w-[32%]">
                      <Stack className="absolute lg:h-[132px] xl:h-[165px] 2xl:h-[185px] 3xl:h-[222px] inset-x-[0] mx-[auto] top-[0] w-[87%]">
                        <Row className="absolute items-center top-[0] w-[100%]">
                          <Button
                            className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                            shape="icbRoundedBorder4"
                            size="smIcn"
                            variant="icbFillIndigo200"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                              alt="checkmark"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:ml-[158px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[268px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                            shape="icbRoundedBorder4"
                            size="smIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_download.svg"
                              className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                              alt="download Two"
                            />
                          </Button>
                          <Img
                            src="images/img_overflowmenu_30X30.svg"
                            className="overflowmenu1"
                            alt="overflowmenu"
                          />
                        </Row>
                        <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[32%]">
                          <Img
                            src="images/img_paper.png"
                            className="Paper"
                            alt="Paper"
                          />
                          <Text className="columnpaper" as="h3" variant="h3">
                            Intranet.jpg
                          </Text>
                        </Column>
                      </Stack>
                      <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] justify-start my-[auto] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] right-[3%] rounded-radius12 shadow-bs1 w-[37%]">
                        <Row className="items-center w-[82%]">
                          <Img
                            src="images/img_edit.svg"
                            className="settings_One"
                            alt="edit Two"
                          />
                          <Text className="rowedit" as="h5" variant="h5">
                            Rename
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[72%]">
                          <Img
                            src="images/img_trash.svg"
                            className="settings_One"
                            alt="trash One"
                          />
                          <Text className="rowedit" as="h5" variant="h5">
                            Delete
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[65%]">
                          <Img
                            src="images/img_mail_24X24.svg"
                            className="settings_One"
                            alt="mail One"
                          />
                          <Text className="rowedit" as="h5" variant="h5">
                            Email
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
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
                    </Stack>
                    <List
                      className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-2 min-h-[auto] w-[66%]"
                      orientation="horizontal"
                    >
                      <Column className="listcheckmark_one">
                        <Row className="items-center w-[100%]">
                          <Button
                            className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                            shape="icbRoundedBorder4"
                            size="smIcn"
                            variant="icbFillIndigo200"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                              alt="checkmark One"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:ml-[158px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[268px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                            shape="icbRoundedBorder4"
                            size="smIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_download.svg"
                              className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                              alt="download Three"
                            />
                          </Button>
                          <Img
                            src="images/img_overflowmenu_30X30.svg"
                            className="overflowmenu1"
                            alt="overflowmenu One"
                          />
                        </Row>
                        <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] w-[32%]">
                          <Img
                            src="images/img_paper.png"
                            className="Paper"
                            alt="Paper One"
                          />
                          <Text className="columnpaper" as="h3" variant="h3">
                            Intranet.jpg
                          </Text>
                        </Column>
                      </Column>
                      <Column className="listcheckmark_one">
                        <Row className="items-center w-[100%]">
                          <div className="bg-white_A700 border-bluegray_101 border-bw083 border-solid lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius25 lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"></div>
                          <Button
                            className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:ml-[158px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[268px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                            shape="icbRoundedBorder4"
                            size="smIcn"
                            variant="icbFillIndigo600"
                          >
                            <Img
                              src="images/img_download.svg"
                              className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                              alt="download Four"
                            />
                          </Button>
                          <Img
                            src="images/img_overflowmenu_30X30.svg"
                            className="overflowmenu1"
                            alt="overflowmenu Two"
                          />
                        </Row>
                        <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] w-[32%]">
                          <Img
                            src="images/img_paper.png"
                            className="Paper"
                            alt="Paper Two"
                          />
                          <Text className="columnpaper" as="h3" variant="h3">
                            Intranet.jpg
                          </Text>
                        </Column>
                      </Column>
                    </List>
                  </Row>
                  <List
                    className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] grid grid-cols-3 min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[97%]"
                    orientation="horizontal"
                  >
                    <Column className="listcheckmark_one">
                      <Row className="items-center w-[100%]">
                        <div className="bg-white_A700 border-bluegray_101 border-bw083 border-solid lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius25 lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"></div>
                        <Button
                          className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:ml-[158px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[268px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillIndigo600"
                        >
                          <Img
                            src="images/img_download.svg"
                            className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                            alt="download Five"
                          />
                        </Button>
                        <Img
                          src="images/img_overflowmenu_30X30.svg"
                          className="overflowmenu1"
                          alt="overflowmenu Three"
                        />
                      </Row>
                      <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] w-[32%]">
                        <Img
                          src="images/img_paper.png"
                          className="Paper"
                          alt="Paper Three"
                        />
                        <Text className="columnpaper" as="h3" variant="h3">
                          Intranet.jpg
                        </Text>
                      </Column>
                    </Column>
                    <Column className="listcheckmark_one">
                      <Row className="items-center w-[100%]">
                        <div className="bg-white_A700 border-bluegray_101 border-bw083 border-solid lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius25 lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"></div>
                        <Button
                          className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:ml-[158px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[268px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillIndigo600"
                        >
                          <Img
                            src="images/img_download.svg"
                            className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                            alt="download Six"
                          />
                        </Button>
                        <Img
                          src="images/img_overflowmenu_30X30.svg"
                          className="overflowmenu1"
                          alt="overflowmenu Four"
                        />
                      </Row>
                      <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] w-[32%]">
                        <Img
                          src="images/img_paper.png"
                          className="Paper"
                          alt="Paper Four"
                        />
                        <Text className="columnpaper" as="h3" variant="h3">
                          Intranet.jpg
                        </Text>
                      </Column>
                    </Column>
                    <Column className="listcheckmark_one">
                      <Row className="items-center w-[100%]">
                        <div className="bg-white_A700 border-bluegray_101 border-bw083 border-solid lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius25 lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"></div>
                        <Button
                          className="flex lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] items-center justify-center lg:ml-[158px] xl:ml-[198px] 2xl:ml-[223px] 3xl:ml-[268px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillIndigo600"
                        >
                          <Img
                            src="images/img_download.svg"
                            className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                            alt="download Seven"
                          />
                        </Button>
                        <Img
                          src="images/img_overflowmenu_30X30.svg"
                          className="overflowmenu1"
                          alt="overflowmenu Five"
                        />
                      </Row>
                      <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] w-[32%]">
                        <Img
                          src="images/img_paper.png"
                          className="Paper"
                          alt="Paper Five"
                        />
                        <Text className="columnpaper" as="h3" variant="h3">
                          Intranet.jpg
                        </Text>
                      </Column>
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

export default FilesOnePage;
