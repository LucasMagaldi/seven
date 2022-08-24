import styled from "styled-components";

export const Wrapper = styled.div`
    position:absolute;
    height: 100%;
    width: 100%;
    background: #000;
    z-index: 2;
    opacity: 0.8;
`

export const DialogBox = styled.div`
    position:absolute;
   
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    top: 30%;
    left:30%;
    width: 500px;
    height: 200px;
    background: #fff;
`