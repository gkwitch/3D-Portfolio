import React from 'react'
import Header from "./components/Header" //importando o header
import HeroSection from './components/HeroSection';

export const App = () => {
  //aqui entraram os componentes
    return (
    <>
    <Header/>
    <HeroSection/>
    </>
  )
}

export default App;