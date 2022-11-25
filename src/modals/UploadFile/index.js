import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button, Input } from "components";

const UploadFileModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-gray_101 items-center justify-start lg:p-[169px] xl:p-[211px] 2xl:p-[237px] 3xl:p-[285px] rounded-radius12 shadow-bs1 w-[100%]">
            <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[50%]">
              <Row className="items-end justify-between w-[96%]">
                <Text className="rowuploadfile" as="h5" variant="h5">
                  Upload File
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="settings_One"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Row className="items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[auto]">
              <Text
                className="font-medium text-black_901 w-[auto]"
                as="h5"
                variant="h5"
              >
                Upload select the file{" "}
              </Text>
              <Input
                wrapClassName="w-[32%]"
                type="file"
                name="file"
                placeholder="Select File"
                shape="RoundedBorder8"
                size="lg"
                accept="xlsx,xls"
              ></Input>
            </Row>
            <Row className="items-center justify-center lg:mb-[147px] xl:mb-[184px] 2xl:mb-[207px] 3xl:mb-[248px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rounded-radius8 w-[18%]">
              <Button className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]">
                Submit
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

export { UploadFileModal };
