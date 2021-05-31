import React from "react";
import { Input } from "src/components/ui";
import { inputStyles, labelStyles } from "../constants";
import { RadioInputRenderProps } from "../types";

const RadioInputRender = (props: RadioInputRenderProps): JSX.Element => {
  const { placeholder, label, name, type, value, onChange } = props;

  return (
    <Input
      placeholder={placeholder}
      label={label}
      name={name}
      type={type}
      value={value}
      style={inputStyles}
      labelStyle={labelStyles}
      onChange={onChange}
    />
  );
};

export default RadioInputRender;
