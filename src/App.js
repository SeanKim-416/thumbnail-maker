import styled from 'styled-components';
import NavBar from './Components/NavBar';
import ThumbNailBox from './Components/atoms/ThumbnailBox';
import TitleText from './Components/atoms/TitleText';
import GlobalStyle from './Components/GlobalStyle';
import Button from './Components/atoms/Button';
import Input from './Components/atoms/Input';
import { useState } from 'react';
const Container = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 200px;
  gap: 50px;
  width: 700px;
`;
function App() {
  const [titleText, setTitleText] = useState('');

  const handleChange = (e) => {
    setTitleText(e.target.value);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Main>
        <ThumbNailBox>
          <TitleText>{titleText}</TitleText>
        </ThumbNailBox>
        <Container>
          <Button>배경색 초기화</Button>
          <Button>배경색 랜덤 지정</Button>
        </Container>
        <Container>
          <Input placeholder="제목을 입력하세요" onChange={handleChange} />
        </Container>
        <Container>
          <Button large>썸네일 추출!</Button>
        </Container>
      </Main>
    </div>
  );
}

export default App;

// const handleClick = async () => {
//   const target = document.querySelector('.target');

//   const a = await html2canvas(target);
//   const link = a.toDataURL('image/png');
//   const image = document.createElement('img');
//   image.src = link;
//   document.querySelector('.이미지').appendChild(image);
// };

{
  /* <div style={{ width: '500px', height: '400px', backgroundColor: 'red' }} className="target">
        안녕
      </div>
      <button onClick={handleClick}>테스트</button>
      <div className="이미지"></div> */
}
