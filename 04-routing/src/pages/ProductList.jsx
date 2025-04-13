import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import pizzaData from "../assets/pizza.json"
import PizzaCard from "../components/PizzaCard";
import Search from "../components/Search";
export default function ProductList() {
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
        <div className="container flex flex-col items-center justify-center pb-5">
            <Search onSearch={handleSearchChange}/>
            <div className="text-white flex flex-wrap justify-center items-center gap-4 w-7/12">
                {filteredPizzaList.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}