import { useDispatch, useSelector } from "react-redux";
import { RootState, removeCar } from "../store";

const CarList: React.FC = () => {
  const { cars } = useSelector((state: RootState) => state.cars);
  const dispatch = useDispatch();

  const deleteCarHandler = (carId: string) => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars.map((car) => {
    return (
      <li key={car.id} className="flex gap-2 items-center">
        <h3>{car.name}</h3>
        <p>{car.cost}</p>
        <button onClick={() => deleteCarHandler(car.id!)}>Delete</button>
      </li>
    );
  });
  return <ul>{renderedCars}</ul>;
};

export default CarList;
