import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button } from "components";

const RemovePermissionModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[204px] xl:p-[255px] 2xl:p-[287px] 3xl:p-[344px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[56%]">
              <Row className="items-center justify-between w-[96%]">
                <Text
                  className="font-bold text-black_901 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Remove Permission
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[30%]">
              <Column className="items-center justify-start 3xl:ml-[118px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] w-[22%]">
                <Img
                  src="images/img_paper.png"
                  className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[61%]"
                  alt="Paper"
                />
                <Text className="columnpaper2" as="h6" variant="h6">
                  Intranet.jpg
                </Text>
              </Column>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] text-black_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                Are you sure you want to remove permission?
              </Text>
              <Row className="items-center lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[66%]">
                <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]">
                  Keep
                </Button>
                <Button
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  variant="OutlineIndigo600"
                >
                  Remove
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { RemovePermissionModal };
