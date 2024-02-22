import React from "react";
import InputField from "./InputField";

const Skillset = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Relevant Skills</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="React.js"
          title="React.js"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Python"
          title="Python"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="DevOps"
          title="DevOps"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Javascript"
          title="Javascript"
          name="test"
        />
      </div>
    </div>
  );
};

export default Skillset;
