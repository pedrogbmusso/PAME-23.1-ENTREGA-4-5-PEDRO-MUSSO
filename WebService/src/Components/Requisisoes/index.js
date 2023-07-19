import React from 'react'
import { Requisicaodiv, Button, Textodiv, Text} from './styles'

export default function Card({ description, status }) {
  return (
    <Requisicaodiv>
        <Textodiv>
            <Text>{description}</Text>
            <Text>{status}</Text>
        </Textodiv>
        <Button>Mudar Situação</Button>
    </Requisicaodiv>
  )
}