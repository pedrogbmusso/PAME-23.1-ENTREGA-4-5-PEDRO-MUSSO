import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { Background } from './styles'
import HomePageAdmin from '../../Components/AdminPagina'

export default function Home() {
  return (
  <Background>
      <Header/>
      <HomePageAdmin/>
      <Footer/>
  </Background>
  )
}