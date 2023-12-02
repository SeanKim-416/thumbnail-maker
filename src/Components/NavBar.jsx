import styled from 'styled-components';

const StyledDiv = styled.div`
  color: #fafafa;
  font-size: 24px;
`;

const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #333333;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function StyledNavBar({ className }) {
  return (
    <NavBar className={className}>
      <StyledDiv>블로그 썸네일 생성기</StyledDiv>
      <StyledDiv>by Codeit Sprint 2기 seanKim</StyledDiv>
    </NavBar>
  );
}

export default StyledNavBar;
