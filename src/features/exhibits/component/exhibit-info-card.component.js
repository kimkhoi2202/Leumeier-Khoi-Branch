import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Card } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const ExhibitCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ExhibitCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Zone = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Artist = styled(Text)`
  padding: ${(props) => props.theme.space[0]};
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
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
  } = Exhibit;

  return (
    <ExhibitCard elevation={5}>
      <ExhibitCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
          <Artist>{artist}</Artist>
          <SectionEnd>
            <Image
              style={{ width: 45, height: 45 }}
              key={name}
              source={{ uri: icons[0] }}
            />
          </SectionEnd>
        </Section>
        <Zone>{zone}</Zone>
      </Info>
    </ExhibitCard>
  );
};
