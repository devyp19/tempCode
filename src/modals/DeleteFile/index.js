import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button } from "components";

const DeleteFileModal = (props) => {
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
                  Delete File
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mb-[198px] xl:mb-[248px] 2xl:mb-[279px] 3xl:mb-[335px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[27%]">
              <Column className="items-center justify-start w-[22%]">
                <Img
                  src="images/img_paper_90X69.png"
                  className="lg:h-[48px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] w-[100%]"
                  alt="Paper"
                />
                <Text
                  className="font-medium 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-gray_601 w-[auto]"
                  variant="body2"
                >
                  Intranet.jpg
                </Text>
              </Column>
              <Text
                className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-black_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                Are you sure you want to delete this file?
              </Text>
              <Row className="items-center justify-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[74%]">
                <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]">
                  Keep
                </Button>
                <Button
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  variant="OutlineIndigo600"
                >
                  Delete
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { DeleteFileModal };
