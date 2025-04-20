import { useState } from "react";
import { NavLink } from "react-router";
import { deletePizza } from "../api/pizza";

/**
 * @component
 * @description PizzaCard Компонент карточки пиццы, отображает изображение, название, описание и цену пиццы.
 * @param {Object} pizza - Объект пиццы, содержащий информацию о ней.
 * @returns {JSX.Element} Компонент карточки пиццы.
 */function PizzaCard({ pizza, onDelete }) {
  const [isDescription, setDescription] = useState(false);
  const [selectedSize, setSize] = useState(30);

  const handleSizeChange = (size) => {
    setSize(size);
  };

  const deletePizzaData = async () => {
    try {
      await deletePizza(pizza.id);
      onDelete(pizza.id); // ⬅️ сообщаем родителю, что нужно удалить пиццу
    } catch (err) {
      console.log(err.message || 'Ошибка при удалении данных');
    }
  };

  return (
    <div className="justify-center items-center flex flex-col gap-2 w-3/7 bg-gray-800 text-sky-200 p-4 rounded-lg shadow-lg border border-gray-700 m-4 ">
      <img src={pizza.image} className="object-fill h-60 width-full border" alt={pizza.name} />
      <div className="flex flex-col gap-4 w-full justify-center">
        <div className="flex flex-row justify-between items-center w-full">
          <h2>{pizza.name}</h2>
          <div className="flex flex-row gap-2">
            <NavLink to={`/product/${pizza.id}`}>
              <img className="size-8" src="src/assets/10750642_info_information_help_communication_service_icon.png" alt="info" />
            </NavLink>
            <NavLink to={`/product/${pizza.id}/edit`}>
              <img className="size-8" src="src/assets/gear.png" alt="edit" />
            </NavLink>
            <button className="hover:cursor-pointer" onClick={deletePizzaData}>
              <img className="size-7" src="src/assets/trash.png" alt="delete" />
            </button>
          </div>
        </div>
        <p>{pizza.description}</p>
        <p>{pizza.price} лей.</p>
        <div className="flex flex-row justify-center w-full">
          {pizza.sizes.map((size) => (
            <div className="w-full" key={size}>
              <button
                className={size === selectedSize ? 'border-1 p-3 w-full hover:bg-sky-800' : 'border-1 p-3 w-full border-gray-700 hover:bg-sky-800'}
                onClick={() => handleSizeChange(size)}
              >
                {size} см.
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="border-1 p-3 w-full hover:bg-sky-800">Добавить в корзину</button>
    </div>
  );
}


export default PizzaCard