import styled from "styled-components";
import { Colors } from '../../Constants';

export const Cabecalho = styled.div`
    width: 100vw;
    height: 10vh;
    min-height: 13.5vh;
    background-color: ${Colors.Vermelho};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Titulo = styled.h1`
    margin-left: 2%;
    width: 20vw;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    min-height: 5vh;
    min-width: 5vw;
    text-align: left;
`

export const EspacoBotoes = styled.div`
    display: flex;
`