import React from 'react'
import { Cabecalho, Titulo, EspacoBotoes } from './styles'
import Buttons from '../Buttons';

export default function Header(){
    const botoes = [
        {name: 'Login' , link: '/'},
]

    return (
        <Cabecalho>
            <Titulo></Titulo>
            <EspacoBotoes>{botoes.map((item, index)=>(<Buttons key = {index} name = {item.name} link = {item.link}></Buttons>))}</EspacoBotoes>
        </Cabecalho>
    )
}