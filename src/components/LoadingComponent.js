import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";

export default function LoadingComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
    fontSize: 28,
  },
});
