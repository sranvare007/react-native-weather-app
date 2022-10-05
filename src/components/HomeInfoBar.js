import { View, Text, StyleSheet } from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import React from "react";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";

export default function HomeInfoBar({ weatherInfo }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabRow}>
          <View style={styles.iconTextContainer}>
            <SimpleLineIcon name="drop" size={22} color="#000" />
            <Text style={styles.textStyle}>{weatherInfo?.main?.humidity}%</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FeatherIcon name="wind" size={22} color="#000" />
            <Text style={styles.textStyle}>{weatherInfo?.wind?.speed}m/h</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <SimpleLineIcon name="speedometer" size={22} color="#000" />
            <Text style={styles.textStyle}>
              {weatherInfo?.main?.pressure}bar
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 3,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  tabRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: TYPOGRAPHY.RAJDHANI_SEMIBOLD,
    fontSize: 20,
    color: "#000",
    marginLeft: 4,
  },
});
