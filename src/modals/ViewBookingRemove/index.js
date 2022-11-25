import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button } from "components";
import { deleteSpaceresourcespaceideq24, deleteSpaceideq24 } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ViewBookingRemoveModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();

  function callApi1(data) {
    const req = {params: {id:`eq.${props.id}`}};

    deleteSpaceideq24(req)
      .then((res) => {
        setapiData1(res);

       toast.success("Deleted successfully!");
       props.onRequestClose()
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error Deleting, please retry!");
      });
  }
  function callApi() {

    const req = { params: { space_id: `eq.${props.id}` } };

    deleteSpaceresourcespaceideq24(req)
      .then((res) => {
        setapiData(res);

        callApi1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
                  Remove Space
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
                Are you sure you want to remove this Space?
              </Text>
              <Row className="items-center justify-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius8 w-[71%]">
                <Button
                  className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  onClick={props.onRequestClose}
                >
                  Keep
                </Button>
                <Button
                  className="common-pointer font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[43%]"
                  onClick={() => {
                    callApi();
                  }}
                  variant="OutlineIndigo600"
                >
                  Remove
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export { ViewBookingRemoveModal };
