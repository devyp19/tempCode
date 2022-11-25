import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Row,
  Text,
  Img,
  List,
  Line,
  SelectBox,
  Input,
  Stack,
  TextArea,
  Button,
} from "components";

const EditPermissionModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start 2xl:p-[111px] 3xl:p-[134px] lg:p-[79px] xl:p-[99px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[40%]">
              <Row className="items-center justify-between w-[96%]">
                <Text
                  className="font-bold text-black_901 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Edit Permission
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
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
            <Column className="justify-start lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[34%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="listthisfileshoul">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    This file should be visible to
                  </Text>
                  <Column className="bg-bluegray_50 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[56%]">
                    <Row className="items-start justify-between w-[91%]">
                      <Text className="rowspecificemploy" as="h5" variant="h5">
                        Specific Employee
                      </Text>
                      <Img
                        src="images/img_arrowup_24X24.svg"
                        className="settings_One"
                        alt="arrowup"
                      />
                    </Row>
                  </Column>
                </Row>
                <Line className="self-center w-[84%] justify-end items-center lg:ml-[48px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] rounded-radius8" />
                <Row className="items-center justify-end 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] lg:my-[25px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] w-[76%]">
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
                    name="columnmanager"
                    placeholder=""
                    isSearchable={true}
                    isMulti={false}
                  ></SelectBox>
                </Row>
                <Line className="self-center w-[84%] justify-end items-center lg:ml-[48px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] rounded-radius8" />
                <Row className="items-center justify-end lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:my-[25px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] w-[81%]">
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
                    name="columnselectone"
                    placeholder=""
                    isSearchable={true}
                    isMulti={false}
                  ></SelectBox>
                </Row>
              </List>
              <Row className="items-center justify-end ml-[auto] rounded-radius8 w-[84%]">
                <Text
                  className="font-medium text-black_901 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Select Employee
                </Text>
                <Input
                  className="placeholder:text-gray_500 FirstName"
                  wrapClassName="2xl:ml-[18px] 3xl:ml-[21px] lg:ml-[12px] w-[67%] xl:ml-[16px]"
                  name="Group4165"
                  placeholder="Chris Evan"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray50"
                ></Input>
              </Row>
              <Stack className="lg:h-[102px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] w-[100%]">
                <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start justify-end ml-[auto] rounded-radius8 w-[73%]">
                      <Text className="rowmessage1" as="h5" variant="h5">
                        Message
                      </Text>
                      <TextArea
                        className="font-normal lg:mb-[35px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_500 w-[77%]"
                        name="Enteryourmess"
                        placeholder=""
                      ></TextArea>
                    </Row>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[67%]">
                      <Row className="items-center w-[44%]">
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
                        <Text className="rowrectangle452" as="h5" variant="h5">
                          Send Invitation
                        </Text>
                      </Row>
                      <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[48%]">
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
                        <Text className="rowrectangle452" as="h5" variant="h5">
                          Required Sign-In
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute bg-bluegray_50 justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] right-[0] rounded-radius8 top-[0] w-[56%]">
                  <Column className="justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[100%]">
                    <Text className="column2filltheinf" as="h5" variant="h5">
                      Read
                    </Text>
                    <Line className="bg-gray_301 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Input
                    className="border-b-[1px] border-gray_301 font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-black_900 text-black_900 w-[100%]"
                    wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                    name="GroupNinetyNine"
                    placeholder="Write"
                    size="4xl"
                  ></Input>
                  <Text
                    className="lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] column2filltheinf"
                    as="h5"
                    variant="h5"
                  >
                    All
                  </Text>
                </Column>
              </Stack>
              <Row className="items-center justify-end ml-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius8 w-[49%]">
                <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[53%]">
                  Save Changes
                </Button>
                <Button
                  className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[38%]"
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

export { EditPermissionModal };
