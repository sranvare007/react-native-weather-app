import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import React from "react";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";
import { helpers } from "../helpers/helpers";

export default function HomeTopView({ weatherInfo, placeName, imageUrl }) {
  return (
    <>
      <View style={styles.container}>
        <Icon name="plus" size={20} color={"#fff"} />
        <Text style={styles.headerStyle}>Weather</Text>
        <IoniconsIcon name="notifications-outline" size={24} color={"#fff"} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.placeNameStyle}>{placeName}</Text>
        <Text style={styles.locationSubText}>Your Location now</Text>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 100, height: 100 }}
          />
          {/* <Icon name="sun" size={100} color={"white"} /> */}
        </View>
        <Text style={styles.weatherTypeText}>
          {weatherInfo?.weather[0]?.main}
        </Text>
        <Text style={styles.temperatureText}>
          {helpers.kelvinToDegree(weatherInfo?.main?.temp)}°C
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 18,
  },
  headerStyle: {
    fontFamily: TYPOGRAPHY.RAJDHANI_SEMIBOLD,
    fontSize: 18,
    color: "#fff",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  placeNameStyle: {
    fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
    fontSize: 28,
    color: "#fff",
  },
  locationSubText: {
    fontFamily: TYPOGRAPHY.RAJDHANI_MEDIUM,
    color: "#fff",
    opacity: 0.6,
    fontSize: 18,
  },
  weatherTypeText: {
    fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
    fontSize: 20,
    color: "#FFF",
    backgroundColor: "#FFFFFF44",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  temperatureText: {
    fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
    fontSize: 40,
    color: "#fff",
    marginTop: 30,
    marginBottom: 15,
  },
  iconContainer: {
    marginVertical: 30,
  },
});
