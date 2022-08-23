import styled from "styled-components";


export const Wrapper = styled.div`
    width: 224px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary};
`

export const AddFriend = styled.button`
    margin-top: 10px;
    width: 80%;
    height: 30px;
    background: #3ba55d;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`