import pizzaData from "../assets/pizza.json"
import { useEffect, useState } from "react";
import Search from "./Search";
import PizzaCard from "./PizzaCard";

/**
 * @component
 * @description Данный компонент рендерит список пицц с возможностью поиска по названию.
 * @returns {JSX.Element}
 */
function PizzaList() {
  const pizzaList = pizzaData;
  const [filteredPizzaList, setFilteredPizzaList] = useState([]);

  useEffect(() => {
    setFilteredPizzaList(pizzaData);
  }, [])

  const handleSearchChange = (query) => {
    const filteredList = pizzaList.filter((pizza) =>
      pizza.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPizzaList(filteredList);
  }

  return (
    <div className="container bg-body-secondary  mx-auto p-5 row">
      <h1 className="text-center">Pizza List</h1>
      <Search onSearch={handleSearchChange} />
      <div className="container bg-body-secondary  mx-auto p-5 row">
        {filteredPizzaList.map((pizza) => (
          <div key={pizza.id} className="col-4 mb-3">
            <PizzaCard key={pizza.id} pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PizzaList