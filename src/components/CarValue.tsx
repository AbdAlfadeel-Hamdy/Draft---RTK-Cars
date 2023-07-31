import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarValue: React.FC = () => {
  const totalValue = useSelector((state: RootState) =>
    state.cars.cars.reduce((acc, cur) => acc + cur.cost, 0)
  );
  return <div>{totalValue}</div>;
};

export default CarValue;
