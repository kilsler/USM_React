import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchPizzaById } from "../api/pizza";
/**
 * @description ProductPage Компонент для отображения страницы продукта (пиццы).
 * @returns {JSX.Element}
 */
export default function ProductPage() {
    const { id } = useParams();
    const [pizzaData, setPizzaData] = useState(null);
    const [selectedSize, setSize] = useState(30);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSizeChange = (size) => {
        setSize(size);
    };

    useEffect(() => {
        const isInvalidId = (id !== undefined && isNaN(id)) || Number(id) < 0;
        if (isInvalidId) {
            navigate('/error', { replace: true });
            return;
        }
        const fetchPizzaData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetchPizzaById(id);
                setPizzaData(response);
            } catch (err) {
                setError(err.message || 'Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };
        fetchPizzaData();
    }, [id, navigate]);

    return (
        <div className="text-white flex flex-wrap justify-center items-center gap-4 w-7/12">
            <section className="bg-gray-900">
                <div className="grid max-w-screen-xl px-4 gap-8 py-16 grid-cols-12 mx-auto">
                    <div className="mr-auto place-self-center col-span-6">
                        <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">
                            {loading ? <Skeleton width={300} baseColor="#2a2a2a" highlightColor="#044993" /> : pizzaData?.name}
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-400 mb-8 text-xl">{loading ? <Skeleton count={2} baseColor="#2a2a2a" highlightColor="#044993" /> : pizzaData?.description}</p>
                        {loading ? <Skeleton height={25} baseColor="#2a2a2a" highlightColor="#044993" /> : <p className="text-xl">Цена : {pizzaData?.price} лей.</p>}
                        <div className="flex flex-row justify-center  w-full mt-4">
                            {loading ? <Skeleton containerClassName="flex-1" height={50} baseColor="#2a2a2a" highlightColor="#044993" /> : pizzaData?.sizes.map((size) => (
                                <div className="w-full">
                                    {loading ? <Skeleton count={3} baseColor="#2a2a2a" highlightColor="#044993" /> : (
                                        <button
                                            className={size == pizzaData?.sizes[pizzaData?.sizes.indexOf(selectedSize)] ? ' border-1 p-3 w-full active:bg-gray-500 hover:bg-sky-800' : 'border-1 p-3 w-full border-gray-700 hover:bg-sky-800'}
                                            key={size}
                                            onClick={() => { handleSizeChange(size) }}
                                        >{size} см.</button>
                                    )}
                                </div>
                            ))}
                        </div>
                        {loading ? <Skeleton height={50} baseColor="#2a2a2a" highlightColor="#044993" /> : <button className="border-1 p-3 w-full mt-2 hover:bg-sky-800 active:bg-gray-500"> Добавить в корзину</button>}
                    </div>
                    <div className="mt-0 col-span-6 flex justify-center items-center">
                        {loading ? <Skeleton containerClassName="flex-1" width={400} height={350} baseColor="#2a2a2a" highlightColor="#044993" /> : (
                            <img src={pizzaData?.image} alt="pizza??" />
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
}
