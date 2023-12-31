import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid #ddd;
  width: 80%;
  height: 50px;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.5s;
  font-size: 100%;

  &:hover,
  &:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
`;

export default Input;
