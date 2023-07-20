import React, {useState} from 'react'
import {Background} from './styles'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import LoginPagina from '../../Components/LoginPagina'
import { useNavigate } from 'react-router-dom'

export default function SignIn(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const client = {email: 'Client@email.com' , senha: 'Client'};

    const admin = {email: 'Admin@email.com', senha: 'Admin'};

    function LogIn(){
        if (client.email === email && client.senha === senha){
            navigate('/HomeClient');
            console.log('Cliente logado com sucesso');
        }

        if (admin.email === email && admin.senha === senha){
            navigate('/HomeAdmin');
            console.log('Admnistrador logado com sucesso');
        } else {
            console.log('Nao foi possivel o login');
        }
    }

    return(
        <Background>
        <Header/>
        <LoginPagina
            onChangeEmail = {(text)=>(setEmail(text.target.value))}
            onChangeSenha = {(text)=>(setSenha(text.target.value))}
            onClick = {LogIn}/>
        <Footer/>
        </Background>
    )

}    