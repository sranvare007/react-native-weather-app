import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { helpers } from "../helpers/helpers";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";

export default function HomeInfoList({ weatherInfo }) {
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.rowStyles}>
            <Text style={styles.textStyle}>Sunrise Time</Text>
            <Text style={styles.textStyle}>
              {new Date(weatherInfo?.sys?.sunrise * 1000).toDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.dividerStyle}></View>
        <View style={styles.rowContainer}>
          <View style={styles.rowStyles}>
            <Text style={styles.textStyle}>Sunset Time</Text>
            <Text style={styles.textStyle}>
              {new Date(weatherInfo?.sys?.sunset * 1000).toDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.dividerStyle}></View>
        <View style={styles.rowContainer}>
          <View style={styles.rowStyles}>
            <Text style={styles.textStyle}>Minimum Temperature</Text>
            <Text style={styles.textStyle}>
              {helpers.kelvinToDegree(weatherInfo?.main?.temp_min)}°C
            </Text>
          </View>
        </View>
        <View style={styles.dividerStyle}></View>
        <View style={styles.rowContainer}>
          <View style={styles.rowStyles}>
            <Text style={styles.textStyle}>Maximum Temperature</Text>
            <Text style={styles.textStyle}>
              {helpers.kelvinToDegree(weatherInfo?.main?.temp_max)}°C
            </Text>
          </View>
        </View>
        <View style={styles.dividerStyle}></View>
        <View style={styles.rowContainer}>
          <View style={styles.rowStyles}>
            <Text style={styles.textStyle}>Visibility</Text>
            <Text style={styles.textStyle}>{weatherInfo?.visibility}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
  },
  columnContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 3,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  dividerStyle: {
    width: "100%",
    backgroundColor: "#AEBDCA",
    opacity: 0.4,
    height: 1,
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 8,
  },
  textStyle: {
    fontFamily: TYPOGRAPHY.RAJDHANI_SEMIBOLD,
    fontSize: 16,
    color: "#000",
  },
});
