import React, { useRef } from "react";
import ModalProvider from "react-modal";
import { supabase } from "../../util/supabase";

import {
  Column,
  Row,
  Text,
  Img,
  Input,
  TextArea,
  Button,
  SelectBox,
} from "components";
import * as yup from "yup";
import {
  getSpaceByID,
  postImagesjpeg,
  deleteSpaceresourcespaceideq24,
  getResourceselect,
  patchSpaceideq15,
  postSpaceresource,
  getSpaceresourceselectresourceidspaceideq15,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import { LoadingSpinner } from "../../components/LoadingSpinner";

const EditSpaceModal = (props) => {
  const inputRef = useRef(null);
  const resRef = useRef(null);
  const [apiData, setapiData] = React.useState();
  const [apiDataDelete, setapiDataDelete] = React.useState();
  const [apiDataEdit, setapiDataEdit] = React.useState();
  const [apiRes, setapiRes] = React.useState();
  const [resourceOption, setresourceOption] = React.useState();
  const [file, setFile] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState();
  const [apiData4, setapiData4] = React.useState();

  React.useEffect(() => {
    callApi();
    getResourceApi();
    callResourecApi();
  }, []);

  async function handleUpload() {
    const fileName = `${new Date().toISOString()}_${file?.name}`;
    const req = { fileName: fileName, file: file };
    postImagesjpeg(req)
      .then((res) => {
        //setapiData(res);

        callApi(data, res.Key);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callApiEdit(data) {
    const req = { data: { ...data } };

    patchSpaceideq15(req)
      .then((res) => {
        setapiDataEdit(res);
        callApiDelete();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error updating... Please retry!");
      });
  }
  function callApiDelete() {
    const req = { params: { space_id: `eq.${props.id}` } };

    deleteSpaceresourcespaceideq24(req)
      .then((res) => {
        setapiDataDelete(res);
        //toast.success("Updated Successfully!");
        callInsertUpdatedResource();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const resetFile = () => {
    inputRef.current.value = null;
    setFile("");
  };
  function callInsertUpdatedResource() {
    const req = {
      data: options?.map((index) => {
        return { space_id: props.id, resource_id: index };
      }),
    };
    postSpaceresource(req)
      .then((res) => {
        setapiData4(res);
        props.onRequestClose();
      })
      .catch((err) => {
        console.error(err);
        // toast.error("Something Bad Happened!");
      });
  }

  function callApi() {
    const req = { params: { select: "*", id: `eq.${props.id}` } };
    getSpaceByID(req)
      .then((res) => {
        setapiData(res);
        Object.keys(res?.[0]).map((key) => {
          return form.handleChange(key, res?.[0][key]);
        });
      })

      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }
  function dropdownOptionss(data) {
    const options = data?.map(({ resource_id, label }, index) => {
      return { value: resource_id, label: label?.resource };
    });
    return options;
  }
  function callResourecApi() {
    const req = {
      params: {
        select: "resource_id,label:resource_id(resource)",
        space_id: `eq.${props.id}`,
      },
    };
    setIsLoading(true);

    getSpaceresourceselectresourceidspaceideq15(req)
      .then((res) => {
        setapiRes(res);
        // dropdownOptions(res);
        setIsLoading(false);
      })

      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }

  const formValidationSchema = yup
    .object()
    .shape({ ["space_name"]: yup.string() });

  const form = useForm(
    {
      space_name: "",
      description: "",
      location: "",
      capacity: "",
      image_url: "",
      // resource_id: "",
    },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const formResource = useForm({
    resource_id: "",
  });

  // let fileUrl;
  // const handleUpload = async () => {
  //   const { data, error } = await supabase.storage
  //     .from("space-management")
  //     .upload("admin/" + file?.name, file);

  //   if (data) {
  //     fileUrl = `space-management/` + data.path;
  //     callApi(form?.values, fileUrl);
  //   } else if (error) {
  //   }
  // };

  function dropdownOptions(data) {
    const options = data?.map(({ id, resource }, index) => {
      return { value: id, label: resource };
    });
    return options;
  }

  function getResourceApi() {
    const req = {};

    getResourceselect(req)
      .then((res) => {
        setresourceOption(res);
        Object.keys(res?.[0]).map((key) => {
          return formResource.handleChange(key, res?.[0][key]);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ModalProvider
            appElement={document.getElementById("root")}
            className="m-[auto] w-[100%]"
            overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
            {...props}
          >
            <div className="m-[auto] max-h-[97vh] overflow-y-auto">
              <Column className="bg-white_A700 items-center justify-start lg:p-[101px] xl:p-[126px] 2xl:p-[142px] 3xl:p-[171px] rounded-radius12 shadow-bs1 w-[100%]">
                <Column className="bg-gray_101 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[42%]">
                  <Row className="items-end justify-between w-[96%]">
                    <Text className="rowuploadfile" as="h5" variant="h5">
                      Edit Space
                    </Text>
                    <Img
                      src="images/img_arrowright_24X24.svg"
                      className="common-pointer settings_One"
                      onClick={props.onRequestClose}
                      alt="arrowright"
                    />
                  </Row>
                </Column>
                <Column className="items-end justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] w-[35%]">
                  <Row className="items-center justify-between rounded-radius8 w-[98%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Space Name:
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 FirstName"
                      wrapClassName="w-[76%]"
                      type="text"
                      onChange={(e) => {
                        form.handleChange("space_name", e.target.value);
                      }}
                      errors={form?.errors?.["space_name"]}
                      value={form?.values?.["space_name"]}
                      name="EmailId"
                      placeholder="Enter Name"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBluegray50"
                    ></Input>
                  </Row>
                  <Row className="items-start justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[96%]">
                    <Text
                      className="font-medium xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Description:
                    </Text>
                    <TextArea
                      className="placeholder:text-gray_500 Group4000"
                      onChange={(e) => {
                        form.handleChange("description", e.target.value);
                      }}
                      value={form?.values?.description}
                      name="EmailId One"
                      placeholder="Write here.."
                      size="sm"
                    ></TextArea>
                  </Row>
                  <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[92%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Loaction:
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 FirstName"
                      wrapClassName="2xl:ml-[18px] 3xl:ml-[21px] lg:ml-[12px] w-[81%] xl:ml-[16px]"
                      onChange={(e) => {
                        form.handleChange("location", e.target.value);
                      }}
                      value={form?.values?.location}
                      name="EmailId Two"
                      placeholder="Enter Location"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBluegray50"
                    ></Input>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius6 w-[100%]">
                    <Text
                      className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Upload Image:
                    </Text>
                    <Column className="bg-bluegray_50 items-center justify-start outline outline-[2px] outline-indigo_600 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius6 w-[75%]">
                      {file ? (
                        <Img
                          src={URL.createObjectURL(file)}
                          className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="rewind"
                        />
                      ) : form?.values?.image_url ? (
                        <Img
                          src={`https://awmgldofkkbalduukncj.supabase.co/storage/v1/object/public/${form?.values?.image_url}`}
                          className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="rewind"
                        />
                      ) : (
                        <Img
                          src="images/img_location_30X30.svg"
                          className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="rewind"
                        />
                      )}
                      <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[83%]">
                        <Input
                          className="2xl:mt-[12px] 3xl:mt-[14px] flex items-center justify-center lg:mt-[8px] text-center w-[100%] xl:mt-[10px]"
                          leftIcon={
                            <Img
                              src="images/img_music.svg"
                              className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[5px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[7px]"
                              alt="music"
                            />
                          }
                          placeholder="select file"
                          variant="OutlineIndigo600"
                          type="file"
                          ref={inputRef}
                          accept="image/*"
                          id="file_input"
                          onChange={(e) => setFile(e.target.files[0])}
                          suffix={
                            <Img
                              src="images/img_arrowright_24X24.svg"
                              className="settings_One"
                              alt="arrowright One"
                              onClick={() => resetFile()}
                            />
                          }
                        >
                          <div className="bg-transparent font-normal not-italic xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                            Click to upload
                          </div>
                        </Input>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[93%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Capacity:
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 FirstName"
                      wrapClassName="2xl:ml-[18px] 3xl:ml-[21px] lg:ml-[12px] w-[81%] xl:ml-[16px]"
                      onChange={(e) => {
                        form.handleChange("capacity", e.target.value);
                      }}
                      value={form?.values?.capacity}
                      name="EmailId Three"
                      placeholder="Capacity to accomodate"
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="FillBluegray50"
                    ></Input>
                  </Row>
                  <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius8 w-[93%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Resources:
                    </Text>
                    <SelectBox
                      className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[79%]"
                      placeholderClassName=""
                      name="EmailId"
                      placeholder="Select the resources..."
                      isSearchable={true}
                      ref={resRef}
                      isMulti={true}
                      onChange={(e) => setOptions(e)}
                      value={dropdownOptionss(apiRes)}
                      // value= {[{value: 1, label: "Charging Point"}, {value: 3, label: "Table"}]}
                      // value={formResource?.values?.["resource_id"]}
                      options={dropdownOptions(resourceOption)}
                    ></SelectBox>
                  </Row>
                </Column>
                <Row className="items-center justify-center lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] rounded-radius8 w-[19%]">
                  <Button
                    className="common-pointer font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[46%]"
                    onClick={() => {
                      form.handleSubmit(callApiEdit);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[46%]"
                    variant="OutlineIndigo600"
                    onClick={props.onRequestClose}
                  >
                    Cancle
                  </Button>
                </Row>
              </Column>
            </div>
          </ModalProvider>
          <ToastContainer />
        </>
      )}
    </>
  );
};

export { EditSpaceModal };
