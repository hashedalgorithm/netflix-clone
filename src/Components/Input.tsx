import React, { useState } from "react";
import "./Input.css";
type props = {
  placeholder: string;
  name: string;
  label: string;
  value: string;
};
function Input({ placeholder, name, label, value }: props) {
  const [email, setEmail] = useState(value);

  const hanldeChange = (value: string) => {
    setEmail(value);
  };

  return (
    <>
      <div className="form__group field">
        <input
          type="email"
          className="form__field"
          placeholder={`${placeholder ? placeholder : "Name"}`}
          name={`${name ? name : "name"}`}
          value={email}
          onChange={(e) => {
            hanldeChange(e.target.value);
          }}
          required
        />
        <label htmlFor={`${name ? name : "name"}`} className="form__label">
          {label}
        </label>
        {email.length !== 0 ? (
          ""
        ) : (
          <p className="emailerror">Email is required</p>
        )}
      </div>
    </>
  );
}

export default Input;
