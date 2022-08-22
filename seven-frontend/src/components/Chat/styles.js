import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    width: calc(100% - 296px);
    margin-top: 48px;
`