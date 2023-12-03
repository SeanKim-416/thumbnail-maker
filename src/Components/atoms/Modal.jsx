import styled from 'styled-components';

const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
`;

const ThumbNailImg = styled.img`
  width: 700px;
  height: 400px;
  margin: auto;
  opacity: 1;
  z-index: 2;
`;

function StyledModal({ className, imgLink, onClick, isActive }) {
  return (
    <Modal className={className} onClick={onClick} isActive={isActive}>
      <ThumbNailImg src={imgLink} alt="썸네일" />
    </Modal>
  );
}

export default StyledModal;
