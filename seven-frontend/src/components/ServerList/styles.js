import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${({ theme }) => theme.colors.tertiary};

    max-height: 100vh;
    width: 72px;
    
`


export const MainButton = styled.button`
    width: 48px;
    height: 48px;
    font-size: 22px;
    border-radius: 16px;
    margin:0;
    padding: 0;
    margin-top: 10px;
    color: white;
    background-color: #5865f2;
    cursor: pointer;
`