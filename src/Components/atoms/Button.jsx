import styled from 'styled-components';

const Button = styled.button`
  padding: 1.3em 3em;
  font-size: ${({ large }) => (large ? '24px' : '12px')};
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    background-color: #23c483;
    transform: translateY(-1px);
  }
`;

export default Button;
