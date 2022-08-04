import styled from "styled-components";

export const Container = styled.div`
    grid-area: SL;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${({ theme }) => theme.colors.tertiary};

    max-height: 100vh;

    
`