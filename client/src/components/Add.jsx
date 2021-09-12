import styled from "styled-components";

import hamburger from '../res/hamburger.svg';

const Container = styled.div`
  display: flex;
  height: 100%;
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
const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 40%;
  justify-content: space-around;
  border: 0px;
  border-radius: 10px;
  background-color: #CDDAFD;
  padding: 25px;
`;
const Input = styled.input`
  border-radius: 10px;
  border: 0px;
  height: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  outline: none;
  border-radius: 10px;
  border: 0px;
  height: 2rem;
`;
const Add = () => (
  <Container>
    <Form action="/add" method="POST">
      <IconContainer>
        <Icon src={hamburger} />
      </IconContainer>
      <Input type="text" placeholder="Name" name="name" />
      <Input type="text" placeholder="Price" name="price" />
      <Input type="text" placeholder="Weight" name="weight" />
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);

export default Add;