import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import PizzaList from './components/PizzaList'

/**
 * @component
 * @description Главный компонент приложения.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <Header />
      <Slider />
      <PizzaList />
      <Footer />
    </>
  )
}

export default App
