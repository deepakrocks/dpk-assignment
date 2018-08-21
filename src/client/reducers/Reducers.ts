import {BodyActions, SET_TIME_SLOTS, SET_AVAILABLE_STATUS, SET_SHOW_CONTACT_DETAILS, SET_SELECTED_APPOINTMENT} from '../actions/BodyActions';

const initialState = {
  timeSlots: [
    { timeSlot : '9 am ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '10 am ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '11 am ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '12 pm ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '1 pm ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '2 pm ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '3 pm ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '4 pm ',
      name : '',
      available: true,
      phNumber: '', },
    { timeSlot : '5 pm ',
      name : '',
      available: true,
      phNumber: '', },
  ],
  showContactDetails: false,
  selectedAppointment : null,

};

function sampleReducer(state: any = initialState, action: BodyActions) {
  switch (action.type) {
    case SET_TIME_SLOTS:
      return Object.assign({}, state, { timeSlots: action.timeSlots });
    case SET_SHOW_CONTACT_DETAILS:
      return Object.assign({}, state, { showContactDetails: action.showContactDetails });
    case SET_SELECTED_APPOINTMENT:
      return Object.assign({}, state, { selectedAppointment: action.selectedAppointment });
    case SET_AVAILABLE_STATUS:
      return Object.assign({}, state, {
            showContactDetails: true,
          });

        default:
      return state;
  }
}

export default sampleReducer;
