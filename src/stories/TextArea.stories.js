import { TextArea } from "components";
export default {
  title: "employee_portal/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "FillBluegray50",
  size: "md",
  placeholder: "placeholder",
};
