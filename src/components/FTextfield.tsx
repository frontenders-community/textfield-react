// 0. HTML structure
// 1. Attributes
// 2. Events handling
// 3. Errors handling
// 4. Helper text

import { useState } from "react";
import { FPasswordField } from "./FPasswordField";
import "./FTextfield.css";

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Normal = "normal",
}

export enum Color {
  Primary = "primary",
  Info = "info",
  Link = "link",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

export enum TextFieldType {
  Email = "email",
  Password = "password",
  Search = "search",
  Tel = "tel",
  Text = "text",
  Url = "url",
  Number = "number",
}

export interface Props {
  id: string;
  label: string;
  value?: string | number;
  color?: Color;
  size?: Size;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type?: TextFieldType;
  helperText?: string;
  updateValue?: React.Dispatch<React.SetStateAction<any>>;
}

export function FTextField({
  id,
  label,
  value,
  size,
  color,
  helperText,
  updateValue,
  type = TextFieldType.Text,
}: Props) {
  const [focus, setFocus] = useState(false);

  function getControlClasses() {
    let classes = ["control"];
    if (size) {
      classes.push(size);
    }
    return classes.join(" ");
  }

  function getTextfieldClass() {
    let classes = ["textfield"];

    if (color) {
      classes.push(color);
    }

    return classes.join(" ");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (updateValue) {
      updateValue(event);
    }
  }

  return (
    <div className={getTextfieldClass()}>
      <div className={getControlClasses()}>
        {type === TextFieldType.Password ? (
          <FPasswordField id={id} value={value} handleChange={handleChange} />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={() => setFocus(!focus)}
          />
        )}
      </div>
      <label htmlFor={id}>{label}</label>

      {helperText && <div className="helper-text">{helperText}</div>}
    </div>
  );
}
