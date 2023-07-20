import styled from "styled-components";
import { Colors } from '../../Constants';

export const Buttom = styled.button`
    height: 7vh;
    width: 8vw;
    background-color: ${Colors.Preto};
    color: ${Colors.Branco};
    border: 0.3vw solid;
    border-color: ${Colors.Branco};
    border-radius: 10px;
    border-color: ${Colors.Branco}; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 2vw;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    cursor: pointer;
`

export const Tag = styled.h1`
    text-decoration: none;
    font-size: 1.7vw;
    font-weight: bold;
`