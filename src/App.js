import Button from './Components/atoms/Button';
import GlobalStyle from './Components/GlobalStyle';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button>버튼임</Button>
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
