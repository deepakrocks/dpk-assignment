// import Container from './Container'
import BodyContainer from '../containers/BodyContainers'
import HeaderContainer from '../containers/HeaderContainer'
import { default as styled } from 'styled-components';
// import Header from './Header';
import * as React from "react";
const AppDiv = styled.div`
  text-align: center;
  height: 100%;
  margin: 10px 10px;
  background: green;`;

class AppointmentHome extends React.Component {
  public render() {
    return (
      <AppDiv>
        <HeaderContainer/>
        <BodyContainer/>
      </AppDiv>
    );
  }
}

export default AppointmentHome;
