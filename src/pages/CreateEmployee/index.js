import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  SelectBox,
  Datepicker,
  List,
  Button,
} from "components";

const CreateEmployeePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
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
          <Column className="items-center w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Create Employee
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius8 w-[96%]">
              <Column className="justify-start lg:mb-[43px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[72px] w-[100%]">
                <Column className="justify-start pt-[1px] w-[100%]">
                  <Row className="items-center w-[14%]">
                    <Img
                      src="images/img_objectscolumn_1.svg"
                      className="settings_One"
                      alt="objectscolumn One"
                    />
                    <Text className="rowobjectscolumn_one" as="h4" variant="h4">
                      Personal Information
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[71%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center justify-between rounded-radius8 w-[100%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Name
                      </Text>
                      <Row className="items-center justify-between rounded-radius8 w-[89%]">
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[32%]"
                          type="text"
                          name="FirstName"
                          placeholder="First Name"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[32%]"
                          type="text"
                          name="MiddleName"
                          placeholder="Middle Name"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[32%]"
                          type="text"
                          name="LastName"
                          placeholder="Last Name"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                      <Row className="items-center justify-between rounded-radius8 w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Email
                        </Text>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[73%]"
                          type="email"
                          name="EmailId"
                          placeholder="Email Id"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between rounded-radius8 w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Phone
                        </Text>
                        <Input
                          className="placeholder:text-gray_500 FirstName"
                          wrapClassName="w-[73%]"
                          type="number"
                          name="Group3995"
                          placeholder="Phone no."
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillBluegray50"
                        ></Input>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-center justify-between w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Gender
                        </Text>
                        <SelectBox
                          className="w-[73%]"
                          placeholderClassName=""
                          name="columnselectone"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between w-[40%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date of Birth
                        </Text>
                        <Datepicker
                          className="placeholder:bg-transparent bg-transparent placeholder:text-gray_500 Group4000"
                          name="Group3999"
                          placeholder="--Select date--"
                        ></Datepicker>
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[40%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Location
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 Group4000"
                        wrapClassName="2xl:ml-[38px] 3xl:ml-[45px] flex lg:ml-[27px] w-[73%] xl:ml-[34px]"
                        name="Group4000"
                        placeholder="--Select one--"
                        suffix={
                          <Img
                            src="images/img_location.svg"
                            className="lg:w-[12px] lg:h-[13px] lg:ml-[18px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:ml-[23px] xl:mr-[6px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[26px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[31px] 3xl:mr-[8px] my-[auto]"
                            alt="location"
                          />
                        }
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBluegray50"
                      ></Input>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] pt-[1px] w-[100%]">
                  <Row className="items-center w-[9%]">
                    <Img
                      src="images/img_objectscolumn_1.svg"
                      className="settings_One"
                      alt="objectscolumn Two"
                    />
                    <Text className="rowobjectscolumn_one" as="h4" variant="h4">
                      Job Details
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
                </Column>
                <Column className="items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[72%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listdepartment">
                      <Row className="items-center justify-between w-[39%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Department
                        </Text>
                        <SelectBox
                          className="w-[73%]"
                          placeholderClassName=""
                          name="columnselectone one"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between w-[43%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Employment Status
                        </Text>
                        <SelectBox
                          className="w-[65%]"
                          placeholderClassName=""
                          name="column One"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                    </Row>
                    <Row className="listdepartment">
                      <Row className="items-center justify-between w-[39%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Job Title
                        </Text>
                        <SelectBox
                          className="w-[73%]"
                          placeholderClassName=""
                          name="columnselectone two"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between w-[43%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Report To
                        </Text>
                        <SelectBox
                          className="w-[65%]"
                          placeholderClassName=""
                          name="columnselectone one one"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                    </Row>
                    <Row className="listdepartment">
                      <Row className="items-center justify-between w-[39%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Position
                        </Text>
                        <SelectBox
                          className="w-[73%]"
                          placeholderClassName=""
                          name="columnselectone three"
                          placeholder=""
                          isSearchable={true}
                          isMulti={false}
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between w-[43%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Hire Date
                        </Text>
                        <Datepicker
                          className="placeholder:bg-transparent bg-transparent placeholder:text-gray_500 Group4000"
                          name="Group3999 One"
                          placeholder="--Select date--"
                        ></Datepicker>
                      </Row>
                    </Row>
                  </List>
                </Column>
                <Row className="items-center justify-end ml-[auto] lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] rounded-radius8 w-[15%]">
                  <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]">
                    Create
                  </Button>
                  <Button
                    className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                    variant="OutlineIndigo600"
                  >
                    Reset
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CreateEmployeePage;
