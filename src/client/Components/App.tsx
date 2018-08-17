import * as React from 'react';
import Container from './Container'
import { default as styled } from 'styled-components';
import Header from './Header';
const AppDiv = styled.div`
  text-align: center;
  height: 100%;
  margin: 10px 10px;
  background: green;`;
class App extends React.Component {
  public render() {
    return (
      <AppDiv >
        <Header/>
        <Container/>
      </AppDiv>
    );
  }
}

export default App;
