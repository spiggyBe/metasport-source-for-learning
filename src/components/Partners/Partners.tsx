import React from "react";
import styled from "styled-components";
import PartnersCarousel from "./PartnersCarousel/PartnersCarousel";
import { AppWrapper } from "../Layout/AppWrapper";

const PartnersContainer = styled.div`
  text-align: center;
  overflow-x: hidden;
  margin-top: 100px;
`;

const PartnersHeading = styled.h1`
  margin-bottom: 50px;
  color: #ffffff;
  font-size: 48px;
  @media (max-width: 960px) {
    padding: 40px;
    font-size: 40px;
  }
`;

interface PartnersProps {
  data: any;
}

const Partners: React.FC<PartnersProps> = ({ data }) => {
  return (
    <AppWrapper>
      <PartnersContainer>
        <PartnersHeading>Our partners</PartnersHeading>
        <PartnersCarousel slides={data} direction="right" />
      </PartnersContainer>
    </AppWrapper>
  );
};

export default Partners;
