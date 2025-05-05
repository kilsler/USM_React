import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cart/slice";

/**
 * @description CartPage Компонент для отображения страницы "Корзина".
 * @returns {JSX.Element}
 */
export default function CartPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const handleDelete = (id, size) => {
        dispatch(removeFromCart({ id, size }));
    };
    const handleUpdate = (id, size, quantity) => {
        dispatch(updateQuantity({ id, size, quantity }));
    };
    return (
        <section className="bg-gray-900">
            <div className="grid max-w-screen-xl px-4 mx-auto gap-8 py-16 grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">
                        Shopping Cart

                    </h1>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex flex-row justify-between items-center w-full bg-gray-800 text-sky-200 p-4 rounded-lg shadow-lg border border-gray-700 m-4">
                                <div className="flex flex-wrap justify-center items-center gap-4 w-full">
                                    <h2>{item.name}</h2>
                                    <p>Size: {item.size}</p>
                                    <p>Price: {item.price} лей.</p>
                                    <div className=" flex flex-row gap-4 items-center">
                                        <button className=" bg-sky-900 hover:bg-sky-800 hover:cursor-pointer focus:bg-sky-600 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleUpdate(item.id, item.size, item.quantity + 1)}>
                                            +
                                        </button>
                                        Quantity: {item.quantity}
                                        <button className="bg-sky-900 hover:bg-sky-800 hover:cursor-pointer focus:bg-sky-600 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleUpdate(item.id, item.size, item.quantity - 1)}>
                                            -
                                        </button>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(item.id, item.size)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button>
                            </div>

                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center w-full bg-gray-800 text-sky-200 p-4 rounded-lg shadow-lg border border-gray-700 m-4">
                            <h2>Your cart is empty</h2>
                        </div>
                    )}
                    <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">
                        Total : {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} лей.
                    </h1>
                </div>
            </div>
        </section>
    )

}