import styled from "styled-components";
import Image from "next/image";
import { Grid } from "@mui/material";
import { AppWrapper } from "../Layout/AppWrapper";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  @media (max-width: 960px) {
    padding-left: 40px;
    padding-bottom: 30px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Title = styled.div`
  line-height: 32px;
  font-size: 18px;
  color: #8e48f6;
`;

const Description = styled.h1`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const Article = styled.div`
  font-size: 18px;
  line-height: 32px;
  color: #9e9cc9;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: max-content;
  border: 2px solid #f1f1f9;
  border-radius: 16px;
  padding: 16px 24px;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid white;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("/Images/token-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

interface ITokenSectionProps {
  tokenData: any;
}

const TokenDescribtionSection: React.FC<ITokenSectionProps> = ({
  tokenData,
}) => {
  return (
    <AppWrapper>
      <MainWrapper>
        <Grid container>
          <Grid item md={6} sm={12} order={{ md: 2, xs: 2 }}>
            <TextContent>
              <Title>TOKEN</Title>
              <Description>{tokenData[0].description}</Description>
              <Article>{tokenData[0].content}</Article>
              <Button>{tokenData[0].button}</Button>
            </TextContent>
          </Grid>
          <Grid item md={6} sm={12} order={{ md: 2, xs: 1 }}>
            <ImageWrapper>
              <Image
                src="/metasport-coin-anim.gif"
                alt="tokenAnimation"
                width={350}
                height={350}
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </MainWrapper>
    </AppWrapper>
  );
};

export default TokenDescribtionSection;
