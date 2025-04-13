import { useState } from "react";

function PizzaCard({ pizza }) {
  const [isDescription, setDescription] = useState(false);
  const [selectedSize, setSize] = useState(30);
  const handleSizeChange = (size) => {
    setSize(size);
  };
  return (
    <div className="justify-center items-center flex flex-col gap-2 w-3/7 bg-gray-800 text-sky-200 p-4 rounded-lg shadow-lg border border-gray-700 m-4 ">
      <img src={pizza.image} className="object-fill h-60 width-full border" alt={pizza.name} />
      <div className="flex flex-col gap-4  w-full justify-center ">
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price} лей.</p>
        <div className="flex flex-row justify-center w-full">
          {pizza.sizes.map((size) => (
            <div className="w-full">
              <button
                className={size == pizza.sizes[pizza.sizes.indexOf(selectedSize)] ? ' border-1 p-3 w-full ' : 'border-1 p-3 w-full border-gray-700'}
                key={size}
                onClick={() => { handleSizeChange(size) }}
              >{size} см.</button>
            </div>
          ))}
        </div>
      </div>
      <button className="border-1 p-3 w-full">Добавить в корзину</button>
    </div>
  )
}

export default PizzaCard