import React from "react";
import styled from "styled-components";

export const Alert = props => {
  return (
    <ElementsWrapper>
      <AlertWrapper>
        <MessageText><span>Email or password are incorrect</span></MessageText>
        <Close onClick={props.show}>X</Close>
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
  //border: 2px solid rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  width: 310px;
  margin: -5px 0;
  font-size: 16px;
  display: flex;
  justify-content: center;
  font-family: 'Muli', sans-serif;
`;
const MessageTextEmpty = styled.div`
  color: rgba(0,0,0,0);
  padding: 10px 10px;
  font-size: 16px;
  font-family: 'Muli', sans-serif;
`;
const AlertWrapper = styled.div`
  //border: 2px solid rgba(134, 44, 44, 0.9);
  background-color: #e76165;
  border-radius: 7px 7px;
  margin: -5px 0;
  font-size: 16px;
  width: 310px;
  display: flex;
  justify-content: center;
`;
const MessageText = styled.div`
  color: #f4f4f4;
  padding: 10px 10px;
  font-size: 16px;
  font-family: 'Muli', sans-serif;
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
const ElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
