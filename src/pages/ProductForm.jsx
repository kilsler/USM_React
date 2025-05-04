import { useForm } from "react-hook-form";
import { createPizza } from "../api/pizza";
import schema from "../validation/contact.schema";
import { yupResolver } from "@hookform/resolvers/yup";

/**
 * @description ProductForm Компонент для отображения формы добавления продукта.
 * @returns {JSX.Element}
 */
export default function ProductForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        data[sizes] = [30, 40, 50];
        console.log(data)
        try {
            const response = await createPizza(data);
            console.log("Pizza created successfully:", response);
            alert("Pizza created successfully:", response);
        } catch (error) {
            console.error("Error creating pizza:", error);
            alert("Error creating pizza:", error);
        }
    }

    return (
        <section className="bg-gray-900 container">
            <div className="max-w-screen-xl px-4 mx-auto gap-8 py-16 flex flex-col justify-center items-center ">
                <form onSubmit={handleSubmit(onSubmit)} className="mr-auto place-self-center lg:col-span-7" >
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">
                        Product form
                    </h1>
                    <div className="mb-6 w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" {...register("name")} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pizza name" required />
                        {errors.name && <div className="error text-red-500">{errors.name.message}</div>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-300">Description</label>
                        <textarea id="description"{...register("description")} rows="4" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pizza description"></textarea>
                        {errors.description && <div className="error text-red-500">{errors.description.message}</div>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-300">Price</label>
                        <input type="number" id="price"{...register("price")} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price in lei" required />
                        {errors.price && <div className="error text-red-500">{errors.price.message}</div>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-300">Image name</label>
                        <input type="text" id="image"{...register("image")} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pizza name" required />
                        {errors.image && <div className="error text-red-500">{errors.image.message}</div>}
                    </div>
                    <button type="submit" className="bg-sky-900 text-sky-200 hover:bg-sky-800 hover:cursor-pointer focus:ring-blue-500 font-medium rounded-lg text-base h-10 w-30 font-semibold">Submit</button>
                </form>
            </div>
        </section>
    )
}