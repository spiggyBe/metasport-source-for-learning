import { Grid } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { AppWrapper } from "../Layout/AppWrapper";

const MainSectionContainer = styled.div`
  width: 100%;
  margin-bottom: 90px;
  @media (max-width: 900px) {
    padding: 40px;
  }
`;

const Mission = styled.div`
  color: #8e48f6;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.1em;
`;

const MainSectionTitle = styled.h1`
  font-size: 48px;
  line-height: 64px;
  color: #fff;
  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 52px;
  }
`;

const MainSectionParagraph = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #9e9cc9;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const MainSection = () => {
  return (
    <AppWrapper>
      <MainSectionContainer>
        <Grid container>
          <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
            <ImageWrapper>
              <Image
                src="/Images/mainSectionImg.png"
                width={770}
                height={525}
                alt="mobile VR opportunities"
              />
            </ImageWrapper>
          </Grid>
          <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
            <Mission>MISSION</Mission>
            <MainSectionTitle>
              Become a superfan with VR/AR technology
            </MainSectionTitle>
            <MainSectionParagraph>
              Metasport is geared towards bringing the palpable excitement of
              sports into the innovative turn of the metaverse. Bringing to bear
              the full power of Alternative reality, Virtual reality and gaming
              into sports is the one mission that keeps Metasport going.
            </MainSectionParagraph>
            <MainSectionParagraph>
              The platform will enable fans, teams and clubs from anywhere on
              the planet to interface and mingle in the metaverse.
            </MainSectionParagraph>
            <MainSectionParagraph>
              We are bringing sports heroes to their fans, allowing them to
              indulge each other in fun, creative ways while building the
              biggest metasport fan hub all over the world.
            </MainSectionParagraph>
          </Grid>
        </Grid>
      </MainSectionContainer>
    </AppWrapper>
  );
};

export default MainSection;
