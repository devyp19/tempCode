import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Input, Button } from "components";

const RenameFileModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[210px] xl:p-[262px] 2xl:p-[295px] 3xl:p-[354px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[59%]">
              <Row className="items-center justify-between w-[95%]">
                <Text
                  className="font-bold text-black_901 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Rename File
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Row className="items-center justify-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[37%]">
              <Text
                className="font-medium text-black_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                File Name
              </Text>
              <Input
                className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-gray_503 text-gray_503 w-[100%]"
                wrapClassName="2xl:ml-[22px] 3xl:ml-[27px] lg:ml-[16px] w-[75%] xl:ml-[20px]"
                name="GroupThirtySix"
                placeholder="Intranet"
                shape="RoundedBorder8"
                size="lg"
                variant="FillBluegray50"
              ></Input>
            </Row>
            <Row className="items-center justify-center lg:mb-[228px] xl:mb-[286px] 2xl:mb-[321px] 3xl:mb-[386px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] rounded-radius8 w-[20%]">
              <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]">
                Save
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                onClick={props.onRequestClose}
                variant="OutlineIndigo600"
              >
                Cancel
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { RenameFileModal };
