import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import ArticleList from './components/ArticleList'

function App() {

  return (
    <> 
      <Header></Header>
        <main>  
          <ArticleList/>
        </main>
      <Footer></Footer>
    </>
  )
}

export default App
