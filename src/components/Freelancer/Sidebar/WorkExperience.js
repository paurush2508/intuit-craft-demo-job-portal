import React from "react";
import InputField from "./InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          handleChange={handleChange}
          value="Entry-level"
          title="Entry-level"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Intermediate"
          title="Intermediate"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Mid-level"
          title="Mid-level"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Senior-level"
          title="Senior-level"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
