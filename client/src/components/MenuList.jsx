import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Item from "./Item";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: auto;
  padding: 10px;
`;

const MenuList = () => {
  const [dati, setData] = useState([]);
  useEffect( () => {
    axios.post('/')
      .then((res) => {
        setData(res.data);
      })
    },[]
  );
  return(
    <Container>
      {
        dati.map((element) => (
          <Item key={element._id} name={element.name} price={element.price} weight={element.weight} id={element._id} />
        ))
      }
    </Container>
  );
};

export default MenuList;