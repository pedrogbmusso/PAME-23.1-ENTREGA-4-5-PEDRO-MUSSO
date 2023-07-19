import styled from "styled-components";
import { Colors } from "../../Constants";

export const Body = styled.div`
    width: 100vw;
    min-height: 86.5vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${Colors.Branco};
    justify-content: space-evenly;
`
export const TituloLogin = styled.h1`
    color: ${Colors.Vermelho};
    text-align: center;
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;`