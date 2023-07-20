import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { Background } from './styles'
import HomePageClient from '../../Components/ClientPagina'

export default function Home() {
  return (
  <Background>
      <Header/>
      <HomePageClient/>
      <Footer/>
  </Background>
  )
}