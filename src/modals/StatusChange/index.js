import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button } from "components";

const StatusChangeModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[322px] xl:p-[402px] 2xl:p-[453px] 3xl:p-[543px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[90%]">
              <Row className="items-end justify-between w-[96%]">
                <Text className="rowuploadfile" as="h5" variant="h5">
                  Update Employee Status
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="common-pointer settings_One"
                  onClick={props.onRequestClose}
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] rounded-radius8 w-[46%]">
              <Text
                className="font-medium text-black_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                Are you sure you want to update Employee Status?
              </Text>
              <Row className="items-center justify-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius8 w-[71%]">
                <Button
                  className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  onClick={props.handleSwitchChange}
                >
                  Update
                </Button>
                <Button
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  variant="OutlineIndigo600"
                  onClick={props.onRequestClose}
                >
                  Cancel
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { StatusChangeModal };
