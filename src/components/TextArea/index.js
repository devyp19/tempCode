import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { FillBluegray50: "bg-bluegray_50 border-0" };
const shapes = { RoundedBorder8: "rounded-radius8" };
const sizes = {
  sm: "lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] pb-[35px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] pt-[16px] lg:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[8px]",
  md: "xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px] lg:p-[9px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillBluegray50"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder8",
  variant: "FillBluegray50",
  size: "md",
};
export { TextArea };
