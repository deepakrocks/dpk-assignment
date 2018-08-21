import * as React from 'react';
import {FlexRow,FlexColumn} from "./SharedElements";
import styled from 'styled-components';
import AppointmentTimeContainers from "../containers/AppointmentTimeContainers";

const ContainerDiv = styled.div`
  height : 100%;
  margin: 20px;
`;

interface Props {
  timeSlots: string[];
}

const Container = (props: Props) => {

  console.log('props', props);
    return (

      <ContainerDiv>
        <FlexColumn>
        <div style = {{float:'left', margin: '20px' , color: '#216099'}}> Working Hours</div>
        <FlexRow>
        <AppointmentTimeContainers />
        </FlexRow>
        </FlexColumn>
      </ContainerDiv>
    );
  // }
}

export default Container;