import React, { useState } from "react";

import { styled } from "styled-components";
import "animate.css";

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
    <Header>
      <LogoPaw />
      <ButtonOpenMobileMenu onClick={handleClick} />
      <MobileMenuSlide onClick={handleClick} isOpen={mobileMenuOpen} />
    </Header>
  );
}

export default HeaderMobile;

const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 10px;
  justify-content: space-between;
`;
