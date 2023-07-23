import { styled } from "styled-components";
import { IconSocComponent } from "../IconComponent/IconSoc";

import dogTrainerData from "../Data/data";

function TeamComponent() {
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
  } = dogTrainerData;
  return (
    <Section>
      <Img src={foto} alt="user" />
      <NameTitle>{name}</NameTitle>
      <Paragraph>{profession}</Paragraph>
      <IconSocComponent
        facebook={linkFacebook}
        instagram={linkInstagram}
        telegram={linkTelegram}
        phone={tel}
      />
    </Section>
  );
}

export default TeamComponent;

const Section = styled.section`
  display: flex;
  width: 280px;
  min-height: 100px;
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
