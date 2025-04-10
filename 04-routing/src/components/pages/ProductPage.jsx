import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import pizzaData from "../../assets/pizza.json"
import PizzaCard from "../PizzaCard";
export default function ProductPage() {
    const [pizzaList, setPizzaList] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(id != undefined && isNaN(id)){
            navigate('/error',{replace : true})
        }
        setPizzaList(pizzaData);
    },[])
    return (
        <div className="text-white flex flex-wrap justify-center items-center gap-4 w-7/12">
            {pizzaList.map((pizza)=>(
                <PizzaCard key ={pizza.id} pizza={pizza}/>
            ))}
        </div>
    )
}