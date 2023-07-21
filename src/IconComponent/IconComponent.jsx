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

export function IconComponent({ facebook, instagram, telegram, phone }) {
  console.log(facebook);
  return (
    <List>
      <Item>
        <Link href={facebook} target="blank" rel="noopener noreferrer">
          <TiSocialFacebook className={scss.icon} />
        </Link>
      </Item>
      <Item>
        <Link href={instagram} target="blank" rel="noopener noreferrer">
          <TiSocialInstagram className={scss.icon} />
        </Link>
      </Item>
      <Item>
        <Link href={telegram}>
          <FaPaperPlane className={scss.icon} />
        </Link>
      </Item>
      <Item>
        <Link
          href={"tel:" + { phone }}
          target="blank"
          rel="noopener noreferrer"
        >
          <FaPhoneAlt className={scss.icon} />
        </Link>
      </Item>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const Item = styled.li`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aqua;
`;

const Link = styled.a`
  display: block;
`;
