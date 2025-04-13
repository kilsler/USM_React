import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import pizzaData from "../assets/pizza.json"
import PizzaCard from "../components/PizzaCard";
export default function ProductPage() {
    const { id } = useParams();
    const [selectedSize, setSize] = useState(30);
    const handleSizeChange = (size) => {
        setSize(size);
    }
        
    const navigate = useNavigate();
    const pizza = pizzaData.find((pizza) => pizza.id === Number(id));
    useEffect(() => {
        const isInvalidId = (id != undefined && isNaN(id)) || Number(id) < 0 || Number(id) >= pizzaData.length;
        if (isInvalidId) {
            navigate('/error', { replace: true })
            return;
        }
    }, [id, navigate])
    return (
        <div className="text-white flex flex-wrap justify-center items-center gap-4 w-7/12">  
            <section className="bg-gray-900">
                <div className="grid max-w-screen-xl px-4 mx-auto gap-8 py-16 grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">{pizza.name}</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-400 mb-8 text-xl">{pizza.description}</p>
                        <p className="text-xl">Цена : {pizza.price} лей.</p>
                        <div className="flex flex-row justify-center w-full">
                            {pizza.sizes.map((size) => (
                              <div className="w-full">
                                <button
                                  className={size == pizza.sizes[pizza.sizes.indexOf(selectedSize)] ? ' border-1 p-3 w-full active:bg-gray-500' : 'border-1 p-3 w-full border-gray-700'}
                                  key={size}
                                  onClick={() => { handleSizeChange(size) }}
                                >{size} см.</button>
                              </div>
                            ))}
                        </div>
                        <button className="border-1 p-3 w-full mt-2 active:bg-gray-500">Добавить в корзину</button>
                    </div>  
                    <div className="mt-0 col-span-5 flex">
                        <img src={pizza.image} alt="pizza??"/>
                    </div> 

                </div>
            </section>
        </div>

        
    )
}