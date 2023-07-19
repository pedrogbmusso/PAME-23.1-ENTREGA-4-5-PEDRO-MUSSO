import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HomeAdmin from '../../Components/HomeAdmin'
import { Background } from './styles'

export default function Home() {
  return (
  <Background>
      <Header/>
      <HomeAdmin/>
      <Footer/>
  </Background>
  )
}