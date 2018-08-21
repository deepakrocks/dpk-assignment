import * as React from 'react';
import { default as styled } from 'styled-components';
import {StyledButton, FlexRow} from './SharedElements';

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
interface Props {
  appointmentTime: string;
  modalClosed : (saved: boolean) => void;
}
interface State {
  name: string;
  phoneNumber:  string ;
  errorMessage : string;
}

const nameError = 'Only letters is allowed';
const numberError = 'Only numbers is allowed';

class ContactDetails extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      name : '',
      phoneNumber : '',
      errorMessage : '',
    }

  }

  validateName = (event:any) => {

    let nameValue = event.target.value;
    // let commentErrorText = '';
    let error = '';
    if (!this.validationCheck(nameValue,/^[a-zA-Z.]*$/ )) {
      nameValue = this.state.name;
      console.log('erroed name value',nameValue);
      error = this.state.errorMessage.length === 0
        ? nameError
        : this.state.errorMessage === nameError
        ? nameError : nameError + ', ' + numberError ;
    }
    this.setState({name:nameValue, errorMessage: error});
  };
  validateNumber = (event:any) => {

    let phoneNo = event.target.value;
    // let commentErrorText = '';
    let error = '';
    if (!this.validationCheck(phoneNo,/^[0-9]*$/)) {
      phoneNo = phoneNo.replace(/[^\d.]/gi, '');
      error = this.state.errorMessage.length === 0
        ? numberError
        : this.state.errorMessage === numberError
          ? numberError : numberError + ', ' + nameError ;
    }
    this.setState({phoneNumber:phoneNo, errorMessage: error});

  };

  validationCheck = (commentText: string, regex: any) => {
    return (commentText.match(regex));
    // return (commentText.match(/^[0-9a-zA-Z.]*$/));
  };

  save = () => {
    this.props.modalClosed(true);

  };

  close = () => {
    this.props.modalClosed(false);
  };

  disableCheck =  () => {
    return this.state.name.length === 0 || this.state.phoneNumber.length < 10
  };
  render() {
    console.log('props COntact Details', this.props);
    const { appointmentTime } = this.props;
    const { name, phoneNumber } = this.state;
    return (
      <div>
        <div style = {{textAlign:'center', color: '#216099'}}>Appointment Time: <span>{ appointmentTime }</span> </div>
        <FlexRow>
        <StyledInput
          placeholder={'Enter Your Name'}
          minLength={1}
          maxLength={30}
          type={'text'}
          value={name}
          onChange={this.validateName}
        >
        </StyledInput>

        <StyledInput
          placeholder={'Enter Phone Number'}
          minLength={10}
          maxLength={10}
          type={'text'}
          value={phoneNumber}
          onChange={this.validateNumber}
        >
        </StyledInput>
        </FlexRow>
        <p style = {{color: '#FF0000', marginLeft:'10px'}}>{this.state.errorMessage}</p>
        <FlexRow style = {{float:'right'}}>
          <StyledButton
            style = {{background: '#FFFFFF', color: '#216099'}}
            onClick= {this.close}
          > Cancel </StyledButton>
          <StyledButton
            style = {{background: '#216099', color: '#FFFFFF'}}
            onClick={this.save}
            disabled={this.disableCheck()}
          > Save </StyledButton>
        </FlexRow>
      </div>
    );
  }
}

// @ts-ignore
export default ContactDetails;
