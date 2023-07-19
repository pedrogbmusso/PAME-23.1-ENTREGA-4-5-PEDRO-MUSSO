import styled from "styled-components";
import { Colors } from '../../Constants';

export const Requisicaodiv = styled.div`
    height: 66vh;
    width: 22vw;
    background-color: ${Colors.Cinza};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    border: 3px solid ${Colors.Cinza};
`

export const Textodiv = styled.div`
    background-color: green;
    width: 100%;
    height: 20%;
    background-color: ${Colors.Branco};
    flex-direction: column;
    max-width: 100%;
    font-family:  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    align-items: center;
    font-weight: bold;
    text-align: center;
    color: ${Colors.Cinza};
`

export const Button = styled.button`
    width: 100%;
    height: 14.8%;
    border-radius: 8px;
    background-color: ${Colors.Cinza};
    border-color: ${Colors.Preto};
    font-size: 2.5vw;
    color: ${Colors.Branco};
    border-color: ${Colors.Cinza};
    font-weight: bold;
    cursor: pointer;`
    
export const Text = styled.div`
   font-weight: bold;
   font-size: 1.8vw;
`