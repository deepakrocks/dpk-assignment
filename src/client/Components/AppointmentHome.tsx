import BodyContainer from '../containers/BodyContainers'
import HeaderContainer from '../containers/HeaderContainer'
import { default as styled } from 'styled-components';
import * as React from "react";
const AppDiv = styled.div`
  text-align: center;
  height: 100%;
  margin: 10px 10px;
  background : #FFFFdd;
  `;

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
