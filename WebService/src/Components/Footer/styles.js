import styled from "styled-components";
import { Colors } from '../../Constants';

export const Foot = styled.div`
    width: 100vw;
    min-height: 60vh;
    background-color: ${Colors.Cinza};
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Textdiv = styled.div`
    flex-direction: column;
    max-width: 40%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    color: ${Colors.Branco};
    text-align: center;
    justify-content: center;`