import React from "react";

import { IoPaw } from "react-icons/io5";

function HeaderMobile() {
  return (
    <header>
      <div>
        <div>
          <IoPaw />
        </div>
        <button>Menu</button>
      </div>
      <div>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMobile;
