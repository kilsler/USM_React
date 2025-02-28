import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header/>
      <main>
        <ArticleList />
      </main>
      <Footer/>
    </>
  )
}


export default App
