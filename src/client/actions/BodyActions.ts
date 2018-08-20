// import { fetchTimeSlot } from '../services/TimeSlotService';

export const SET_TIME_SLOTS = 'SET_TIME_SLOTS';

export interface BodyActions {
  type: string;
  timeSlots: AppointmentDetails[];
  showContactDetails: boolean;

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

// export interface AppointmentTimeState {
//   type: string;
//   time: any;
// }


export function setTime(time: string) {
  return {
    time,
    type: SET_TIME,
  };
}
export function setAvailableStatus(availableStatus: boolean) {
  return {
    availableStatus,
    type: SET_AVAILABLE_STATUS,
  };
}
export function setShowContactDetails(availableStatus: boolean) {
  return {
    availableStatus,
    type: SET_SHOW_CONTACT_DETAILS,
  };
};

