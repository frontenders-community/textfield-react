// 0. HTML structure
// 1. Attributes
// 2. Events handling
// 3. Errors handling
// 4. Helper text

import { useState } from "react";
import IconEye from "../icons/IconEye";
import "./FTextfield.css";
import IconEyeSlash from "../icons/IconEyeSlach";

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
}

interface Props {
  id: string;
  label: string;
  color?: Color;
  size?: Size;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type?: TextFieldType;
  helperText?: string;
}

export function FTextField({
  id,
  label,
  size,
  color,
  helperText,
  type = TextFieldType.Text,
}: Props) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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

  function getPasswordIcon() {
    if (passwordVisible) {
      return <IconEyeSlash />;
    } else {
      return <IconEye />;
    }
  }

  function handlePasswordIconClick() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className={getTextfieldClass()}>
      <div className={getControlClasses()}>
        {type === TextFieldType.Password ? (
          <>
            <input id={id} type={passwordVisible ? "text" : "password"} />
            <button className="icon right" onClick={handlePasswordIconClick}>
              {getPasswordIcon()}
            </button>
          </>
        ) : (
          <input id={id} type={type} />
        )}
      </div>
      <label htmlFor={id}>{label}</label>

      {helperText && <div className="helper-text">{helperText}</div>}
    </div>
  );
}
