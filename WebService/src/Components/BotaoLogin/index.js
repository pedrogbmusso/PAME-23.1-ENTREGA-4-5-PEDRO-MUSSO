import React from 'react'
import { Botao } from './styles'

export default function ButtonLogin({onClick}) {
  return (
    <Botao onClick = {onClick}>
      Entrar
    </Botao>
  )
}