import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PizzaCard from "../components/PizzaCard";
import Search from "../components/Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { fetchPizza } from "../api/pizza";
import ProductForm from "./ProductForm";
import { NavLink } from "react-router";
/**
 * @description ProductList Компонент для отображения списка пицц с возможностью поиска.
 * @returns {JSX.Element}
 */
export default function ProductList() {
    const [pizzaData, setPizzaData] = useState([]);
    const [pizzaList, setPizzaList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [maxPrice, setMaxPrice] = useState("");
    const [sortOrder, setSortOrder] = useState(null);

    const fetchPizzaData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetchPizza();
            setPizzaList(response);
            setPizzaData(response)
        } catch (err) {
            setError(err.message || 'Ошибка при загрузке данных');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPizzaData();
    }, [])
    const handleSearchChange = (query) => {
        const filteredList = pizzaData.filter((pizza) =>
            pizza.name.toLowerCase().includes(query.toLowerCase())
        );
        setPizzaList(filteredList);
    }
    const handleDelete = (id) => {
        const updatedList = pizzaList.filter((pizza) => pizza.id !== id);
        setPizzaList(updatedList);
    };

    const applyFilters = (query, max, order) => {
        let filtered = [...pizzaData];

        if (query) {
            filtered = filtered.filter((pizza) =>
                pizza.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (max !== "") {
            const maxVal = parseFloat(max);
            if (!isNaN(maxVal)) {
                filtered = filtered.filter((pizza) => pizza.price <= maxVal);
            }
        }

        if (order === "asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (order === "desc") {
            filtered.sort((a, b) => b.price - a.price);
        }

        setPizzaList(filtered);
    };

    const handleMaxPriceChange = (e) => {
        const value = e.target.value;
        setMaxPrice(value);
        applyFilters("", value, sortOrder);
    };

    const handleSort = (order) => {
        setSortOrder(order);
        applyFilters("", maxPrice, order);
    };
    return (
        <div className="container flex flex-col items-center justify-center pb-5">
            <div className="flex flex-row justify-between items-center w-full mt-5 mb-5">
                <Search onSearch={handleSearchChange} />
                <NavLink className="bg-sky-900 text-sky-200 hover:bg-sky-800 font-medium rounded-lg text-base h-14 w-37 px-4 align-middle pt-4 font-semibold" to="/product/create" >Add Product</NavLink>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6 ">
                <input
                    type="number"
                    placeholder="Макс. цена"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 "
                />
                <button onClick={() => handleSort("asc")} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg" >
                    Sort by price ↑
                </button>
                <button onClick={() => handleSort("desc")} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    Sort by price ↓
                </button>
            </div>
            <div className="text-white flex flex-wrap justify-center items-center gap-4 w-7/12">
                {loading ?
                    <div className="justify-center items-center flex flex-col gap-2 w-3/7 bg-gray-800 text-sky-200 p-4 rounded-lg shadow-lg border border-gray-700 m-4 ">
                        <div className="flex flex-col gap-4  w-full justify-center ">
                            <Skeleton height={200} baseColor="#2a2a2a" highlightColor="#044993" containerClassName="flex-1" />
                            <div className="flex flex-row justify-between items-center w-full">
                                <Skeleton height={40} baseColor="#2a2a2a" highlightColor="#044993" containerClassName="flex-1" />
                            </div>
                            <p><Skeleton height={40} baseColor="#2a2a2a" highlightColor="#044993" containerClassName="flex-1" /></p>
                            <p><Skeleton height={40} baseColor="#2a2a2a" highlightColor="#044993" containerClassName="flex-1" /></p>
                            <div className="flex flex-row justify-center w-full">
                                <Skeleton height={40} baseColor="#2a2a2a" highlightColor="#044993" containerClassName="flex-1" />
                            </div>
                        </div>
                    </div>
                    : (pizzaList.map((pizza, index) => (
                        <PizzaCard key={index} pizza={pizza} onDelete={handleDelete} />
                    )))}
            </div>
        </div>
    )
}