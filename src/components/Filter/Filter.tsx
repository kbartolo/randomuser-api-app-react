import React, { FC } from "react";
import { FilterProps } from "./types";
import "./styles.scss";

const Filter: FC<FilterProps> = ({ onFilter }) => {
  return (
    <div className="filter">
      <div>Filter users(Name or email):</div>
      <input
        type="text"
        placeholder="Search user"
        onChange={onFilter}
        className="filter__input"
      />
    </div>
  );
};

export default Filter;
