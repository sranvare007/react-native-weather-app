import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";
import Icon from "react-native-vector-icons/FontAwesome5";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { setLocationCoords } from "../features/locationCoords";
import { NetworkManager } from "../network/networkManager";
import { REACT_APP_OPEN_WEATHER_API_KEY } from "@env";
import LoadingComponent from "./LoadingComponent";
import { AppConstants } from "../constants/constants";

export default function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [placeName, setPlaceName] = useState("");
  const [imageUrl, setImageUrl] = useState(`${AppConstants.WEATHER_IMAGE_URL}`);

  const locationCoords = useSelector((state) => state.locationCoords);
  const dispatch = useDispatch();

  function kelvinToDegree(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  async function getWeatherInfo(latitude, longitude) {
    const weatherResponse = await NetworkManager.getWeatherInfo({
      lat: latitude,
      lon: longitude,
      appid: REACT_APP_OPEN_WEATHER_API_KEY,
    });
    setWeatherInfo(weatherResponse);
    const locationName = await NetworkManager.getLocationName({
      lat: latitude,
      lon: longitude,
      appid: REACT_APP_OPEN_WEATHER_API_KEY,
      limit: 1,
    });
    const placeName = `${locationName[0]?.name}, ${locationName[0]?.state}, ${locationName[0]?.country}`;
    setPlaceName(placeName);
    const imageSourceUrl = imageUrl.replace(
      "$icon$",
      weatherResponse?.weather[0]?.icon
    );
    // .replace("$id$", weatherResponse?.weather[0]?.id);
    setImageUrl(imageSourceUrl);
    console.log(imageSourceUrl);
    setIsLoading(false);
  }

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    dispatch(
      setLocationCoords({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
    );
    setLocation(location);
    getWeatherInfo(location.coords.latitude, location.coords.longitude);
  }

  useEffect(() => {
    getLocation();
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2192FF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 18,
        }}
      >
        <Icon name="plus" size={20} color={"#fff"} />
        <Text
          style={{
            fontFamily: TYPOGRAPHY.RAJDHANI_SEMIBOLD,
            fontSize: 18,
            color: "#fff",
          }}
        >
          Weather
        </Text>
        <IoniconsIcon name="notifications-outline" size={24} color={"#fff"} />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
            fontSize: 28,
            color: "#fff",
          }}
        >
          {placeName}
        </Text>
        <Text
          style={{
            fontFamily: TYPOGRAPHY.RAJDHANI_MEDIUM,
            color: "#fff",
            opacity: 0.6,
            fontSize: 18,
          }}
        >
          Your Location now
        </Text>
        <View
          style={{
            marginVertical: 30,
          }}
        >
          <Icon name="sun" size={100} color={"white"} />
        </View>
        <Text
          style={{
            fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
            fontSize: 20,
            color: "#FFF",
            backgroundColor: "#FFFFFF88",
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 26,
          }}
        >
          {weatherInfo?.weather[0]?.main}
        </Text>
        <Text
          style={{
            fontFamily: TYPOGRAPHY.RAJDHANI_BOLD,
            fontSize: 40,
            color: "#fff",
            marginTop: 30,
            marginBottom: 15,
          }}
        >
          {kelvinToDegree(weatherInfo?.main?.temp)}°C
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
        }}
      ></View>
    </View>
  );
}
