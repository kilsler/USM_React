import { useState } from "react";


/**
 * @component 
 * @description Компонент карточки пиццы.
 * @param {object} pizza - объект пиццы, содержащий информацию о ней.
 * @returns {JSX.Element}
 */
function PizzaCard({ pizza }) {
  const [selectedSize, setSize] = useState(30);
  const handleSizeChange = (size) => {
    console.log("size", size);
    setSize(size);
  };
  return (
    <div className="card cl mt-2" style={{ width: 20 + 'rem', height: 30 + 'rem' }}>
      <img src={pizza.image} className="card-img-top" style={{ width: 0 + 'auto', height: 27 + 'vh', objectFit: "fill" }} alt={pizza.name} />
      <div className="card-body pb-0">
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price} лей.</p>
      </div>
      <div className="btn-group">
        {pizza.sizes.map((size) => (
          <button
            key={size}
            className={size == pizza.sizes[pizza.sizes.indexOf(selectedSize)] ? "btn btn-success" : "btn btn-outline-success"}
            onClick={() => { console.log(size); handleSizeChange(size) }}>{size} см.</button>
        ))}
      </div>
      <button className="btn btn-warning"
        onClick={() => alert("Pizza added to cart")}
        style={{ opacity: .85 }} >
        Добавить в корзину
      </button>
    </div>
  )
}

export default PizzaCard;