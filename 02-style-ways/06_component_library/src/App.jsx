import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Footer from './components/Footer'
import Button from "@mui/material/Button";
import { Box } from '@mui/system'
import { styled } from "@mui/material/styles";
const FullScreenContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "lightgray",
});


function App() {

  return (
    <FullScreenContainer>
      <Header/>
      <main>
        <ArticleList />
      </main>
      <Footer/>
   </FullScreenContainer>
  )
}


export default App
