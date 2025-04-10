import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import pizzaData from "../../assets/pizza.json"
import PizzaCard from "../PizzaCard";
export default function ProductPage() {
    const [pizzaList, setPizzaList] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const isInvalidId = (id != undefined && isNaN(id)) || Number(id) < 0 || Number(id) >= pizzaData.length;
        if (isInvalidId) {
            navigate('/error', { replace: true })
            return;
        }

        setPizzaList(id === undefined ? pizzaData : pizzaData.filter((pizza) => pizza.id === Number(id)));
    }, [id, navigate])
    return (
        <div className="text-white flex flex-wrap justify-center items-center gap-4 w-7/12">
            {pizzaList.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
        </div>
    )
}
