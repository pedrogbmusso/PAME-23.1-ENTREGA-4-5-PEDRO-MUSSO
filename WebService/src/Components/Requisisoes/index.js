import React from 'react'
import { Requisicaodiv, Button, Textodiv, Text} from './styles'

export default function Requisicao({ description, status }) {
  return (
    <Requisicaodiv>
        <Textodiv>
            <Text>{description}</Text>
            <Text>Status: {status}</Text>
        </Textodiv>
        <Button>Mudar Situação</Button>
    </Requisicaodiv>
  )
}