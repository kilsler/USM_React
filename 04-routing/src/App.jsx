
import MainLayout from './components/MainLayout'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './components/pages/HomePage'
import CartPage from './components/pages/CartPage'
import AboutUs from './components/pages/AboutUsPage'
import ProductPage from './components/pages/ProductPage'
import NotFoundPage from './components/pages/NotFoundPage'
function App() {
  return (
    <Routes>
      <Route path='product' element={<MainLayout  />}>
        <Route index element={<ProductPage />} />
        <Route path=':id' element={<ProductPage />} />  
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
