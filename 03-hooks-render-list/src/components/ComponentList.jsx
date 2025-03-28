import ComponentCard from "./ComponentCard";
import pizzaData from "../assets/pizza.json"
import { useEffect, useState } from "react";
import Search from "./Search";

/**
 * @component
 * @description Данный компонент рендерит список пицц с возможностью поиска по названию.
 * @returns {JSX.Element}
 */
function ComponentList() {
  const [pizzaList, setPizzaList] = useState([]);
  const [filteredPizzaList, setFilteredPizzaList] = useState([]);

  useEffect(() => {
    setPizzaList(pizzaData)
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
          <div className="col-4 mb-3">
            <ComponentCard key={pizza.id} pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentList