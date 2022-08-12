import styled from "styled-components";


export const Wrapper = styled.div`
    width: 224px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary};
`