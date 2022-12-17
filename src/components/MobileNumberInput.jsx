import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const MobileNumberInput = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      className="text-xl input input-bordered shadow-sm"
    />
  );
};

export default MobileNumberInput;
