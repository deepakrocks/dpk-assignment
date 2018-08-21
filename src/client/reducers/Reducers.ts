import {
  BodyActions,
  SET_TIME_SLOTS,
  SET_SHOW_CONTACT_DETAILS,
  SET_SELECTED_APPOINTMENT,
  SAVE_MODAL,
  SAVE_APPOINTMENT,
  SAVE_VALIDATION_ERROR
} from '../actions/BodyActions';

const initialState = {
  timeSlots: [
    { timeSlot : '9 am ',
      name : 'Deepak',
      available: false,
      phNumber: '4709858174', },
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
  userName: '',
  phoneNumber : '',
  validationError: ''

};

function sampleReducer(state: any = initialState, action: BodyActions) {
  switch (action.type) {
    case SET_TIME_SLOTS:
      return Object.assign({}, state, { timeSlots: action.timeSlots });
    case SET_SHOW_CONTACT_DETAILS:
      return Object.assign({}, state, { showContactDetails: action.showContactDetails });
    case SET_SELECTED_APPOINTMENT:
      return Object.assign({}, state, { selectedAppointment: action.selectedAppointment });
    case SAVE_MODAL:
      return Object.assign({}, state, { timeSlots: action.timeSlots });
    case SAVE_APPOINTMENT:
      return Object.assign({}, state, { selectedAppointment: action.selectedAppointment });
    case SAVE_VALIDATION_ERROR:
      return Object.assign({}, state, { validationError: action.validationError });

        default:
      return state;
  }
}

export default sampleReducer;
