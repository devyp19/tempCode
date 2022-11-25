import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  List,
  SelectBox,
  Button,
  Line,
  Input,
} from "components";

const SelectGroupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start xl:p-[120px] 2xl:p-[135px] 3xl:p-[162px] lg:p-[96px] rounded-radius12 shadow-bs1 w-[100%]">
            <Row className="bg-gray_101 items-center justify-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[41%]">
              <Text
                className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] text-black_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                Add Permission
              </Text>
              <Img
                src="images/img_arrowright_24X24.svg"
                className="lg:ml-[233px] xl:ml-[291px] 2xl:ml-[327px] 3xl:ml-[393px] 3xl:mr-[10px] lg:mr-[6px] xl:mr-[8px] 2xl:mr-[9px] settings_One"
                alt="arrowright"
              />
            </Row>
            <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[5%]">
              <Img
                src="images/img_paper_59X46.png"
                className="Paper4"
                alt="Paper"
              />
              <Text className="columnpaper2" as="h6" variant="h6">
                Intranet.jpg
              </Text>
            </Column>
            <Column className="items-end justify-start lg:mb-[26px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[35%]">
              <Row className="items-center justify-between w-[100%]">
                <Text
                  className="font-medium text-black_901 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  This file should be visible to
                </Text>
                <Column className="bg-bluegray_50 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[56%]">
                  <Row className="items-end justify-between w-[91%]">
                    <Text
                      className="mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] column2filltheinf"
                      as="h5"
                      variant="h5"
                    >
                      Select Group
                    </Text>
                    <Img
                      src="images/img_arrowup_24X24.svg"
                      className="settings_One"
                      alt="arrowup"
                    />
                  </Row>
                </Column>
              </Row>
              <Stack className="xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] lg:h-[88px] mt-[4px] w-[81%]">
                <Column className="absolute bottom-[15%] items-center justify-start top-[12%] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-end lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[94%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Select Role
                      </Text>
                      <SelectBox
                        className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[74%]"
                        placeholderClassName=""
                        name="columnselectone"
                        placeholder=""
                        isSearchable={true}
                        isMulti={false}
                      ></SelectBox>
                    </Row>
                    <Row className="listdepartment">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Set Permission
                      </Text>
                      <SelectBox
                        className="w-[69%]"
                        placeholderClassName=""
                        name="columnselectone one"
                        placeholder=""
                        isSearchable={true}
                        isMulti={false}
                      ></SelectBox>
                    </Row>
                  </List>
                </Column>
                <Column className="absolute bg-bluegray_50 items-center justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] right-[0] rounded-radius8 shadow-bs1 w-[69%]">
                  <Column className="justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] rounded-radius8 w-[97%]">
                    <Row className="items-center rounded-radius8 w-[79%]">
                      <Button
                        className="flex items-center justify-center text-center w-[47%]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_24X24.svg"
                            className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[8px] xl:w-[10px] xl:h-[11px] xl:ml-[10px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                            alt="arrow_right"
                          />
                        }
                        variant="FillGray302"
                      >
                        <div className="bg-transparent font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                          Group 1
                        </div>
                      </Button>
                      <Button
                        className="2xl:ml-[9px] 3xl:ml-[10px] flex items-center justify-center lg:ml-[6px] text-center w-[47%] xl:ml-[8px]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_24X24.svg"
                            className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[6px] xl:w-[10px] xl:h-[11px] xl:ml-[8px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[9px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[11px]"
                            alt="arrow_right"
                          />
                        }
                        variant="FillGray302"
                      >
                        <div className="bg-transparent font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                          Group 2
                        </div>
                      </Button>
                    </Row>
                    <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="column2filltheinf"
                          as="h5"
                          variant="h5"
                        >
                          Group 1
                        </Text>
                        <Line className="bg-gray_301 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                      </Column>
                      <Text
                        className="xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] column2filltheinf"
                        as="h5"
                        variant="h5"
                      >
                        Group 2
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Row className="items-start justify-end ml-[auto] rounded-radius8 w-[73%]">
                <Text className="rowmessage1" as="h5" variant="h5">
                  Message
                </Text>
                <Input
                  className="placeholder:text-gray_500 FirstName"
                  wrapClassName="2xl:ml-[18px] 3xl:ml-[21px] lg:ml-[12px] w-[77%] xl:ml-[16px]"
                  name="Group4165"
                  placeholder="Enter your message"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="FillBluegray50"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius25 w-[67%]">
                <Row className="items-center rounded-radius25 w-[44%]">
                  <div className="bg-white_A700 border-bluegray_101 border-bw083 border-solid lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius25 lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"></div>
                  <Text className="rowrectangle452" as="h5" variant="h5">
                    Send Invitation
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius25 w-[48%]">
                  <div className="bg-white_A700 border-bluegray_101 border-bw083 border-solid lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius25 lg:w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"></div>
                  <Text className="rowrectangle452" as="h5" variant="h5">
                    Required Sign-In
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-end ml-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius8 w-[47%]">
                <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[52%]">
                  Grant Access
                </Button>
                <Button
                  className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[39%]"
                  variant="OutlineIndigo600"
                >
                  Reset
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { SelectGroupModal };
