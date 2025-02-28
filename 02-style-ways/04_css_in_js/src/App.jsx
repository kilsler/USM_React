import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Footer from './components/Footer'
import styled from 'styled-components'

const Body = styled.body`
    font-family: Arial, sans-serif;
    background-color: #aeacac;
    text-align: center;
`;


function App() {

  return (
    <Body>
      <Header/>
      <main>
        <ArticleList />
      </main>
      <Footer/>
    </Body>
  )
}


export default App
