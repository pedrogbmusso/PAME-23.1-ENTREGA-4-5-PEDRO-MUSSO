import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HomeClient from '../../Components/HomeClient'
import { Background } from './styles'

export default function Home() {
  return (
  <Background>
      <Header/>
      <HomeClient/>
      <Footer/>
  </Background>
  )
}