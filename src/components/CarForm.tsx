import { useSelector, useDispatch } from "react-redux";
import { RootState, addCar, changeCost, changeName } from "../store";

const CarForm: React.FC = () => {
  const { name, cost } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };
  const changeCostHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCost(+e.target.value || 0));
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !cost) return;
    dispatch(addCar({ name, cost }));
  };

  return (
    <form
      className="flex flex-col gap-2 w-80 bg-slate-200"
      onSubmit={submitFormHandler}
    >
      <div className="flex gap-2 ">
        <label htmlFor="name">Car Name</label>
        <input
          id="name"
          className="border border-slate-500"
          value={name}
          onChange={changeNameHandler}
        />
      </div>
      <div className="flex gap-2 ">
        <label htmlFor="cost">Car Cost</label>
        <input
          id="cost"
          className="border border-slate-500"
          // type="number"
          value={cost || ""}
          onChange={changeCostHandler}
        />
      </div>
      <button>Submit Form</button>
    </form>
  );
};

export default CarForm;
