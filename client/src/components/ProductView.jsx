import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import hamburger from '../res/hamburger.svg';
import addCart from '../res/addCart.svg';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const ContainerProduct = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 90%;
  width: 70%;
  border: 0px;
  border-radius: 10px;
  background-color: #CDDAFD;
  position: relative;
`;
const ButtonIconCart = styled.button`
  position: absolute;
  right: 10px;
  top: 15px;
  border: none;
  outline: none;
  background-color: transparent;
`;
const IconCart = styled.img`
  height: 30px;
  margin: auto;
`;
const IconContainer = styled.div`
  height: 5rem;
  width: 5rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  margin: 50px auto 30px auto;
`
const Icon = styled.img`
  height: 3rem;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin: 20px auto;
`;
const Weight = styled.h1`
  font-size: 1.6rem;
  margin: 20px auto;
`;
const Price = styled.h1`
  font-size: 1.6rem;
  margin: 20px auto;
`;
const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.post('/Product', {id: id})
      .then((res) => {
        setProduct(res.data);
      })
  }, []);
  
  const onClickAddCart = () => {
    console.log("ciccio")
  }
  return(
    <Container>
      <ContainerProduct>
        <ButtonIconCart onClick={onClickAddCart}>
          <IconCart src={addCart} />
        </ButtonIconCart>
        <IconContainer>
          <Icon src={hamburger} />
        </IconContainer>
        <Title>{product.name}</Title>
        <Price>{product.price} $</Price>
        <Weight>{product.weight} g</Weight>
      </ContainerProduct>
    </Container>
  )
};

export default ProductView;