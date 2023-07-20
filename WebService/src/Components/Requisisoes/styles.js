import styled from "styled-components";
import { Colors } from '../../Constants';

export const Requisicaodiv = styled.div`
    height: 40vh;
    width: 22vw;
    background-color: ${Colors.Cinza};
    border-radius: 8px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    border: 3px solid ${Colors.Cinza};
    align-items: center;
`

export const Textodiv = styled.div`
    background-color: green;
    width: 100%;
    height: 25%;
    padding-top: 5px;
    background-color: ${Colors.Branco};
    flex-direction: column;
    max-width: 100%;
    margin: 0;
    border-radius: 5px;
    font-family:  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    align-items: center;
    font-weight: bold;
    text-align: center;
    color: ${Colors.Preto};
`

export const Button = styled.button`
    width: 100%;
    height: 14.8%;
    border-radius: 8px;
    background-color: ${Colors.Vermelho};
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