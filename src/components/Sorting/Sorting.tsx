import React, { FC } from "react";
import { SortingProps, Sort } from "./types";
import "./styles.scss";

const Sorting: FC<SortingProps> = ({ onSort }) => {
  return (
    <div className="sorting">
      <div>Sort By:</div>
      <select className="sorting__select" onChange={onSort}>
        <option value={Sort.name}>{Sort.name}</option>
        <option value={Sort.email}>{Sort.email}</option>
        <option value={Sort.location}>{Sort.location}</option>
      </select>
    </div>
  );
};

export default Sorting;
