import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hamburger from 'hamburger-react';

import utente from '../res/utente.svg';
const Container = styled.div`
  height: 4rem;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
`;
const Text = styled.h1`
  margin: auto;
  font-size: 1.5rem;

`;
const UserContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border: 0px;
  border-radius: 15px;
  background-color: #bee1e6;
  display: flex;
  margin: auto 10px auto 10px;
`;
const IconRight = styled.img`
  height: 2.5rem;
  margin: auto;
`;

const Header = ({ title, isOpen, setOpen}) => (
  <Container>
    <Hamburger toggled={isOpen} toggle={setOpen} style={{margin: '0px 0px 0px 0px'}}/>
    <Text>{title}</Text>
    <UserContainer>
      <IconRight src={utente} />
    </UserContainer>
  </Container>
);

Header.propTypes = {
  title: PropTypes.node.isRequired,
}

export default Header;