import React, { useState } from "react";

import { styled } from "styled-components";

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
    </>
  );
}

export default HeaderMobile;

const Header = styled.header`
  z-index: 2;
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;
