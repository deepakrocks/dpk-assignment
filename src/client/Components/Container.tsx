import * as React from 'react';
import AppointmentTime from "./AppointmentTime";
import {FlexRow,FlexColumn} from "./SharedElements";
import styled from 'styled-components';

const ContainerDiv = styled.div`
  height : 100%;
  margin: 20px;
  background : #777777;
`;

interface State {
  timeSlots: string[];
}
class Container extends React.Component<{}, State> {

  // constructor() {
  //   super();
    // this.state = {,}

  // }

  render() {
    const timeSlots: string[] = [
      '9 am',
      '10 am',
      '11 am',
      '12 pm',
      '1 pm',
      '2 pm',
      '3 pm',
      '4 pm',
      '5 pm'];
    return (

      <ContainerDiv>
        <FlexColumn>
        <div style = {{float:'left', margin: '20px'}}> Available slots</div>
        <FlexRow>
        {timeSlots.map((timeSlot: string, index) => <AppointmentTime key ={index} time={timeSlot} />)}
        </FlexRow>
        </FlexColumn>
      </ContainerDiv>
    );
  }
}

export default Container;