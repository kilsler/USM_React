export default function NotFoundPage(){
    return(
        <section className="bg-gray-900">
                <div className="grid max-w-screen-xl px-4 mx-auto gap-8 py-16 grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none text-white">
                            <span className="text-red-500">ERROR:</span>
                            <br/> 
                            Something went wrong
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-400 mb-8 text-xl">Try contacting the support.</p>
                    </div>
                    <div className="mt-0 col-span-5 flex">
                        <img src="https://cdn.pixabay.com/photo/2012/04/14/14/48/sign-34184_1280.png" alt="error??"/>
                    </div>                
                </div>
            </section>


    )
}