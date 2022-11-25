import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder12: "rounded-radius12",
  RoundedBorder4: "rounded-radius4",
  icbRoundedBorder8: "rounded-radius8",
  icbRoundedBorder4: "rounded-radius4",
};
const variants = {
  FillIndigo600: "bg-indigo_600 text-white_A700",
  OutlineIndigo600: "border border-indigo_600 border-solid text-indigo_600",
  OutlineGray501: "border border-gray_501 border-solid text-gray_501",
  FillDeeporangeA200: "bg-deep_orange_A200 text-white_A700",
  FillGray302: "bg-gray_302 text-gray_502",
  OutlineIndigo6001_2:
    "bg-indigo_600_0a border border-indigo_600 border-solid text-indigo_600",
  FillBluegray50: "bg-bluegray_50",
  icbOutlineIndigo600: "border border-indigo_600 border-solid",
  icbOutlineBluegray5003d: "bg-white_A700 shadow-bs",
  icbFillIndigo100: "bg-indigo_100",
  icbFillIndigo200: "bg-indigo_200",
  icbFillIndigo600: "bg-indigo_600",
};
const sizes = {
  sm: "lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] p-[9px]",
  md: "2xl:p-[10px] 3xl:p-[12px] p-[14px] lg:p-[7px] xl:p-[9px]",
  lg: "lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] p-[21px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder12",
    "RoundedBorder4",
    "icbRoundedBorder8",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigo600",
    "OutlineIndigo600",
    "OutlineGray501",
    "FillDeeporangeA200",
    "FillGray302",
    "OutlineIndigo6001_2",
    "FillBluegray50",
    "icbOutlineIndigo600",
    "icbOutlineBluegray5003d",
    "icbFillIndigo100",
    "icbFillIndigo200",
    "icbFillIndigo600",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillIndigo600",
  size: "md",
};

export { Button };
