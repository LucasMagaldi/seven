import React from 'react';
import ServerList from '../../components/ServerList/ServerList';
import FriendsBar from '../../components/FriendsBar/FriendsBar';
import Chat from '../../components/Chat/Chat';

import { Grid, Wrapper } from './styles';

const Layout = () => {
  return (
    <Wrapper>
        <ServerList />
        <FriendsBar />
        <Chat />
    </Wrapper>
  )
}

export default Layout;