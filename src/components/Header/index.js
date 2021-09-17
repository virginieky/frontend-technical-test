import React from 'react';
import { Container } from 'reactstrap';
import Image from 'next/image';

import Logo from '../../assets/lbc-logo.webp';

import Flex from '../Flex';
import Padded from '../Padded';
import Wrapper from './Wrapper';

const Header = ({
}) => {
  return (
    <Wrapper>
      <Container>
        <Flex alignItems="center" justifyContent="center" >
          <Padded top bottom>
            <div>
              <Image 
                src={Logo} 
                alt="Leboncoin's logo" 
                layout='fill'
                objectFit='contain' />
            </div>
          </Padded>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Header;
        