import styled from "styled-components";
import { Colors } from "../../Constants";

export const InputContainer = styled.div`
    position: relative;
`
export const Inputin = styled.input`
    border-radius: 10px;
    height: 5vh;
    width: 35vw;
    padding: 14px  0px 14px 100px;
    border: 4px solid;
    border-color: ${Colors.Cinza};
    background-color: #0000;
    &::placeholder{
        color: ${Colors.Cinza};
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 1.5vw;
        font-weight: bold;
    }
    
`