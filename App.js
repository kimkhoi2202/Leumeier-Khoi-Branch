import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
// import { ExhibitsScreen } from "./src/features/screens/exhibits.screen";
// import { HomeScreen } from "./src/features/screens/home.screen";
import { SafeArea } from "./src/infrastructure/spacer/safe-area.components";

import { HomeScreen } from "./src/features/screens/home.screen"

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Explore: "md-map",
  Exhibits: "heart",
};

const Home = () => (
  <SafeArea>
    <Text>Home</Text>
  </SafeArea>
);

const Explore = () => (
  <SafeArea>
    <Text>Explore</Text>
  </SafeArea>
);

const Exhibits = () => (
  <SafeArea>
    <Text>Exhibits</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Exhibits" component={Exhibits} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
