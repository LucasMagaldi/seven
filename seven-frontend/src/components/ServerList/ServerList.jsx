import React from 'react';

import { AiOutlineUsergroupAdd } from '../../styles/Icons/index';
import ServerButton from '../ServerButton/ServerButton';

import { Container, MainButton } from './styles';

const ServerList = () => {
  return (
    <Container>
        <MainButton>
          <AiOutlineUsergroupAdd />
        </MainButton>
    </Container>
  )
}

export default ServerList