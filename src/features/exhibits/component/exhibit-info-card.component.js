import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const ExhibitCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ExhibitCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
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
    name = "They Eye",
    icon,
    photos = [
      "https://c2.staticflickr.com/2/1898/30288763508_e71cec0bb5_b.jpg",
    ],
    address = "Ferring Family Foumdation - Museum Lawn",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = Exhibit;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ExhibitCard elevation={5}>
      <ExhibitCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <SectionEnd>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ExhibitCard>
  );
};
