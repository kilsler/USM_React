import { NavLink } from "react-router";

export default function HomePage(){
    return(
        <> 
            <section className="bg-gray-900">
                <div className="grid max-w-screen-xl px-4 mx-auto gap-8 py-16 grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">Best pizza in the whole city</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-400 mb-8 text-xl">From vegan to meat-plates, every possible option waiting to be cooked and delivered to you.</p>
                        <NavLink to="/product" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-primary-900">
                            Get started
                        </NavLink>
                        <NavLink to="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border rounded-lg text-white border-gray-700 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-800">
                            More about us
                        </NavLink> 
                    </div>
                    <div className="mt-0 col-span-5 flex">
                        <img src="https://cdn.pixabay.com/photo/2014/04/02/14/12/pizza-306495_1280.png" alt="pizza??"/>
                    </div>                
                </div>
            </section>
        </>
    )


}