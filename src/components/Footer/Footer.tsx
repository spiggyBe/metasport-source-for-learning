import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Image from "next/image";
import FooterColumn from "./FooterColumn/FooterColumn";
import { AppWrapper } from "../Layout/AppWrapper";
import AppstoreIcon from "../../../public/Svg/Appstore";
import GoogleplayIcon from "../../../public/Svg/Googleplay";

const FooterContainer = styled.div`
  background-image: url("/hero-v-1-meta-bg-1.svg");
  background-repeat: no-repeat;
  background-position: center;

  margin-top: 200px;

  @media (max-width: 960px) {
    padding-left: 40px;
  }
`;

const FooterDescription = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: white;
  margin-bottom: 20px;
`;

const FooterContent = styled.div`
  width: 274px;
  color: #9e9cc9;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 75px;
`;

const CopyAndRight = styled.div`
  width: max-content;
  color: #9e9cc9;
  font-size: 16px;
  margin-top: 30px;
`;

const ShopsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const Socialmedia = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 960px) {
    gap: 60px;
  }
`;

interface FooterProps {
  footerData: any;
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const icons = footerData.footerSocialIcon
    .slice()
    .reverse()
    .map((icons: any) => {
      return {
        name: icons.name,
        url: icons.icon.fields.file.url,
      };
    });

  return (
    <FooterContainer>
      <AppWrapper>
        <Grid item container>
          <Grid item xs={12} md={4}>
            <FooterDescription>
              {footerData.footerDescription[0].mainDescription}
            </FooterDescription>
            <FooterContent>
              {footerData.footerDescription[0].content}
            </FooterContent>
          </Grid>
          <Grid item xs={6} md={2}>
            <FooterColumn rows={footerData.footerOverview} />
          </Grid>
          <Grid item xs={6} md={2}>
            <FooterColumn rows={footerData.footerOverview} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            order={{ md: 1, xs: 3 }}
            overflow={"hidden"}
          >
            <CopyAndRight>
              {footerData.footerDescription[0].copyrightAndDate}
            </CopyAndRight>
          </Grid>
          <Grid item xs={12} md={4} order={{ md: 2, xs: 1 }}>
            <Socialmedia>
              {icons.map((iconProps) => {
                return (
                  <Image
                    key={Math.random()}
                    src={"https:" + iconProps.url}
                    alt={iconProps.name}
                    width="20px"
                    height="20px"
                  />
                );
              })}
            </Socialmedia>
          </Grid>
          <Grid item xs={12} md={3} order={{ md: 3, xs: 2 }}>
            <ShopsWrapper>
              <AppstoreIcon />
              <GoogleplayIcon />
            </ShopsWrapper>
          </Grid>
        </Grid>
      </AppWrapper>
    </FooterContainer>
  );
};

export default Footer;
