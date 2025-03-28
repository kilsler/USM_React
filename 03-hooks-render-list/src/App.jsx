import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ComponentList from './components/ComponentList'
import Slider from './components/Slider'

/**
 * @component
 * @description Главный компонент приложения.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <ComponentList/>
      <Footer/>
    </>
  )
}

export default App
