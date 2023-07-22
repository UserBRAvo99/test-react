import React from "react";
import { styled } from "styled-components";

import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

export function IconComponent({ facebook, instagram, telegram, phone }) {
  return (
    <List>
      <Item>
        <Link href={facebook} target="blank" rel="noopener noreferrer">
          <TiSocialFacebook />
        </Link>
      </Item>
      <Item>
        <Link href={instagram} target="blank" rel="noopener noreferrer">
          <TiSocialInstagram />
        </Link>
      </Item>
      <Item>
        <Link href={telegram} target="blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </Link>
      </Item>
      <Item>
        <Link href={"tel:" + phone}>
          <FaPhoneAlt />
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

  a {
    svg {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  /* iconFacebook */
  &:nth-child(1) {
    a {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  /* iconInstagram */
  &:nth-child(2) {
    a {
      svg {
        width: 34px;
        height: 34px;
      }
    }
  }
  /* iconTelegram */
  &:nth-child(3) {
    a {
      svg {
        position: relative;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);

        width: 28px;
        height: 28px;
      }
    }
  }
  /* iconPhone */
  &:nth-child(4) {
    a {
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
`;

const Link = styled.a`
  display: block;
  border-radius: 50%;
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;

  background: red;
  color: yellowgreen;

  &:hover,
  &:focus {
    background-color: firebrick;
    color: white;
  }
`;
