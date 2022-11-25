import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button } from "components";

const EmailFileModal = (props) => {
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
                  Email This File
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[14%]">
              <Img
                src="images/img_paper.png"
                className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[29%]"
                alt="Paper"
              />
              <Text
                className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Intranet.jpg
              </Text>
            </Row>
            <Column className="items-center justify-start xl:mb-[100px] 2xl:mb-[113px] 3xl:mb-[135px] lg:mb-[80px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[36%]">
              <Row className="items-center justify-between rounded-radius8 w-[100%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Send To
                </Text>
                <div className="bg-bluegray_50 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius8 w-[77%]"></div>
              </Row>
              <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                <Text
                  className="font-medium text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Subject
                </Text>
                <div className="bg-bluegray_50 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius8 w-[77%]"></div>
              </Row>
              <Row className="items-start justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[100%]">
                <Text
                  className="font-medium xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Message
                </Text>
                <div className="bg-bluegray_50 3xl:h-[107px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] rounded-radius8 w-[77%]"></div>
              </Row>
              <Row className="items-center justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius8 w-[57%]">
                <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]">
                  Send
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
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { EmailFileModal };
