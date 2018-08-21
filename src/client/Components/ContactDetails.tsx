import * as React from 'react';
import { default as styled } from 'styled-components';
import {StyledButton, FlexRow} from './SharedElements';
import {AppointmentDetails} from "../actions/BodyActions";

const StyledInput = styled.input`
  margin: 1rem 1rem;
  width: 200px;
  height: 36px;
  font-family: "Open Sans", sans-serif;
  font-size:15px;
  padding-left : 10px;
  opacity: 1;
  color: #216099;
  &::-webkit-input-placeholder {
    color: #216099;
    opacity: 0.5
 }
`;

const ErrorP = styled.p`
color: #FF0000;
marginLeft:'10px';
`;

const ContactDetails = (contactDetailsProp : any )  => {
 const {
   selectedAppointment,
   showAppointmentDetails,
   saveModal,
   timeSlots,
   saveSeletedAppointment,
  saveValidationError,
   validationError
 } = contactDetailsProp;

  const nameError = 'Only letters is allowed';
  const numberError = 'Only numbers is allowed';

  let updateModal: (userName: string, phoneNumber: string )=> void;
  let validationCheck : (commentText: string, regex: any) => any;

  validationCheck = (commentText, regex) => {
    return (commentText.match(regex));
  };

  updateModal = (userName, phoneNumber) => {
    const updatedModal: AppointmentDetails = {
      timeSlot : selectedAppointment.timeSlot,
      name : userName,
      available:! (userName.length > 0 || phoneNumber.length > 0) ,
      phNumber: phoneNumber,
    };

    saveSeletedAppointment(updatedModal);
  };
  return (
      <div>
        <div style = {{textAlign:'center', color: '#216099'}}>Appointment Time: <span>
          { selectedAppointment.timeSlot}
        </span> </div>
        <FlexRow>
        <StyledInput
          placeholder={'Enter Your Name'}
          minLength={1}
          maxLength={30}
          type={'text'}
          value={selectedAppointment.name}
          onChange={(event) => {

            let nameValue = event.target.value;
            if (!validationCheck(nameValue,/^[a-zA-Z.]*$/ )) {
              console.log('erroed name value',nameValue);
              saveValidationError(nameError)
            }else {
              if(validationError.length > 0) {
                saveValidationError('')
              }
              updateModal(event.target.value, selectedAppointment.phNumber)
            }
          } }
        >
        </StyledInput>

        <StyledInput
          placeholder={'Enter Phone Number'}
          minLength={10}
          maxLength={10}
          type={'text'}
          value={selectedAppointment.phNumber}
          onChange={(event) => {
            let phoneNo = event.target.value;
            if (!validationCheck(phoneNo,/^[0-9]*$/)) {
              saveValidationError(numberError)
           }else {
              if(validationError.length > 0) {
                saveValidationError('')
              }
              updateModal( selectedAppointment.name, event.target.value);
            }

          } }
        >
        </StyledInput>
        </FlexRow>
        <ErrorP >
          {validationError}
          </ErrorP>
        <FlexRow style = {{float:'right'}}>
          <StyledButton
            style = {{background: '#FFFFFF', color: '#216099'}}
            onClick= {() => showAppointmentDetails()}
          > Cancel </StyledButton>
          <StyledButton
            style = {{background: '#216099', color: '#FFFFFF'}}
            onClick={() => {
           const updatedTimeSlot: AppointmentDetails[] =   timeSlots.map( (element:AppointmentDetails) => {
                console.log(element);
                if (element.timeSlot === selectedAppointment.timeSlot) {
                 return selectedAppointment;
                } else
                {
                 return element;
                }
              });
              saveModal(updatedTimeSlot);
              showAppointmentDetails();

            }}
            disabled={selectedAppointment.name.length === 0 || selectedAppointment.phNumber.length < 10}
          > Save </StyledButton>
        </FlexRow>
      </div>
    );

};

// @ts-ignore
export default ContactDetails;
