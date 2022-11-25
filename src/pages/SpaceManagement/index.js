import React from "react";

import { Column, Row, Grid, Text, Button, Img, List, Stack } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { AddSpaceModal } from "modals/AddSpace";
import { ViewBookingRemoveModal } from "modals/ViewBookingRemove";
import { EditSpaceModal } from "modals/EditSpace";
import { getSpaceselect } from "service/api";
import Dropdown from "react-bootstrap/Dropdown";

const SpaceManagementPage = () => {
  const [apiData, setapiData] = React.useState();
  const [open, setOpen] = React.useState(); // undefined is nothing open
  const [isOpenViewBookingRemoveModal, setViewBookingRemoveModal] =
    React.useState(false);
  const [isOpenAddSpaceModal, setAddSpaceModal] = React.useState(false);
  const [isOpenEditSpaceModal, setEditSpaceModal] = React.useState(false);
  const [id, setId] = React.useState();
  const toggle = (id) => setOpen(open === id ? undefined : id); // close if currently open

  function callApi() {
    const req = {};

    getSpaceselect(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleOpenAddSpaceModal() {
    setAddSpaceModal(true);
  }

  function handleCloseAddSpaceModal() {
    setAddSpaceModal(false);
    callApi();
  }

  function handleOpenEditSpaceModal(id) {
    setEditSpaceModal(true);
    setId(id);
  }

  function handleCloseEditSpaceModal() {
    setEditSpaceModal(false);
    callApi();

  }
  function handleOpenViewBookingRemoveModal(id) {
    setViewBookingRemoveModal(true);
    setId(id);
  }
  function handleCloseViewBookingRemoveModal() {
    setViewBookingRemoveModal(false);
    callApi();

  }
  React.useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[19px] xl:pb-[24px] 2xl:pb-[27px] 3xl:pb-[33px] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar className="w-[18%]" />
          <Column className="items-center justify-start w-[85%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="CreateEmployee" as="h3" variant="h3">
                Manage your Space
              </Text>
              <Text className="TopBar" variant="body2">
                AP
              </Text>
            </Row>
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius8 w-[96%]">
              <Row className="items-center justify-between rounded-radius8 w-[98%]">
                <Text
                  className="font-medium text-black_901 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  My Space
                </Text>
                <Button
                  className="flex items-center justify-center text-center w-[10%]"
                  onClick={handleOpenAddSpaceModal}
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[5px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[6px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[7px]"
                      alt="plus"
                    />
                  }
                >
                  <div className="common-pointer bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                    Create Space
                  </div>
                </Button>
              </Row>
              <Grid
                className="grid grid-cols-3 gap-3"
                // className="gap-[3] lg:mb-[35px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[96%]"
                //orientation="vertical"
              >
                {apiData?.map((apiDataResponseEle, index) => {
                  return (
                    <React.Fragment key={`apiDataResponseEle${index}`}>
                      <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[auto] h-[90%]">
                        <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-2xl w-[100%] ">
                          <Column className="items-center justify-start w-[100%] h-[50%]">
                            <Column className="backdrop-opacity-[0.5] h-[50%] bg-indigo_700 items-center justify-start rounded-radius8 w-[100%]">
                              <Column
                                className="bg-cover bg-repeat items-end justify-start h-48 lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url(" +
                                    "https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/public/" +
                                    apiDataResponseEle?.image_url +
                                    ")",
                                }}
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="settings_One"
                                  alt="edit"
                                  onClick={() => toggle(apiDataResponseEle?.id)}
                                />
                                {open === apiDataResponseEle?.id && (
                                  <Dropdown>
                                    <Dropdown.Menu
                                      className="static"
                                      show={toggle}
                                    >
                                      <Dropdown.Item href="/viewspace">
                                        View
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={() =>
                                          handleOpenEditSpaceModal(
                                            apiDataResponseEle?.id
                                          )
                                        }
                                      >
                                        Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        onClick={() =>
                                          handleOpenViewBookingRemoveModal(
                                            apiDataResponseEle?.id
                                          )
                                        }
                                       
                                      >
                                        Remove
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                )}
                              </Column>
                            </Column>
                          </Column>
                          <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[97%]">
                            <Text
                              className="font-medium text-black_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              {apiDataResponseEle?.["space_name"]}
                            </Text>
                            <Row className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                              <Img
                                src="images/img_location_24X24.svg"
                                className="settings_One"
                                alt="location"
                              />
                              <Text
                                className="rowlocation"
                                as="h5"
                                variant="h5"
                              >
                                {apiDataResponseEle?.location}
                              </Text>
                            </Row>
                            <Text className="timeZone" as="h6" variant="h6">
                              {apiDataResponseEle?.description}
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </Grid>
            </Column>
          </Column>
        </Row>
      </Column>
      {isOpenViewBookingRemoveModal ? (
        <ViewBookingRemoveModal
          isOpen={isOpenViewBookingRemoveModal}
          onRequestClose={handleCloseViewBookingRemoveModal}
          id={id}

        />
      ) : null}
      {isOpenAddSpaceModal ? (
        <AddSpaceModal
          isOpen={isOpenAddSpaceModal}
          onRequestClose={handleCloseAddSpaceModal}
        />
      ) : null}
      {isOpenAddSpaceModal ? (
        <AddSpaceModal
          isOpen={isOpenAddSpaceModal}
          onRequestClose={handleCloseAddSpaceModal}
        />
      ) : null}
      {isOpenEditSpaceModal ? (
        <EditSpaceModal
          isOpen={isOpenEditSpaceModal}
          onRequestClose={handleCloseEditSpaceModal}
          id={id}
        />
      ) : null}
    </>
  );
};

export default SpaceManagementPage;
