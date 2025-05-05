
import MainLayout from './components/MainLayout'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import AboutUs from './pages/AboutUsPage'
import ProductPage from './pages/ProductPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductList from './pages/ProductList'
import ProductForm from './pages/ProductForm'
import ProductEditPage from './pages/ProductEditPage'
function App() {
  return (
    <Routes>
      <Route path='product' element={<MainLayout />}>
        <Route index element={<ProductList />} />
        <Route path='create' element={<ProductForm />} />
        <Route path=':id' element={<ProductPage />} />
        <Route path=':id/edit' element={<ProductEditPage />} />
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
