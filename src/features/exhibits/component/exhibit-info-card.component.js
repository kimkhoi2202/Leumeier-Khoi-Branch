import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  ExhibitCard,
  ExhibitCardCover,
  Info,
  Section,
  SectionEnd,
  Icon,
} from "./exhibit-info-card.styles";

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
        <Text variant="label">{name}</Text>
        <Section>
          <Text variant="caption">{artist}</Text>
          <SectionEnd>
            <Spacer position="left" size="large">
              <Icon key={name} source={{ uri: icons[0] }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{zone}</Text>
      </Info>
    </ExhibitCard>
  );
};
