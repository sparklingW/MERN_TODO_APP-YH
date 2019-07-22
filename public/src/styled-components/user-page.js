import styled from 'styled-components';
import _profile from '../imgs/for_profile.jpg';

export const Wrapper = styled.section`
	position: absolute;
	z-index: 1;
  background-color: #f6f5f5;
  color: #f6f5f5;
  min-height: 635px;
`;
export const Title = styled.h2`
    //margin: 0 0 0 25px;
    font-size: 21px;
    font-kerning: unset;
    font-family: 'Inconsolata', monospace;
    color: #33313b;
`;
export const Sections = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: inherit;
    min-height: 635px;
    //border: 3px solid red;
    //border:4px solid red;
`;
export const StyledLink = styled.div`
  //border: 1px solid gold;
  color: #f6f5f5;
  font-family: 'Inconsolata', monospace;
  font-size: 22px;
  box-sizing: border-box;
  //padding: 25px;
  //margin: 0 0 40px 0;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 35px 0;
`;
export const LeftSection = styled.section`
  padding: 0 0;
  box-sizing: content-box;
  height: inherit;
  width: 200px;
  border-right: 3px solid #26a69a;
  border-radius: 4px;
  background-color: #fafafa;
  color: #212121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
`;
export const RightSection = styled.section`
	border: 1px solid black;
  display: flex;
  //justify-content: center;
`;
export const ListWrapper = styled.li`
	margin: 10px 0 20px 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1em;
  border-radius: 4px 6px 4px 6px;
  box-shadow: #032d3c 6px 6px 6px;
  background-color: #f1f1f1;
  color: #032d3c;
  font-size: 18px;
  //&:hover {
  //  transform: scale(1.2);
  //}
`;
export const Edit = styled.button`
  width: 100px;
  margin: 0 15px 0 15px;
  background: none;
  color: #fff;
  border: 1px solid #4592af;
  background: #4592af;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  font-family: 'Inconsolata', monospace;
  &:hover {
      background: rgba(69,146,175,0.7);
      color: #fff;
  }
`;
export const Delete = styled.button`
  width: 100px; 
  margin: 0 15px 0 15px;
  background: none;
  color: #f4f4f4;
  outline-style: none;
  font-family: 'Inconsolata', monospace;
  border: 1px solid #4592af;
	background: #4592af;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  &:hover {
      background: rgba(69,146,175,0.7);
      color: #fff;
  }
`;
export const ButtonHolder = styled.div`
  margin: 0 0 0 25px;
  padding: 0 10px;
`;
// export const Create = styled.button`
//   width: 120px;
//   margin: 0 10px 0 25px;
//   background: none;
//   color: #fff;
//   border: 1px solid #4592af;
//   background: #4592af;
//   padding: 12px;
//   border-radius: 6px 6px;
//   cursor: pointer;
//   &:hover {
//       background: rgba(69,146,175,0.7);
//       color: #fff;
//   }
// `;
export const Create = styled.button`
	outline: none;
 width: 70px;
 height: 70px;
 border-radius: 40px;
 background: rgba(69,146,175,0.7);
 border: none;
 position: fixed;
 right: 20px;
 bottom: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
`;
export const CreateLeft = styled.button`
	 font-family: 'Inconsolata', monospace;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  justify-content: center;
  width: 150px;
  border: 1px solid #3f51b5;
  color: rgb(255,254,254);
  background-color: #3f51b5;
  //margin: 0 0 0 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #eeeeee;
  padding: 10px;
  text-decoration: none;
	  //&:hover {
		//  color: #f6f5f5;
		//  border-top: 1px solid rgba(246,245,245,0.3);
		//  border-bottom: 1px solid rgba(246,245,245,0.3);
		//  border-left: 6px solid rgba(66,62,72,0.96);
	  //}
`;
export const Button = styled.button`
  margin: 25px 0 10px 0;
  background: none;
  color: #fff;
  border: 1px solid #4592af;
  background: #4592af;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  &:hover {
      background: rgba(69,146,175,0.7);
      color: #fff;
  }
`;
export const EventsWrapper = styled.div`
  //width: 1140px;
  ////max-height: 555px;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //overflow-y: scroll;
  //overflow-x: hidden;
  //margin: 20px;
  //padding: 10px;
  display: flex;
  flex-direction: row;
`;
export const Block = styled.div`
	border: green;
	display: flex;
	flex-direction: row;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 10px;
`;

export const EventContainer = styled.div`
  //background-color: rgba(33,32,41,0.04);
  border: 1px solid green;
  //border-radius: 7px 7px;
  height: 100%;
  margin: 5px 0 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1160px;
`;

export const GeneralInfo = styled.div`
	//New
	border: 1px solid black;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	//Old
	//width: 100%;
  //margin: 10px;
  //font-family: 'Inconsolata', monospace;
  //font-size: 22px;
  //display: flex;
  //flex-direction: row;
  //align-items: flex-start;
  //justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Holder = styled.div`
	border: 1px solid red;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	margin: 0 10px 0 10px;
	width: 100%;
	font-family: 'Inconsolata', monospace;
	color: #212121;
	//border: 1px solid #eeeeee;
	//padding: 10px 0 0 10px;
  //background-color: #eeeeee;
  //color: #424242;
  //border-radius: 7px 7px;
  //box-shadow: 1px 1px 1px #757575;
  //display: flex;
  //flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
  //width: 1100px;
  
  //&:hover {
  //  //box-shadow: #33313b 3px 3px 3px
  //}
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LeftSectionWrapper = styled.div`
  //border: 3px solid red;
  height: 631px;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;

export const Links = styled.div`
  //border: 2px solid goldenrod;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonOutHolder = styled.div`
  //border: 3px solid blue;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //width: inherit;
`;
export const LogOut = styled.button`
  font-family: 'Inconsolata', monospace;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #aeaeae;
  width: 150px;
  margin: 0 0 10px 0;
  border: 1px solid #303f9f;
  color: #f3e5f5;
  background-color: #303f9f;
  padding: 10px;
  text-decoration: none;
`;
export const Placeholder = styled.div`
  align-self: flex-start;
  font-family: 'Inconsolata', monospace;
  font-size: 15px;
  color: #33313b;
`;
export const UserInfo = styled.div`
  font-family: 'Inconsolata', monospace;
  font-weight: 500;
  //border: 1px solid black;
  color: #212121;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 10px 0 0 10px;
`;
export const TextHolder = styled.div`
	//border: 1px solid red;
	font-family: 'Inconsolata', monospace;
	display: flex;
	//justify-content: flex-start;
`;
export const TitleBlock = styled.div`
	//border: 1px solid red;
  display: flex;
  width: 1000px;
  justify-content: center;
  align-items: center;
`;
