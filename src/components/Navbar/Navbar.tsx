/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger/Hamburger";
import styled from "styled-components";
import navLinksData from "../../utils/data/navLinksData";
import { Grid } from "@mui/material";
import { AppWrapper } from "../Layout/AppWrapper";
import MetasportLogoIcon from "../../../public/Svg/MetasportLogo";

interface INav {
  slideMenu?: any;
  open?: boolean;
}

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  @media (max-width: 900px) {
    padding: 30px;
  }
  @media (max-width: 540px) {
    padding: 20px;
  }
`;

const GradientDiv = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    118.61deg,
    #f7a6a4 10.69%,
    #ea70e5 48.23%,
    #8e48f6 84.29%
  );
  filter: blur(149px);
  border-radius: 214px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;

  cursor: pointer;
`;

const NavList = styled.ul<INav>`
  width: 100%;
  display: flex;
  gap: 48px;
  list-style: none;
  z-index: 99;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
    padding-left: 40px;
    height: 100%;
    position: absolute;
    left: ${({ open }) => (open ? "0" : "-100%")};
    background-color: #1d1934;
  }
  @media (max-width: 540px) {
    padding-left: 20px;
  }
`;

const NavItem = styled.div`
  display: flex;
`;

const NavLink = styled.div`
  color: #ffffff;
  height: 32px;
  min-width: max-content;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonWhitepaper = styled.button`
  width: 159px;
  height: 64px;
  border: 2px solid #f1f1f9;
  border-radius: 16px;
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

const Navbar = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const toggleMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <AppWrapper>
      <Header>
        <GradientDiv />
        {openedMenu ? (
          <NavList slideMenu open>
            <MetasportLogoIcon />
            {navLinksData.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  <NavItem>
                    <NavLink>{link.name}</NavLink>
                  </NavItem>
                </Link>
              );
            })}
            <Link href={"/"}>
              <ButtonWhitepaper>Whitepaper</ButtonWhitepaper>
            </Link>
          </NavList>
        ) : (
          <Grid container alignItems={"center"}>
            <Grid item lg={4} md={3} sm={6} xs={9}>
              <ImageContainer>
                <MetasportLogoIcon />
              </ImageContainer>
            </Grid>
            <Grid item lg={6} md={7} sm={6}>
              <NavList>
                {navLinksData.map((link, index) => {
                  return (
                    <Link key={index} href={link.path}>
                      <NavItem>
                        <NavLink>{link.name}</NavLink>
                      </NavItem>
                    </Link>
                  );
                })}
              </NavList>
            </Grid>
            <Grid
              item
              lg={2}
              md={2}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <Link href={"/"}>
                <ButtonWhitepaper>Whitepaper</ButtonWhitepaper>
              </Link>
            </Grid>
          </Grid>
        )}
        <Hamburger toggleMenu={toggleMenu} />
      </Header>
    </AppWrapper>
  );
};

export default Navbar;
