import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import { SafeArea } from "../component/utils/safe-area.components";
import { RoundedButton } from "../component/utils/RoundedButton"

export const HomeScreen = () => (
  <SafeArea>
    <View>
      <Image source={require("./homeScreenLogo.jpg")} />
    </View>
    <View>
      <Text>"FREE AND Open Daily From 8 Am To 30 Minutes Past Sunset"</Text>
      <Text>
        "The ARONSON FINE ARTS CENTER Is OPEN THURSDAY - SUNDAY, With The
        Exception Of During Private Events."
      </Text>
      <Text>"https://www.laumeiersculpturepark.org/visit"</Text>
      <Text>"Restrooms Are Open In The Way Field And Carriage House"</Text>
      <Text>
        "LAUMEIER SCULPTURE PARK / ENGAGING THE COMMUNITY THROUGH ART AND
        NATURE"
      </Text>
    <>
      <View style={styled.timingButton}>
        <RoundedButton size={75} title="COVID-19 HEALTH & SAFETY" onPress={openURL("https://www.laumeiersculpturepark.org/covid19")} />
      </View>
      <View style={styled.timingButton}>
                    <RoundedButton
                        size={75}
                        title="Missouri ArtSafe Certification"
                        onPress={openURL("https://www.missouriartsafe.org/")}
                    />
      </View>
    </>
            <Text source={{ uri: "https://www.laumeiersculpturepark.org/covid19" }}>
        "Please visit our COVID safety page for the most up-to-date information
        on Laumeier's "
      </Text>
    </View>
  </SafeArea>
);
