import {default as styled} from "styled-components";

export const StyledButton = styled.button`
  margin: 1rem 1rem;
  width: 100px;
  font-family: "Open Sans", sans-serif;
  font-size:15px;
  color:#FFFFFF;
  padding: 10px;
  font-weight: 600;
  box-shadow: 0 0 2px 0 rgba(0,0,0,.12), 0 1px 2px 0 rgba(0,0,0,.24);
  border: none;
  :disabled {
    opacity: 0.5;
    background: #777 !important;

`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  `;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  `;