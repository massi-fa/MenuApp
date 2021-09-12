import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import MenuList from './components/MenuList';
import Add from './components/Add';
import SideMenu from './components/SideMenu';
import ProductView from './components/ProductView';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: 'Ubuntu', sans-serif;
  }
  #root {
    height: 100%;
  }
  iframe{
    width: 90% !important;
    margin: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;

const App = () => {
  const [isOpen, setOpen] = useState(false)
  return(
    <Container>
      <GlobalStyle/>
      <Router>
        <SideMenu isOpen={isOpen} setOpen={setOpen} />
            <Switch>
              <Route path='/add'>
                <Header title={'Add Product!'} isOpen={isOpen} setOpen={setOpen} />
                <Add />
              </Route>
              <Route path='/Product-:id'>
                <Header title={'Menu!'} isOpen={isOpen} setOpen={setOpen} />
                <ProductView />
              </Route>
              <Route path='/'>
                <Header title={'Menu!'} isOpen={isOpen} setOpen={setOpen} />
                <MenuList />
              </Route>
            </Switch>
          </Router>
    </Container>
  )
}

export default App;
