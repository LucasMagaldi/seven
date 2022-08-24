import React from 'react';
import ServerList from '../../components/ServerList/ServerList';
import FriendsBar from '../../components/FriendsBar/FriendsBar';
import Chat from '../../components/Chat/Chat';
import Appbar from '../../components/AppBar/Appbar';
import AddFriendDialog from '../../components/AddFriendDialog/AddFriendDialog';

import { Grid, Wrapper } from './styles';

const Layout = () => {
  return (
    <Wrapper>
        <AddFriendDialog />
        <ServerList />
        <FriendsBar />
        <Chat />
        <Appbar />
    </Wrapper>
  )
}

export default Layout;