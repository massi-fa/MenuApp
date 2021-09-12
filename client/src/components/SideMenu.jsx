import styled from "styled-components";
import Hamburger from 'hamburger-react';
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => (props.condition ? '100%' : '0%')};
  height: 100%;
  z-index: 10;
  position: absolute;
  overflow: auto;
  background-color: white;
  transition: 0.7s;
`;
const ContainerButton = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px auto;
`;
const ContainerPage = styled.div`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  border-radius: 10px;
  border: 0px;
  background-color: #CDDAFD;
  margin: 25px auto;
  width: 9rem;
`;
const SideMenu = ({ isOpen, setOpen }) => {
  const history = useHistory();
  const handleClickHome = () =>{
    setOpen(false);
    history.push('/');
	};
	const handleClickAdd = () =>{
    setOpen(false);
    history.push('/add');
	};
  return(
    <Container condition={isOpen}>
      <ContainerButton>
        <Hamburger toggled={isOpen} toggle={setOpen} style={{margin: '0px 0px 0px 0px'}} />
      </ContainerButton>
      <ContainerPage>
        <Button onClick={handleClickHome}>
          <h1>Menu</h1>
        </Button>
        <Button onClick={handleClickAdd}>
          <h1>Add</h1>
        </Button>
      </ContainerPage>
    </Container>
  )
}

export default SideMenu;