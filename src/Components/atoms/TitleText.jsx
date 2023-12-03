import styled from 'styled-components';

const TitleText = styled.div`
  width: 100%;
  font-size: 56px;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: ${({ isWhite }) => (isWhite ? 'white' : 'black')};
`;

export default TitleText;
