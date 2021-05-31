import React from "react";
import { Element } from "src/components/ui";

const Input = (props): JSX.Element => {
  const { placeholder, label, onChange, name, type } = props;
  return (
    <Element as="div" className="input">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
      />
    </Element>
  );
};

export default Input;
