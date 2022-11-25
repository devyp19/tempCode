import React from "react";

import { Column, Row, Img, Text, Line } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
            <Row className="items-end justify-center w-[72%]">
              <Img
                src="images/img_settings.svg"
                className="settings"
                alt="settings"
              />
              <Text className="rowsettings2" as="h2" variant="h2">
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
                  <Text className="rowobjectscolumn4" as="h5" variant="h5">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_mail.svg"
                    className="objectscolumn"
                    alt="mail"
                  />
                  <Text className="rowmail1" as="h5" variant="h5">
                    Invitation
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_upload.svg"
                    className="objectscolumn"
                    alt="upload"
                  />
                  <Text className="rowmail1" as="h5" variant="h5">
                    Employee Directory
                  </Text>
                  <Img
                    src="images/img_arrowright_16X16.svg"
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
                  <Text className="rowmail1" as="h5" variant="h5">
                    Documents
                  </Text>
                </Row>
                <Row className="bg-indigo_600 items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_folder.svg"
                    className="objectscolumn"
                    alt="folder"
                  />
                  <Text className="rowcomputer1" as="h5" variant="h5">
                    Space Management
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_trophy.svg"
                    className="objectscolumn"
                    alt="trophy"
                  />
                  <Text className="rowmail1" as="h5" variant="h5">
                    Training
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_search.svg"
                    className="objectscolumn"
                    alt="search"
                  />
                  <Text className="rowmail1" as="h5" variant="h5">
                    Hiring
                  </Text>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                  <Img
                    src="images/img_settings_24X24.svg"
                    className="objectscolumn"
                    alt="settings One"
                  />
                  <Text className="rowmail1" as="h5" variant="h5">
                    Manage Role Position
                  </Text>
                </Row>
              </Column>
              <Row className="bg-gray_101 items-center justify-between lg:mt-[249px] xl:mt-[312px] 2xl:mt-[351px] 3xl:mt-[421px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                <Text className="Logout2" as="h5" variant="h5">
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
    </>
  );
};

export default Sidebar1;
