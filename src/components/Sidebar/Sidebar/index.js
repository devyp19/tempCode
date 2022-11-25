import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { logout, selectUser } from "../../../reducers/authReducer";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Column, Row, Img, Text, Line } from "components";
import { useDispatch } from "react-redux";
const Sidebar = (props) => {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <React.Fragment>
      {" "}
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mx-[auto] w-[100%]">
            <Row className="items-end lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] justify-center w-[72%]">
              <Img
                src="images/img_settings.svg"
                className="settings"
                alt="settings"
              />
              <Text className="rowsettings2" as="h2" variant="h2">
                Employees
              </Text>
            </Row>
            <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Column className="lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] fixed inset-y-0 left-0 w-[100%] overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0">
                <Navigation
                  activeItemId={location.pathname}
                  onSelect={({ itemId }) => {
                    navigateTo(itemId);
                  }}
                  items={[
                    {
                      title: "Dashboard",
                      itemId: "1",
                      elemBefore: () => (
                        <Img
                          src="images/img_objectscolumn_24X24.svg"
                          className="objectscolumn"
                          alt="objectscolumn"
                        />
                      ),
                    },
                    {
                      title: "Invitation",
                      itemId: "/invitation",
                      elemBefore: () => (
                        <Img
                          src="images/img_mail.svg"
                          className="objectscolumn"
                          alt="mail"
                        />
                      ),
                    },
                    {
                      title: "Employee Directory",
                      // itemId: "/employeelist",
                      elemBefore: () => (
                        <Img
                          src="images/img_upload.svg"
                          className="objectscolumn"
                          alt="computer"
                        />
                      ),
                      subNav: [
                        {
                          title: "Add Employee",
                          itemId: "/addemployee",
                          // Optional
                          elemBefore: () => (
                            <Img
                              src="images/img_user.svg"
                              className="objectscolumn"
                              alt="user"
                            />
                          ),
                        },
                        {
                          title: "Create Bulk Employee",
                          itemId: "/createbulkemployees",
                          elemBefore: () => (
                            <Img
                              src="images/img_sort.svg"
                              className="objectscolumn"
                              alt="sort"
                            />
                          ),
                        },
                        {
                          title: "Employees",
                          itemId: "/employeelist",
                          elemBefore: () => (
                            <Img
                              src="images/img_user_24X24.svg"
                              className="objectscolumn"
                              alt="employeelist"
                            />
                          ),
                        },
                      ],
                    },
                    {
                      title: "Documents",
                      itemId: "/documents",
                      // Optional
                      elemBefore: () => (
                        <Img
                          src="images/img_file.svg"
                          className="objectscolumn"
                          alt="file"
                        />
                      ),
                    },
                    {
                      title: "Space Management",
                      itemId: "/spacemanagement",
                      // Optional
                      elemBefore: () => (
                        <Img
                          src="images/img_volume.svg"
                          className="objectscolumn"
                          alt="volume"
                        />
                      ),
                    },
                    {
                      title: "Training",
                      itemId: "3",
                      // Optional
                      elemBefore: () => (
                        <Img
                          src="images/img_trophy.svg"
                          className="objectscolumn"
                          alt="trophy"
                        />
                      ),
                    },
                    {
                      title: "Hiring",
                      itemId: "4",
                      // Optional
                      elemBefore: () => (
                        <Img
                          src="images/img_search.svg"
                          className="objectscolumn"
                          alt="search"
                        />
                      ),
                    },
                    {
                      title: "Manage Role Position",
                      itemId: "5",
                      // Optional
                      elemBefore: () => (
                        <Img
                          src="images/img_settings_24X24.svg"
                          className="objectscolumn"
                          alt="settings One"
                        />
                      ),
                    },
                  ]}
                />
              </Column>
              <Row
                onClick={() => {
                  dispatch(logout()), navigateTo("/");
                }}
                className="bg-gray_101 items-center justify-between lg:mt-[248px] xl:mt-[310px] 2xl:mt-[348px] 3xl:mt-[418px] lg:p-[5px] xl:p-[15px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius8 w-[100%]"
              >
                <Text className="Logout2">Logout</Text>
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
    </React.Fragment>
  );
};
export default Sidebar;
