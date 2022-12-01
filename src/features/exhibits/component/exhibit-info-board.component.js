import React from "react";
import styled from "styled-components/native";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";

const ExhibitCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ExhibitCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Zone = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Artist = styled(Text)`
  padding: ${(props) => props.theme.space[1]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const BirthPl = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const BirthYr = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Materials = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const ExhibitSz = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Funds = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Disc = styled(Text)`
  padding: ${(props) => props.theme.space[1]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  justify-content: flex-start;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ExhibitInfoCard = ({ Exhibit = {} }) => {
  const {
    name = "The Eye",
    zone = "Ferring Family Foumdation - Museum Lawn",
    icons = [
      "https://live.staticflickr.com/65535/52237386792_b2760fd6e4_w.jpg",
    ],
    photos = [
      "https://c2.staticflickr.com/2/1898/30288763508_e71cec0bb5_b.jpg",
    ],
    artist = "Tony Tasset",
    birthPl = "America,",
    birthYr = " 1960",
    materials = "fiberglass, resin, oil paint, steel",
    exhibitSz = "452 inches circumference",
    funds = "Mark Twain Laumeier Endowment Fund",
    disc = "Through this gigantic, blue eyeball, Tasset creates tension as the sculpture stares—larger than life—across the landscape and back at the viewer. Modeled after Tasset’s own eye, the never- blinking, constantly conscious piece watches over Laumeier day and night. The human eye is simultaneously unique, individual and emblematic; by focusing on a key part of the body, Tasset speaks to a commonality among us, addressing how we engage and perceive each other while concurrently asserting a prophetic, perhaps even omniscient, presence.",
  } = Exhibit;

  return (
    <ExhibitCard elevation={5}>
      <ExhibitCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Artist>{artist}</Artist>
          <BirthPl>{birthPl}</BirthPl>
          <BirthYr>{birthYr}</BirthYr>
          <SectionEnd>
            <Image
              style={{ width: 30, height: 30 }}
              key={name}
              source={{ uri: icons[0] }}
            />
          </SectionEnd>
        </Section>
        <Materials>{materials}</Materials>
        <ExhibitSz>{exhibitSz}</ExhibitSz>
        <Funds>{funds}</Funds>
        <Disc>{disc}</Disc>
        <Zone>{zone}</Zone>
      </Info>
    </ExhibitCard>
  );
};
