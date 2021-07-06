import React from "react";
import { Element } from "src/components/ui";
import { TextareaProps } from "./types";

const Textarea = (props: TextareaProps): JSX.Element => {
  const {
    styles,
    labelStyles,
    label,
    value,
    onChange,
    rows,
    cols,
    placeholder,
    name,
    className,
  } = props;

  return (
    <Element
      as="div"
      className={className ? `${className} textarea` : "textarea"}
      style={styles}
    >
      {label && (
        <label style={labelStyles} htmlFor={label}>
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        name={name}
      />
    </Element>
  );
};

export default Textarea;
