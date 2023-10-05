import { useState } from "react";
import "./App.css";
import {
  FTextField,
  Size,
  Color,
  TextFieldType,
} from "./components/FTextfield";

function App() {
  const [textValue, setTextValue] = useState("Ciao");
  const [passwordValue, setPasswordValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(event?.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPasswordValue(event?.target.value);
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="box">
            <h2>TEXTFIELD COMPONENT</h2>
          </div>
          <div className="box">
            <h3>Sizes</h3>
            <div className="flex">
              <FTextField
                id="small-size-textfield"
                label="Small"
                size={Size.Small}
                value={textValue}
                updateValue={handleChange}
              />
              <p>{textValue}</p>
              <FTextField
                id="normal-size-textfield"
                label="Normal"
                size={Size.Normal}
              />
              <FTextField
                id="medium-size-textfield"
                label="Medium"
                size={Size.Medium}
              />
              <FTextField
                id="large-size-textfield"
                label="Large"
                size={Size.Large}
              />
            </div>
          </div>

          <div className="box">
            <h3>Attributes</h3>

            <div className="flex align-items-start">
              {/* <FTextField
                id="required-attr-textfield"
                label="Required"
                required
              />
              <FTextField
                id="disabled-attr-textfield"
                label="Disabled"
                disabled
              />
              <FTextField
                id="readonly-attr-textfield"
                label="Readonly"
                readonly
              /> */}
              <FTextField
                id="password-attr-textfield"
                label="Password"
                type={TextFieldType.Password}
                helperText="La password deve contenere almeno 8 caratteri, inclusi lettere maiuscole, minuscole, numeri e caratteri speciali"
                value={passwordValue}
                updateValue={handlePasswordChange}
              />
              <p>{passwordValue}</p>
              <FTextField
                id="searchfield-attr-textfield"
                label="Searchfield"
                type={TextFieldType.Search}
              />
              {/* <FTextField
                id="searchfield-attr-textfield"
                label="Helper Text"
                helperText="Some helper text"
              /> */}
            </div>
          </div>

          <div className="box">
            <h3>Colors</h3>

            <div className="flex">
              <FTextField id="normal-color-textfield" label="Normal" />
              <FTextField
                id="primary-color-textfield"
                label="Primary"
                color={Color.Primary}
              />
              <FTextField
                id="link-color-textfield"
                label="Link"
                color={Color.Link}
              />
              <FTextField
                id="info-color-textfield"
                label="Info"
                color={Color.Info}
              />
              <FTextField
                id="success-color-textfield"
                label="Success"
                color={Color.Success}
              />
              <FTextField
                id="warning-color-textfield"
                label="warning"
                color={Color.Warning}
              />
              <FTextField
                id="danger-color-textfield"
                label="Danger"
                color={Color.Danger}
              />
            </div>
          </div>

          {/* <div className="box">
            <h3>Borders</h3>

            <div className="flex">
              <FTextField id="normal-border-textfield" label="Normal" />
              <FTextField
                id="squared-border-textfield"
                label="Squared"
                border="squared"
              />
              <FTextField
                id="rounded-border-textfield"
                label="Rounded"
                border="rounded"
              />
            </div>
          </div> */}

          {/* <div className="box">
            <h3>Icons</h3>

            <div className="flex">
              <FTextField
                id="icon-left-textfield"
                label="Left Icon"
                icon-left="fa-regular fa-envelope"
              />
              <FTextField
                id="icon-right-textfield"
                label="Right Icon"
                icon-right="fa-regular fa-eye"
              />
              <FTextField
                id="icon-both-textfield"
                label="Left and Right Icon"
                icon-left="fa-regular fa-envelope"
                icon-right="fa-solid fa-check"
              />
            </div>
            <div className="flex">
              <FTextField
                id="icon-primary-textfield"
                label="Primary Icon"
                color={Color.Primary}
                icon-left="fa-regular fa-envelope"
              />
              <FTextField
                id="icon-info-textfield"
                label="Info Icon"
                color={Color.Info}
                icon-left="fa-regular fa-envelope"
              />
              <FTextField
                id="icon-fanger-textfield"
                label="Danger Icon"
                color={Color.Danger}
                icon-left="fa-regular fa-envelope"
              />
            </div>
            <div className="flex">
              <FTextField
                id="icon-small-textfield"
                label="Small Icon"
                size={Size.Small}
                icon-left="fa-regular fa-envelope"
              />
              <FTextField
                id="icon-medium-textfield"
                label="Medium Icon"
                size={Size.Medium}
                icon-left="fa-regular fa-envelope"
              />
              <FTextField
                id="icon-large-textfield"
                label="Large Icon"
                size={Size.Large}
                icon-left="fa-regular fa-envelope"
              />
            </div>
          </div> */}

          {/* <div className="box">
            <h3>Input value</h3>

            <div className="flex">
              <FTextField
                id="value-textfield"
                label="Reactive value"
              />
            </div>
            <p>Value of input</p>
          </div> */}

          {/* <div className="box">
            <h3>Floating label</h3>

            <div className="flex">
              <FTextField id="floating-textfield" label="Floating" floating />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default App;
