import { NavLink } from "react-router"

function Header() {
  return (
    <>
     <nav className="bg-gray-800 w-full h-16 text-sky-200 text-xl mb-4">
        <img src="/src/assets/react.svg" alt="logo" className="absolute left-4 top-2 w-12 h-12 rounded-full ml-8" />
        <div className="flex items-center justify-end-safe gap-14 h-full px-4 mr-30">
          <NavLink to="/" className="text-sky-200 hover:text-sky-400 font-mono font-medium h-full pt-5">Home</NavLink>
          <NavLink to="/product" className="text-sky-200 hover:text-sky-400 font-mono font-medium h-full pt-5">Products</NavLink>
          <NavLink to="/about" className="text-sky-200 hover:text-sky-400 font-mono font-medium h-full pt-5">About Us</NavLink>
        </div>
        <div className="bg-sky-900 h-1 w-screen"></div>
      </nav>
      
    </>
  )
}

export default Header
