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

const AppointmentTime = (appointmentTimeSlotProps : any )  => {
  const { timeSlots,  showContactDetails, showAppointmentDetails, handleModalClick } = appointmentTimeSlotProps;
  console.log('timeSlots', timeSlots);
  console.log('showContactDetails', showContactDetails);
  console.log('showAppointmentDetails', appointmentTimeSlotProps);
  // @ts-ignore
  console.log('handleModalClick', this);
    return (

      <AppointmentDiv>
        {timeSlots.map((timeSlot: any, index: number) =>  <React.Fragment key = {index}>
          <StyledButton style = {timeSlot.available ? {background:'#00FF00'} : {background : '#FF0000' }}
                        onClick = {() => showAppointmentDetails()}>
            {timeSlot.timeSlot} </StyledButton>
          <Modal
            isOpen={showContactDetails}
            contentLabel="Minimal Modal Example"
            ariaHideApp={false}
            style={modalStyles}
          >
            <ContactDetails appointmentTime={timeSlot.timeSlot} modalClosed={() => handleModalClick()}/>
          </Modal>
        </React.Fragment>)}

      </AppointmentDiv>
    );

};

export default AppointmentTime;