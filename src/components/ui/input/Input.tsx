import React from "react";
import { Element } from "src/components/ui";

const Input = (props): JSX.Element => {
  const { placeholder, label, onChange, name, type, style, value, labelStyle } =
    props;
  return (
    <Element as="div" className="input" style={style}>
      {label && (
        <label style={labelStyle} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
        value={value}
      />
    </Element>
  );
};

export default Input;
