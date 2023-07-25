import React, { useState } from "react";

import { IoPaw } from "react-icons/io5";
import { css, styled } from "styled-components";

function HeaderMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick(event) {
    if (event.target.tagName === "BUTTON") {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  }
  return (
    <Header>
      <div>
        <div>
          <IoPaw />
        </div>
      </div>
      <button onClick={handleClick}>Menu</button>
      {mobileMenuOpen === true && (
        <MobileMenu isOpen={mobileMenuOpen}>
          <button onClick={handleClick}>Close</button>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </MobileMenu>
      )}
    </Header>
  );
}

export default HeaderMobile;

const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MobileMenu = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: pink;
  top: 0;
  left: 0;
  animation-duration: 1s;
  animation-name: menuOpen;

  @keyframes menuOpen {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 0%;
    }
  }
`;
