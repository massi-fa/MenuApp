import styled from "styled-components";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import hamburger from '../res/hamburger.svg';

const Container = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #89b0ae;
  width: 35%;
  height: 10rem;
  margin: 10px auto 10px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const IconContainer = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  margin: 10px auto 10px auto;
`
const Icon = styled.img`
  height: 3rem;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 1rem;
  margin: auto;
`;
const Weight = styled.h1`
  font-size: 0.8rem;
  margin: auto;
`;
const Price = styled.h1`
  font-size: 0.8rem;
  margin: auto;
`;
const Item = ({ name, weight, price, id }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/Product-${id}`);
  };
  return(
    <Container onClick={handleClick}>
      <IconContainer>
        <Icon src={hamburger} />
      </IconContainer>
      <Title>{name}</Title>
      <Weight>{weight} g</Weight>
      <Price>{price} $</Price>
    </Container>
  );
};

Item.propTypes = {
    name: PropTypes.node.isRequired,
    weight: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
}

export default Item;