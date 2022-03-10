import styled from "styled-components";
import Image from "next/image";
import { AppWrapper } from "../Layout/AppWrapper";

const MainWrapper = styled.div`
  background-color: #8e48f6;
  width: 100%;
  margin: 180px auto;
  height: max-content;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  color: #fff;
  @media (max-width: 960px) {
    font-size: 48px;
  }
`;

const Button = styled.button`
  width: 204px;
  height: 64px;
  background-color: #241f40;
  border: 1px solid #241f40;
  border-radius: 16px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -50%;
  right: 8px;
  @media (max-width: 1350px) {
    width: 275px;
    top: -30%;
    right: 40px;
  }

  animation: stretch 5s infinite;
  @keyframes stretch {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.001);
    }
    75% {
      transform: scale(0.99);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const GradientCircle = styled.div`
  position: absolute;
  width: 72.82px;
  height: 62px;
  background: linear-gradient(
    118.61deg,
    #f7a6a4 10.69%,
    #ea70e5 48.23%,
    #8e48f6 84.29%
  );
  mix-blend-mode: screen;
  filter: blur(59px);
  border-radius: 214px;
  transform: rotate(-4.75deg);
  bottom: 40px;
  left: 20px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 960px) {
    margin-top: 100px;
  }
`;

function DownloadModalSection() {
  return (
    <MainWrapper>
      <AppWrapper>
        <ModalContainer>
          <TextWrapper>
            <Title>metaFans, are you ready?</Title>
            <Button>Download app</Button>
          </TextWrapper>
          <ImageWrapper>
            <Image
              src="/Images/astronaut.png"
              alt="astronaut"
              width={523}
              height={428}
            />
            <GradientCircle />
          </ImageWrapper>
        </ModalContainer>
      </AppWrapper>
    </MainWrapper>
  );
}

export default DownloadModalSection;
