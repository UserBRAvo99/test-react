import { styled } from "styled-components";
import { IconComponent } from "../IconComponent";

import cynologists from "../Data/data";

function UserComponent() {
  const {
    lena: {
      linkFacebook,
      linkInstagram,
      linkTelegram,
      tel,
      foto,
      name,
      profession,
    },
  } = cynologists;
  return (
    <Section>
      <Img src={foto} alt="user" />
      <NameTitle>{name}</NameTitle>
      <Paragraph>{profession}</Paragraph>
      <IconComponent
        facebook={linkFacebook}
        instagram={linkInstagram}
        telegram={linkTelegram}
        phone={tel}
      />
    </Section>
  );
}

export default UserComponent;

const Section = styled.section`
  display: flex;
  width: 280px;
  min-height: 500px;
  flex-direction: column;
  align-items: center;
  background-color: pink;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NameTitle = styled.h3``;

const Paragraph = styled.p``;
