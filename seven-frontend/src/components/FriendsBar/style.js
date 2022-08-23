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

export const Title = styled.h3`
    text-transform: uppercase;
    color: #8e9297;
    font-size:14px;
    margin-top: 10px;
`

export const FriendsList = styled.div`
    width: 100%;
    height: calc(100% - 130px);
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const PendingList = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:auto;
`