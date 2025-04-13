export default function AboutUs(){
    return (
        <div className="bg-gray-900 text-white" >
            <div className=" flex max-w-screen-xl px-4 mx-auto gap-8 py-16 flex-direction-row ">
            <div className="text-gray-400 text-xl">
                <h1 className="text-white text-4xl">About us page</h1>
                <p>We are a pizza company that sells the best pizza in the whole city</p>
                <ul>
                    <li className="flex flex-direction-row my-2">
                        <img className="size-12" src="src\assets\9951047_thanksgiving_mix_pizza_food_holiday_icon.png" alt="pizza choise?"/>
                        <p className="py-2">We have a lot of different types of pizza</p>
                    </li>
                    <li className="flex flex-direction-row my-2">
                        <img className="size-12" src="src\assets\discount.png" alt="pizza choise?"/>
                        <p className="py-2">Price cheaper tahn dominos</p>
                    </li>
                    <li className="flex flex-direction-row my-2">
                        <img className="size-12" src="src\assets\restaurant_sharp_icon_white.png" alt=" fork and knife"/>
                        <p className="py-2">We have a lot of different types of pizza</p>
                    </li>
                </ul>
            </div>
            <div className="">
                <img src="src\assets\presentation-concept-illustration.png" className="size-96"/>
            </div>
            </div>
        </div>
    )
}