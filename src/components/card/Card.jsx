import styled from 'styled-components';
import fontCard from '../../assets/img/cards/card_back.png'


const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  perspective: 1000px;
  
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  ${(props) => props.$flipped && 'transform: rotateY(180deg);'}
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius:10%;
  backface-visibility: hidden;
`;

const FrontFace = styled(CardFace)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  box-shadow: 0px 3px 6px #00000033;
`;
const Background = styled.div`
 background: url(${fontCard}) no-repeat center center;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BackFace = styled(CardFace)`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotateY(180deg);
  box-shadow: 0px 3px 6px #00000033;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius:10%;
`;

const Card = ({ imageSrc, imageAlt, number, onClick, locked, flipped }) => {
  return (
    <CardContainer onClick={!locked ? onClick : null} className="animate__animated animate__flip m-7">
      <CardInner $flipped={flipped}>
        <FrontFace className="flex items-center justify-center text-4xl">
          <Background />
          {number}
        </FrontFace>
        <BackFace className="flex items-center justify-center">
          <Image src={imageSrc} alt={imageAlt} />
        </BackFace>
      </CardInner>
    </CardContainer>
  );
};

export default Card;