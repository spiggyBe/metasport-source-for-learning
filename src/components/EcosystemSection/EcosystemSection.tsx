import styled from "styled-components";

import ArrowsDesktop from "../../../public/Svg/ArrowsDesktop";
import ArrowsMobile from "../../../public/Svg/ArrowsMobile";
import SoccerPlayerIcon from "../../../public/Svg/SoccerPlayer";
import SoccerPlayerMobileIcon from "../../../public/Svg/SoccerPlayerMobile";
import VolleyballPlayerIcon from "../../../public/Svg/VolleyballPlayer";
import VolleyballPlayerMobileIcon from "../../../public/Svg/VolleyballPlayerMobile";
import { useViewport } from "../../utils/useViewPort";
import { AppWrapper } from "../Layout/AppWrapper";

const EcoSystemSection = styled.section`
  width: 100%;
  background-color: #262140;
  position: relative;
  padding-bottom: 104px;
`;

const EcosystemContainer = styled.div`
  width: 100%;
  position: relative;
`;

const EcosystemTitle = styled.h1`
  z-index: 999;
  padding: 50px;
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 40px;
    padding: 30px;
  }
`;

const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const AdvantagesLeft = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const AdvantagesRight = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const BorderAdvantages = styled.div`
  background: linear-gradient(45deg, #f7a6a4, #ea70e5, #8e48f6);
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  @media (max-width: 900px) {
    width: 140px;
    height: 60px;
  }
`;

const EcosystemAdvantages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 16px;
  background: #262140;
  color: #fff;
  padding: 15px;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;
`;

const BorderUpsideGradient = styled.div`
  z-index: -999;
  position: absolute;
  width: 50vw;
  height: 8px;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background: linear-gradient(
    118.61deg,
    #f7a6a4 10.69%,
    #ea70e5 48.23%,
    #8e48f6 84.29%
  );
  filter: blur(16px);
  @media (max-width: 900px) {
    width: 80vw;
  }
`;

const BorderBottomGradient = styled.div`
  z-index: -99;
  position: absolute;
  width: 25vw;
  height: 7px;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  background: linear-gradient(
    118.61deg,
    #e5e5e5 10.69%,
    #ea70e5 48.23%,
    #e5e5e5 84.29%
  );
  filter: blur(20px);
  @media (max-width: 900px) {
    width: 40vw;
  }
`;

const SoccerPosAbsolute = styled.div`
  position: absolute;
  bottom: -105px;
  left: -80px;
  @media (max-width: 900px) {
    bottom: -50px;
    left: 5px;
  }
`;
const VolleyballPosAbsolute = styled.div`
  position: absolute;
  top: -100px;
  right: -60px;
  @media (max-width: 1380px) {
    top: -80px;
    right: 0px;
  }
  @media (max-width: 960px) {
    top: -50px;
    right: 10px;
  }
`;

const mockedDataLeft = [
  { title: "Training rooms in Metaverse" },
  { title: "Assets marketplace" },
  { title: "Voting" },
  { title: "Gamification" },
];
const mockedDataRight = [
  { title: "Live streaming" },
  { title: "Holigans Metaverse Arena" },
  { title: "Loyality Schemes" },
  { title: "Metaverse Wallet" },
];

interface DescriptionProps {
  title: string;
}

const DescriptionBox: React.FC<DescriptionProps> = ({ title }) => {
  return (
    <BorderAdvantages>
      <EcosystemAdvantages>{title}</EcosystemAdvantages>
    </BorderAdvantages>
  );
};

function EcosystemSection() {
  const LeftSideData = mockedDataLeft;
  const RightSideData = mockedDataRight;
  const { width } = useViewport();
  const breakpoint = 900;
  const displayView = width < breakpoint;

  let content;

  if (displayView) {
    content = (
      <EcoSystemSection>
        <AppWrapper>
          <BorderUpsideGradient />
          <EcosystemTitle>metaSport ecosystem</EcosystemTitle>
          <VolleyballPosAbsolute>
            <VolleyballPlayerMobileIcon />
          </VolleyballPosAbsolute>
          <AdvantagesContainer>
            <ArrowsMobile />
            <ColumnWrapper>
              <AdvantagesLeft>
                {LeftSideData.map((des) => {
                  return (
                    <DescriptionBox key={Math.random()} title={des.title} />
                  );
                })}
              </AdvantagesLeft>
              <AdvantagesRight>
                {RightSideData.map((des) => {
                  return (
                    <DescriptionBox key={Math.random()} title={des.title} />
                  );
                })}
              </AdvantagesRight>
            </ColumnWrapper>
            <SoccerPosAbsolute>
              <SoccerPlayerMobileIcon />
            </SoccerPosAbsolute>
          </AdvantagesContainer>
          <BorderBottomGradient />
        </AppWrapper>
      </EcoSystemSection>
    );
  } else {
    content = (
      <EcoSystemSection>
        <AppWrapper>
          <BorderUpsideGradient />
          <EcosystemContainer>
            <VolleyballPosAbsolute>
              <VolleyballPlayerIcon />
            </VolleyballPosAbsolute>
            <EcosystemTitle>metaSport Ecosystem</EcosystemTitle>
            <AdvantagesContainer>
              <AdvantagesLeft>
                {LeftSideData.map((des) => {
                  return (
                    <DescriptionBox key={Math.random()} title={des.title} />
                  );
                })}
              </AdvantagesLeft>
              <ArrowsDesktop />
              <AdvantagesRight>
                {RightSideData.map((des) => {
                  return (
                    <DescriptionBox key={Math.random()} title={des.title} />
                  );
                })}
              </AdvantagesRight>
            </AdvantagesContainer>
            <SoccerPosAbsolute>
              <SoccerPlayerIcon />
            </SoccerPosAbsolute>
          </EcosystemContainer>
          <BorderBottomGradient />
        </AppWrapper>
      </EcoSystemSection>
    );
  }

  return content;
}

export default EcosystemSection;
