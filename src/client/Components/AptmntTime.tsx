import * as React from 'react';
import { default as styled } from 'styled-components';
// import  ContactDetails  from './ContactDetails';
import { StyledButton } from './SharedElements';
// @ts-ignore
import  Modal from 'react-modal'
import ContactDetailContainer from "../containers/ContactDetailContainer";

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

const AppointmentTime = (appointmentTimeSlotProps : any )  => {
  const { timeSlots,
    showContactDetails,
    showAppointmentDetails,
    setSelectedAppointment } = appointmentTimeSlotProps;
  // @ts-ignore
  console.log('handleModalClick', appointmentTimeSlotProps);
    return (

      <AppointmentDiv>
        {
          timeSlots.map(
            (timeSlot: any, index: number) =>
          <React.Fragment key = {index}>
          <StyledButton style = {timeSlot.available ? {background:'#0a4a0a'} : {background : '#FF0000' }}
                        onClick = {() => {
                          setSelectedAppointment(timeSlot);
                          showAppointmentDetails();
                        }}>
            {timeSlot.timeSlot} </StyledButton>

        </React.Fragment>
        )
        }

        <Modal
          isOpen={showContactDetails}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
          style={modalStyles}
        >
          <ContactDetailContainer/>
        </Modal>

      </AppointmentDiv>
    );

};

export default AppointmentTime;