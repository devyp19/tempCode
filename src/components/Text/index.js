import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px]",
  h2: "font-normal lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]",
  h3: "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px]",
  h4: "xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] lg:text-[9px]",
  h5: "xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[8px]",
  h6: "2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]",
  body1:
    "font-medium 3xl:text-[11px] text-[12.33px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
  body2:
    "text-[10px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
