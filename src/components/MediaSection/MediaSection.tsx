import Image from "next/image";
import video from "../../../public/Images/video.png";
import styled from "styled-components";

import { AppWrapper } from "../Layout/AppWrapper";

const MediaSectionContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 80px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    padding: 40px;
  }
`;
const BackgroundShadowLeft = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  background-image: url("/Images/hero-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  top: 230px;
  left: -70px;
  @media (max-width: 1200px) {
    top: 200px;
    left: -60px;
  }
  @media (max-width: 960px) {
    top: 130px;
    left: -30px;
  }
  @media (max-width: 660px) {
    top: 80px;
    left: -10px;
  }
  @media (max-width: 450px) {
    top: 60px;
    left: -5px;
  }
`;
const BackgroundShadowRight = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  background-image: url("/Images/hero-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  overflow: hidden;
  left: 350px;
  top: -90px;
  @media (max-width: 1200px) {
    top: -70px;
    left: 280px;
  }
  @media (max-width: 960px) {
    top: -40px;
    left: 200px;
  }
  @media (max-width: 660px) {
    top: -10px;
    left: 130px;
  }
  @media (max-width: 450px) {
    top: 0px;
    left: 70px;
  }
  @media (max-width: 350px) {
    top: 0px;
    left: 80px;
  }
`;

const MediaSection = () => {
  return (
    <AppWrapper>
      <MediaSectionContainer>
        <BackgroundShadowRight />
        <BackgroundShadowLeft />
        <Image src={video} alt="video" />
      </MediaSectionContainer>
    </AppWrapper>
  );
};

export default MediaSection;
