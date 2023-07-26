import React, { useState } from "react";

import { styled } from "styled-components";
import photoHeaderMobile from "../Data/dog.png";

import ButtonOpenMobileMenu from "./ButtonOpenMobileMenu";
import MobileMenuSlide from "./MobileMenu";

import LogoPaw from "./Logo";

function HeaderMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick(event) {
    if (event.currentTarget.tagName === "BUTTON") {
      toggleMenuOpen();
    }
  }
  function toggleMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <>
      <Header>
        <LogoPaw />

        <ButtonOpenMobileMenu onClick={handleClick} />
        <MobileMenuSlide onClick={handleClick} isOpen={mobileMenuOpen} />
      </Header>
      <ImgHeader src={photoHeaderMobile} alt="" />
    </>
  );
}

export default HeaderMobile;

const Header = styled.header`
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  /* background-image: url(${photoHeaderMobile});
  background-size: contain;
  background-repeat: no-repeat; */
`;

const ImgHeader = styled.img`
  z-index: -1;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
