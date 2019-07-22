import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
`;
export const ContentWrapper = styled.div`
  //background-color: rgba(33,32,41,0.54);
 	width: 1115px; 
  height: 585px;
  background-color: rgba(156,125,108,0.25);
  border-radius: 7px 7px;
  box-shadow: #33313b 2px 2px 2px;
  padding: 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h3`
  font-size: 22px;
  font-family: "Fira Code",monospace;
`;
export const UserInfo = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Righteous', cursive;
  font-size: 26px;
  color: #33313b;
`;
export const ButtonsHolder = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 300px;
`;
export const LogOut = styled.button`
  background: #4592af;
  color: #fff;
  border: 1px solid #4592af;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  width: 100px;
  &:hover {
      background: rgba(69,146,175,0.58);
      color: #f6f5f5;
  }
`;
export const CreateButton = styled.button`
  background: #4592af;
  color: #fff;
  border: 1px solid #4592af;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  width: 100px;
  &:hover {
      background: rgba(69,146,175,0.58);
      color: #f6f5f5;
  }
`;

export const Placeholder = styled.div`
  align-self: flex-start;
  font-family: 'Righteous', cursive;
  font-size: 15px;
  color: #33313b;
`;
