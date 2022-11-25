import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillBluegray50: "bg-bluegray_50",
  FillGray101: "bg-gray_101",
  FillIndigo600: "bg-indigo_600",
  OutlineGray300: "bg-gray_101 border border-gray_300 border-solid",
  srcFillBluegray50: "bg-bluegray_50",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "xl:pb-[12px] 2xl:pb-[13px] 3xl:pb-[16px] pb-[18px] lg:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] px-[13px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px]",
  md: "3xl:p-[11px] p-[13px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  lg: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
  xl: "lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] pb-[35px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[15px] pt-[17px] lg:pt-[9px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[15px] px-[17px] lg:px-[9px]",
  "2xl":
    "3xl:pb-[10px] pb-[12px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] xl:pt-[12px] 2xl:pt-[13px] 3xl:pt-[16px] pt-[18px] lg:pt-[9px] 3xl:px-[10px] px-[12px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px]",
  "3xl":
    "lg:p-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] px-[19px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20px]",
  "4xl": "lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] pb-[22px]",
  smSrc:
    "3xl:pb-[10px] pb-[12px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] pt-[15px] lg:pt-[8px] 3xl:px-[10px] px-[12px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      disabled,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""} ${disabled ? "opacity-[70%]" : ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder4",
    "srcRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray50",
    "FillGray101",
    "FillIndigo600",
    "OutlineGray300",
    "srcFillBluegray50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
