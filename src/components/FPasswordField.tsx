import { useState } from "react";
import { Props } from "./FTextfield";
import IconEyeSlash from "../icons/IconEyeSlach";
import IconEye from "../icons/IconEye";

type TProps = Partial<Props> & {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function FPasswordField({ id, value, handleChange }: TProps) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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
    <>
      <input id={id} value={value} type={passwordVisible ? "text" : "password"} onChange={handleChange} />
      <button className="icon right" onClick={handlePasswordIconClick}>
        {getPasswordIcon()}
      </button>
    </>
  );
}
