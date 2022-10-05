import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { setLocationCoords } from "../features/locationCoords";
import { NetworkManager } from "../network/networkManager";
import { REACT_APP_OPEN_WEATHER_API_KEY } from "@env";
import LoadingComponent from "./LoadingComponent";
import { AppConstants } from "../constants/constants";
import HomeTopView from "./HomeTopView";
import { helpers } from "../helpers/helpers";
import HomeInfoBar from "./HomeInfoBar";
import HomeInfoList from "./HomeInfoList";

export default function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [placeName, setPlaceName] = useState("");
  const [imageUrl, setImageUrl] = useState(`${AppConstants.WEATHER_IMAGE_URL}`);

  const locationCoords = useSelector((state) => state.locationCoords);
  const dispatch = useDispatch();

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
    <ScrollView>
      <View style={styles.container}>
        <HomeTopView
          weatherInfo={weatherInfo}
          placeName={placeName}
          imageUrl={imageUrl}
        />
        <View style={styles.infoContainer}>
          <HomeInfoBar weatherInfo={weatherInfo} />
          <HomeInfoList weatherInfo={weatherInfo} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2192FF",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eee",
    flex: 1,
  },
});
