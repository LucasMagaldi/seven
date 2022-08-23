import React from 'react';

import { Wrapper, AddFriend, Title, FriendsList, PendingList } from './style';


const FriendsBar = () => {
  return (
    <Wrapper>
      <AddFriend>
        Add Friend
      </AddFriend>
      <Title>Private Messages</Title>
      <FriendsList>
        <h2>2</h2>
        <h3>3</h3>
      </FriendsList>
      <Title>Pending Invitations</Title>
      <PendingList>
        <h2>2</h2>
        <h3>3</h3>
      </PendingList>
    </Wrapper>
  )
}

export default FriendsBar