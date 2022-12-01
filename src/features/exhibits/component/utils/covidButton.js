import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const covidURL = "https://www.laumeiersculpturepark.org/covid19";


const OpenURLButton = ({ url, children }) => {
  const handlePress = openURL(url);
    }, [url];

  return <Button title={children} onPress={handlePress} />;
};

export const covidBuuton = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={covidURL}>COVID-19 HEALTH & SAFETY</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;