// import { fetchMockData } from '../services/sampleService';

export const SET_NAME = 'SET_NAME';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export interface SampleAction {
  type: string;
  name?: string;
  data?: string;
}

// interface Data {
//   message: string;
// }
//
// export function setName(name) {
//   return {
//     name,
//     type: SET_NAME,
//   };
// }

// function requestDataFromServer() {
//   return {
//     type: REQUEST_DATA,
//   };
// }
//
// function receiveDataFromServer(data: string) {
//   return {
//     data,
//     type: RECEIVE_DATA,
//   };
// }

// export const fetchDataFromServer = () => async (dispatch) => {
//   dispatch(requestDataFromServer());
//   try {
//     // const response = await fetchMockData();
//     // const data: Data = await response.json();
//     dispatch(receiveDataFromServer(data.message));
//   } catch (error) {
//     // you would likely dispatch an error action here
//     console.log('Error: ', error);
//   }
// };
