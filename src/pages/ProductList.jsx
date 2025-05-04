import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import pizzaData from "../assets/pizza.json"
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
    const [loading, setLoading] = useState(false); // флаг загрузки
    const [error, setError] = useState(null); // сообщение об ошибке или null

    const fetchPizzaData = async () => {
        try {
            setLoading(true); // начинаем загрузку
            setError(null); // очищаем прошлые ошибки
            const response = await fetchPizza(); // получаем данные с сервера
            setPizzaList(response); // сохраняем полученные данные
            setPizzaData(response)
        } catch (err) {
            setError(err.message || 'Ошибка при загрузке данных'); // сохраняем текст ошибки
        } finally {
            setLoading(false); // отключаем индикатор загрузки
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

    return (
        <div className="container flex flex-col items-center justify-center pb-5">
            <div className="flex flex-row justify-between items-center w-full mt-5 mb-5">
                <Search onSearch={handleSearchChange} />
                <NavLink className="bg-sky-900 text-sky-200 hover:bg-sky-800 font-medium rounded-lg text-base h-14 w-37 px-4 align-middle pt-4 font-semibold" to="/product/create" >Add Product</NavLink>
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