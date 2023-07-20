import styled from "styled-components";
import { Colors } from '../../Constants';

export const Foot = styled.div`
    width: 100vw;
    min-height: 20vh;
    background-color: ${Colors.Cinza};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Textodiv = styled.div`
    flex-direction: row;
    max-width: 40%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    color: ${Colors.Preto};
    text-align: center;
    justify-content: center;
    `