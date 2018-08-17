import * as React from 'react';
import { default as styled } from 'styled-components';
import  ContactDetails  from './ContactDetails';
import { StyledButton } from './SharedElements';
// @ts-ignore
import  Modal from 'react-modal'

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
};
const AppointmentDiv = styled.div``;


interface Props {
  time: string ;
}

interface State {
  availableStatus?: boolean;
  showContactDetails : boolean;
}
class AppointmentTime extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      availableStatus: true,
      showContactDetails : false,
    }
  }

  clicked = (event:any) => {
    console.log('clicked' + event.target.value);
    this.setState({showContactDetails: true,})
  };

  handleModalClick = (saved: boolean) => {
    this.setState({
      showContactDetails:false,
      availableStatus: !saved,
    });
  };

  render() {
    const {time} = this.props;
    const {availableStatus, showContactDetails} = this.state;
    return (
      <AppointmentDiv>
        <StyledButton style = {availableStatus ? {background:'#00FF00'} : {background : '#FF0000' }}
        onClick = {this.clicked}>
          {time} </StyledButton>
        <Modal
          isOpen={showContactDetails}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
          style={modalStyles}
        >
          <ContactDetails appointmentTime={time} modalClosed={this.handleModalClick}/>
          {/*<CardContainer>*/}

          {/*<FlexColumn>*/}
          {/*</FlexColumn>*/}
          {/*</CardContainer>*/}
        </Modal>
      </AppointmentDiv>
    );
  }
}

export default AppointmentTime;