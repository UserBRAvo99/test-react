import React from "react";
import { styled } from "styled-components";
import scss from "./iconComponent.module.scss";

import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const socLink = {
  inst: "https://www.instagram.com/",
  face: "https://www.facebook.com/",
  tel: "+380632320670",
  teleg: "https://web.telegram.org/",
};

export function IconComponent(facebook, instagram, telegram, phone) {
  return (
    <List>
      <Item>
        <Link href={socLink.face} target="blank" rel="noopener noreferrer">
          <TiSocialFacebook className={scss.icon} />
        </Link>
      </Item>
      <Item>
        <Link href={socLink.inst} target="blank" rel="noopener noreferrer">
          <TiSocialInstagram className={scss.icon} />
        </Link>
      </Item>
      <Item>
        <Link href={socLink.tel} target="blank" rel="noopener noreferrer">
          <FaPaperPlane className={scss.icon} />
        </Link>
      </Item>
      <Item>
        <Link href={socLink.face} target="blank" rel="noopener noreferrer">
          <FaPhoneAlt className={scss.icon} />
        </Link>
      </Item>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;

const Item = styled.li`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aqua;
  margin-right: 40px;
  &:last-child {
    margin-left: 0;
  }
`;

const Link = styled.a`
  display: block;
  /* width: 100%;
  height: 100%; */
`;
