import React, { useState } from "react";

import { styled } from "styled-components";

import MobileMenuSlide from "./MobileMenu";

import { BsChevronDoubleLeft } from "react-icons/bs";
import { IoPaw } from "react-icons/io5";

function HeaderMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick(event) {
    if (event.currentTarget.tagName === "BUTTON") {
      toggleMenuOpen();
    }

    function toggleMenuOpen() {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  }
  return (
    <Header>
      <Logo>
        <IoPaw />
      </Logo>
      <ButtonOpenMenu onClick={handleClick}>
        <BsChevronDoubleLeft />
      </ButtonOpenMenu>
      <MobileMenuSlide onClick={handleClick} isOpen={mobileMenuOpen} />
    </Header>
  );
}

export default HeaderMobile;

const Header = styled.header`
  position: relative;
  display: flex;
  width: 100vw;
  padding-top: 10px;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  & svg {
    width: 40px;
    height: 40px;
  }
`;

const ButtonOpenMenu = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  background-color: inherit;
  & svg {
    width: 40px;
    height: 40px;
  }
`;
