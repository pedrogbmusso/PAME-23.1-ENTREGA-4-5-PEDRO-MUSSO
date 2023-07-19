import InputSignIn from '../InputSignIn'
import { Body, TituloLogin} from './styles'
import BotaoLogin from '../BotaoLogin';

export default function LoginPage( {onClick, onChangeEmail, onChangePassword}) {
  

  return (
    <Body>
      <TituloLogin>Login</TituloLogin>
      <InputSignIn placeholder = 'E-mail' type = "text" onChange =  {onChangeEmail}/>
      <InputSignIn placeholder = 'Senha' type = "password" onChange = {onChangePassword} />
      <BotaoLogin onClick={onClick}/>
    </Body>
  )
}