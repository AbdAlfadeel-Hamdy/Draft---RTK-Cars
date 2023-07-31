import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, changeSearchTerm } from "../store";

const CarSearch: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  const changeSearchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div>
      <div className="flex gap-2 ">
        <label htmlFor="name">Car Name</label>
        <input
          id="name"
          className="border border-slate-500"
          value={searchTerm}
          onChange={changeSearchTermHandler}
        />
      </div>
    </div>
  );
};

export default CarSearch;
