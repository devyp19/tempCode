import { CheckBox } from "components";
export default {
  title: "employee_portal/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder2",
  variant: "OutlineBluegray101",
  size: "sm",
  inputClassName: "mr-1",
};
