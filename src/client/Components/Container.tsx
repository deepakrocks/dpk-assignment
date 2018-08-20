import * as React from 'react';
// import AppointmentTime from "./AptmntTime";
import {FlexRow,FlexColumn} from "./SharedElements";
import styled from 'styled-components';
// import AppointmentTimeContainers from "../containers/AppointmentTimeContainers";
// import AppointmentTime from "./AptmntTime";
import AppointmentTimeContainers from "../containers/AppointmentTimeContainers";

const ContainerDiv = styled.div`
  height : 100%;
  margin: 20px;
  background : #777777;
`;

interface Props {
  timeSlots: string[];
}

const Container = (props: Props) => {

  // const {timeSlots, } = props;
    return (

      <ContainerDiv>
        <FlexColumn>
        <div style = {{float:'left', margin: '20px'}}> Available slots</div>
        <FlexRow>
        <AppointmentTimeContainers />
        {/*{timeSlots.map((timeSlot: string, index) =>  <AppointmentTimeContainers key = {index}/>)}*/}
        </FlexRow>
        </FlexColumn>
      </ContainerDiv>
    );
  // }
}

export default Container;