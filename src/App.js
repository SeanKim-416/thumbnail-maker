import html2canvas from 'html2canvas';

function App() {
  const handleClick = async () => {
    const target = document.querySelector('.target');

    const a = await html2canvas(target);
    const link = a.toDataURL('image/png');
    const image = document.createElement('img');
    image.src = link;
    document.querySelector('.이미지').appendChild(image);
  };

  return (
    <div className="App">
      <div style={{ width: '500px', height: '400px', backgroundColor: 'red' }} className="target">
        안녕
      </div>
      <button onClick={handleClick}>테스트</button>
      <div className="이미지"></div>
    </div>
  );
}

export default App;
