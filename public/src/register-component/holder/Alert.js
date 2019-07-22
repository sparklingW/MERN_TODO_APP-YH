import React from "react";
import styled from "styled-components";

export const Alert = props => {
  return (
    <ElementsWrapper>
      <AlertWrapper>
        <MessageText><span>Try another email</span></MessageText>
        <Close onClick={() => props.show()}>X</Close>
      </AlertWrapper>
    </ElementsWrapper>
  )
};
export const AlertEmpty = props => {
  return (
    <ElementsWrapper>
      <AlertWrapperEmpty>
        <MessageTextEmpty><span>Email or password are incorrect</span></MessageTextEmpty>
      </AlertWrapperEmpty>
    </ElementsWrapper>
  )
};
const AlertWrapperEmpty = styled.div`
  //margin: 5px 0 5px 0;
  background-color: rgba(0,0,0,0);
  width: 310px;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
`;
const MessageTextEmpty = styled.div`
  color: rgba(0,0,0,0);
  padding: 10px 10px;
  font-family: 'Muli', sans-serif;
`;
const AlertWrapper = styled.div`
  background-color: #e76165;
  //margin: 5px 0 5px 0;
  border-radius: 7px 7px;
  width: 310px;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
`;
const MessageText = styled.div`
  color: #f4f4f4;
  padding: 10px 10px;
  font-family: 'Muli', sans-serif;
`;
export const ElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Close = styled.button`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: rgba(0,0,0,0);
  color: #f4f4f4;
  font-family: 'Muli', sans-serif;
  cursor: pointer;
`;
