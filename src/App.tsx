import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App: React.FC = () => {
  return (
    <div className="p-10">
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
};

export default App;
