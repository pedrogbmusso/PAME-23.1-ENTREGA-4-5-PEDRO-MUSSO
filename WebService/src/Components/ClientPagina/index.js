import React from 'react'
import { Body } from './styles'
import Requisicao from '../Requisisoes'

export default function HomePage() {
  var pedidos = [
    {description: 'Pedido esta atrasado', status : 'Nao resolvido'}, 
    {description: 'Pedido ainda nao chegou', status : 'Nao resolvido'},
    {description: 'Pedido foi entregue errado', status : 'Nao resolvido'}]

  var Itens = pedidos.map((item)=>(<Requisicao description = {item.description} status = {item.status}/>))

  return (
    <Body>
      {Itens}
    </Body>
  )
}