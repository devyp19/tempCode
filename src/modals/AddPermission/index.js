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
  Line,
  Input,
  Button,
} from "components";

const AddPermissionModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start xl:p-[121px] 2xl:p-[136px] 3xl:p-[163px] lg:p-[97px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[41%]">
              <Row className="items-center justify-between w-[96%]">
                <Text
                  className="font-bold text-black_901 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Add Permission
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Column className="justify-start lg:mb-[20px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[35%]">
              <Column className="items-end justify-start w-[100%]">
                <Column className="items-center justify-start w-[14%]">
                  <Img
                    src="images/img_paper_59X46.png"
                    className="Paper4"
                    alt="Paper"
                  />
                  <Text className="columnpaper2" as="h6" variant="h6">
                    Intranet.jpg
                  </Text>
                </Column>
                <Stack className="lg:h-[103px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listdepartment">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          This file should be visible to
                        </Text>
                        <SelectBox
                          className="w-[56%]"
                          placeholderClassName=""
                          name="columnselectpeople"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-end 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[76%]">
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
                      <Row className="items-center justify-end lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[81%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Set Permission
                        </Text>
                        <SelectBox
                          className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[69%]"
                          placeholderClassName=""
                          name="columnselectone one"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                    </List>
                  </Column>
                  <Column className="absolute bg-bluegray_50 bottom-[16%] justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] right-[0] rounded-radius8 w-[56%]">
                    <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="column2filltheinf" as="h5" variant="h5">
                        Specific Employee
                      </Text>
                      <Line className="bg-gray_301 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
                    </Column>
                    <Text
                      className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] column2filltheinf"
                      as="h5"
                      variant="h5"
                    >
                      Select Group
                    </Text>
                  </Column>
                </Stack>
                <Row className="items-start justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[73%]">
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
              </Column>
              <Row className="items-center lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rounded-radius25 w-[67%]">
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
              <Row className="items-center justify-end ml-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius8 w-[47%]">
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

export { AddPermissionModal };
