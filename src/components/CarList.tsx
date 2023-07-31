import { useDispatch, useSelector } from "react-redux";
import { RootState, removeCar } from "../store";

const CarList: React.FC = () => {
  const { cars, name } = useSelector(
    ({ cars: { cars, searchTerm }, form: { name } }: RootState) => ({
      cars: cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      name,
    })
  );
  const dispatch = useDispatch();

  const deleteCarHandler = (carId: string) => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars.map((car) => {
    return (
      <li
        key={car.id}
        className={`flex gap-2 items-center duration-200 ${
          name &&
          car.name.toLowerCase().includes(name.toLowerCase()) &&
          "text-bold"
        }`}
      >
        <h3>{car.name}</h3>
        <p>{car.cost}</p>
        <button onClick={() => deleteCarHandler(car.id!)}>Delete</button>
      </li>
    );
  });

  return <ul>{renderedCars}</ul>;
};

export default CarList;
