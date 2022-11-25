import React from "react";

import { Column, Row, Img, Text, Line } from "components";

const EmployeeDirectoryPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <aside className="w-[15%]">
            <div className="">
              <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
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
                  <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[9px] w-[100%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_objectscolumn.svg"
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
                    <Row className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Img
                        src="images/img_settings_24X24.svg"
                        className="settings_One"
                        alt="settings One"
                      />
                      <Text
                        className="lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] rowmail"
                        as="h5"
                        variant="h5"
                      >
                        Manage Role and Position
                      </Text>
                    </Row>
                  </Column>
                  <Row className="bg-gray_101 items-center justify-between lg:mt-[248px] xl:mt-[310px] 2xl:mt-[348px] 3xl:mt-[418px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                    <Text className="Logout" as="h5" variant="h5">
                      Logout
                    </Text>
                    <Img
                      src="images/img_question.svg"
                      className="settings_One"
                      alt="question"
                    />
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Column className="justify-start w-[85%]">
            <Column className="bg-white_A700 border border-gray_300 border-solid items-end justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Column>
            <Column className="bg-white_A700 items-center justify-start lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] 2xl:mt-[102px] 3xl:mt-[123px] lg:mt-[73px] xl:mt-[91px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius8 w-[15%]">
              <Column className="items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
                <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_user.svg"
                    className="objectscolumn"
                    alt="user"
                  />
                  <Text className="rowuser" as="h5" variant="h5">
                    Create Employee
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_sort.svg"
                    className="objectscolumn"
                    alt="sort"
                  />
                  <Text className="rowuser" as="h5" variant="h5">
                    Create Bulk Employee
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_user_24X24.svg"
                    className="objectscolumn"
                    alt="user One"
                  />
                  <Text className="rowuser" as="h5" variant="h5">
                    Employees
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EmployeeDirectoryPage;
