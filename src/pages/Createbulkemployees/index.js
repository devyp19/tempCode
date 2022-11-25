import React from "react";

import { Column, Row, Img, Text, Line, Input, Button } from "components";
import Sidebar from "../../components/Sidebar/Sidebar";
import { UploadFileModal } from "modals/UploadFile";

const CreatebulkemployeesPage = () => {
  const [isOpenUploadFileModal, setUploadFileModal] = React.useState(false);

  function handleOpenUploadFileModal() {
    setUploadFileModal(true);
  }
  function handleCloseUploadFileModal() {
    setUploadFileModal(false);
  }
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          {/* <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[15%]">
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
            <Column className="items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
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
                <Row className="bg-indigo_600 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_computer.svg"
                    className="objectscolumn"
                    alt="computer"
                  />
                  <Text className="rowcomputer" as="h5" variant="h5">
                    Employee Directory
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright"
                    alt="arrowright"
                  />
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_file.svg"
                    className="objectscolumn"
                    alt="file"
                  />
                  <Text className="rowmail" as="h5" variant="h5">
                    Documents
                  </Text>
                </Row>
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
                wrapClassName="2xl:mt-[348px] 3xl:mt-[418px] flex lg:mt-[248px] w-[100%] xl:mt-[310px]"
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
          </Column> */}
           <Sidebar className="w-[18%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Create Bulk Employees
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius8 w-[96%]">
              <Text
                className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Follow the steps that are mentioned below to add bulk employees
                :
              </Text>
              <Column className="justify-start lg:mb-[27px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius8 w-[20%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Steps :
                </Text>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[100%]">
                  <Column className="items-center w-[50%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1. Download the
                    </Text>
                  </Column>
                  <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[50%]">
                    Excel Template
                  </Button>
                </Row>
                <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]">
                  <Text className="column2filltheinf" as="h5" variant="h5">
                    <span className="text-black_900 font-inter font-medium lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                      2.{" "}
                    </span>
                    <span className="text-black_900 font-inter font-medium lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                      Fill the information in excel template.
                    </span>
                  </Text>
                </Column>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[100%]">
                  <Column className="items-center w-[50%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3. Upload the excel.
                    </Text>
                  </Column>
                  <Button
                    onClick={handleOpenUploadFileModal}
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[44%]"
                  >
                    Upload Excel{" "}
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
      {isOpenUploadFileModal ? (
        <UploadFileModal
          isOpen={isOpenUploadFileModal}
          onRequestClose={handleCloseUploadFileModal}
        />
      ) : null}
    </>
  );
};

export default CreatebulkemployeesPage;
