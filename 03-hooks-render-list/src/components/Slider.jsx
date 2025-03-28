import { use, useEffect, useState } from "react"
import pizzaData from "../assets/pizza.json"

/**
 * @component
 * @description Компонент слайдера для отображения пиццы.
 * @param {object} pizza - объект с данными о пицце 
 * @returns 
 */
function Slider({ pizza }) {
  const [currentSlide, setSlide] = useState(0);
  const [currentSize, setSize] = useState(0);

  const previousSlide = () => {

    setSlide((prev) => prev - 1);
    console.log("previous slide" + currentSlide);
  }
  const nextSlide = () => {
    setSlide((prev) => prev + 1);
    console.log("next slide" + currentSlide);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % pizzaData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <div className=" mb-3 w-auto ml-5 mr-50 p-3 row justify-content-evenly bg-body-secondary mt-5">
          <div className="col-4 " >
            <img className="col-4" style={{ width: 30 + 'rem', height: 25 + 'rem' }} src={pizzaData[currentSlide].image} alt={pizzaData[currentSlide].name} />
          </div>
          <div className="col-4">
            <h5 className="display-6">{pizzaData[currentSlide].name}</h5>
            <p className="lead">{pizzaData[currentSlide].description}</p>
            <p className="lead">{pizzaData[currentSlide].price} лей.</p>
            <div className="btn-group">
              {pizzaData[currentSlide].sizes.map((size) => (
                <button
                  className={size == pizzaData[currentSlide].sizes[currentSize] ? "btn btn-success" : "btn btn-outline-success"}
                  onClick={() => {
                    setSize(pizzaData[currentSlide].sizes.indexOf(size)
                    )
                    console.log("size" + currentSize);
                  }
                  }
                  key={size}>{size} см.</button>
              ))}
            </div>
            <br />
            <button className="btn btn-success mt-3" onClick={() => alert("Pizza added to cart")}>
              Добавить в корзину
            </button>
            <br />
            <div className="btn-group mt-3">

              <button className="btn btn-warning" onClick={previousSlide} disabled={currentSlide === 0}>
                Назад
              </button>

              <button className="btn btn-warning" onClick={nextSlide} disabled={currentSlide === pizzaData.length - 1}>
                Вперед
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Slider