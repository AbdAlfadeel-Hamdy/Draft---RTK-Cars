import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarValue: React.FC = () => {
  const totalValue = useSelector(({ cars: { cars, searchTerm } }: RootState) =>
    cars.reduce(
      (acc, car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
          ? acc + car.cost
          : acc,
      0
    )
  );

  return <div>{totalValue}</div>;
};

export default CarValue;
