export default function HomePage(){
    return(
        <> 
            <section className="bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Best pizza in the whole city</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 text-xl">From vegan to meat-plates, every possible option waiting to be cooked and delivered to you.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-primary-900">
                            Get started
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border rounded-lg  focus:ring-4 text-white border-gray-700 bg-gray-800 hover:bg-gray-700 focus:ring-gray-800">
                            More about us
                        </a> 
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
                    </div>                
                </div>
            </section>
        </>
    )


}