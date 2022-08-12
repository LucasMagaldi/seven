import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${({ theme }) => theme.colors.tertiary};

    max-height: 100vh;
    width: 72px;
    
`