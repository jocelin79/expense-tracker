import styled from "styled-components";

function App() {

  return (
    <Container>
      <Header>
        <HeaderText>
          Sistema Financeiro
        </HeaderText>
      </Header>
      <Body>

      </Body>
    </Container>
  );
}

const Container = styled.div``

const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  text-align: center;
`

const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #FFF;
  padding-top: 30px;
`

const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`

export default App;