import React from "react";
import Select from "react-select";

import "./MainFilter.scss";

const SelectionList = ({ label, name, optionList, defaultValue, onChange }) => {
  return (
    <div className="filter__selection__g">
      <label className="filter__selection__title">{label}</label>
      <Select
        name={name}
        id={name}
        className="filter__selection__list"
        options={optionList}
        defaultValue={defaultValue}
        onChange={onChange}
        value=""
      />
    </div>
  );
};

export default SelectionList;
