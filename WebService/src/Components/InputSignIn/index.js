import React from 'react'
import { Inputin, InputContainer,} from './styles'

export default function InputSignIn({placeholder, type, onChange}) {
  return (
    <InputContainer>
        <Inputin type = {type} placeholder = {placeholder} onChange = {onChange}/>
    </InputContainer>
  )
}