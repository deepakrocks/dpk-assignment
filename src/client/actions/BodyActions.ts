// import { fetchTimeSlot } from '../services/TimeSlotService';

export const SET_TIME_SLOTS = 'SET_TIME_SLOTS';

export interface BodyActions {
  type: string;
  timeSlots: AppointmentDetails[];
  showContactDetails: boolean;
  selectedAppointment: AppointmentDetails;
  userName : string;
  phoneNumber : string;
  validationError :string;
}

export interface AppointmentDetails
{
  timeSlot : string ;
  name : string;
  available: boolean;
  phNumber: string;

}
export const SET_TIME = 'SET_NAME';
export const SET_AVAILABLE_STATUS = 'SET_AVAILABLE_STATUS';
export const SET_SHOW_CONTACT_DETAILS = 'SET_SHOW_CONTACT_DETAILS';
export const SET_SELECTED_APPOINTMENT = 'SET_SELECTED_APPOINTMENT';
export const SAVE_MODAL = 'SAVE_MODAL';
export const SAVE_APPOINTMENT = 'SAVE_APPOINTMENT';
export const SAVE_VALIDATION_ERROR = 'SAVE_VALIDATION_ERROR';




export function setShowContactDetails(showContactDetails: boolean) {
  return {
    showContactDetails,
    type: SET_SHOW_CONTACT_DETAILS,
  };
};
export function setSelectedAppointment(selectedAppointment: AppointmentDetails) {
  return {
    selectedAppointment,
    type: SET_SELECTED_APPOINTMENT,
  };
};
export function saveModal(timeSlots: AppointmentDetails[]) {
  return {
    timeSlots,
    type: SAVE_MODAL,
  };
};
export function saveSeletedAppointment(selectedAppointment: AppointmentDetails) {
  return {
    selectedAppointment,
    type: SAVE_APPOINTMENT,
  };
};
export function saveValidationError(validationError: string) {
  return {
    validationError,
    type: SAVE_VALIDATION_ERROR,
  };
};

