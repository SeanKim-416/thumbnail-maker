import styled from 'styled-components';
import NavBar from './Components/NavBar';
import ThumbNailBox from './Components/atoms/ThumbnailBox';
import TitleText from './Components/atoms/TitleText';
import GlobalStyle from './Components/GlobalStyle';
import Button from './Components/atoms/Button';
import Input from './Components/atoms/Input';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import StyledModal from './Components/atoms/Modal';
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
  const [titleText, setTitleText] = useState('제목을 입력해 주세요');
  const [boxRGB, setBoxRGB] = useState({ red: 255, green: 255, blue: 255 });
  const [imgLink, setImgLink] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const canvasRef = useRef();
  const handleChange = (e) => {
    setTitleText(e.target.value);
  };

  const handleClearClick = () => {
    setBoxRGB({ ...boxRGB, red: 255, green: 255, blue: 255 });
  };
  const createRandomRGBValue = () => {
    const MAX_VALUE = 256;
    return Math.floor(Math.random() * MAX_VALUE);
  };
  const handleRandomButtonClick = () => {
    const redValue = createRandomRGBValue();
    const greenValue = createRandomRGBValue();
    const blueValue = createRandomRGBValue();
    setBoxRGB({ ...boxRGB, red: redValue, green: greenValue, blue: blueValue });
  };

  const handleExtractButtonClick = async () => {
    const extracted = await html2canvas(canvasRef.current);
    const createdLink = extracted.toDataURL('image/png');
    setImgLink(createdLink);
    setIsActive(true);
  };

  const handleModal = () => {
    setIsActive(false);
  };

  const handleFontColorClick = () => {
    isWhite ? setIsWhite(false) : setIsWhite(true);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <StyledModal imgLink={imgLink} onClick={handleModal} isActive={isActive} />
      <NavBar />
      <Main>
        <ThumbNailBox
          style={{ backgroundColor: `rgb(${boxRGB.red}, ${boxRGB.green}, ${boxRGB.blue})` }}
          ref={canvasRef}
        >
          <TitleText isWhite={isWhite}>{titleText}</TitleText>
        </ThumbNailBox>
        <Container>
          <Button onClick={handleClearClick}>배경색 초기화</Button>
          <Button onClick={handleRandomButtonClick}>배경색 랜덤 지정</Button>
          <Button onClick={handleFontColorClick}>제목 색 바꾸기</Button>
        </Container>
        <Container>
          <Input placeholder="제목을 입력하세요" onChange={handleChange} />
        </Container>
        <Container>
          <Button large onClick={handleExtractButtonClick}>
            썸네일 추출!
          </Button>
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
