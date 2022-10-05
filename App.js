import { Provider } from "react-redux";
import store from "./src/app/store";
import Home from "./src/components/Home";
import * as Font from "expo-font";
import LoadingComponent from "./src/components/LoadingComponent";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

const customFonts = {
  "Rajdhani-Bold": require("./assets/fonts/Rajdhani-Bold.ttf"),
  "Rajdhani-Light": require("./assets/fonts/Rajdhani-Light.ttf"),
  "Rajdhani-Medium": require("./assets/fonts/Rajdhani-Medium.ttf"),
  "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
  "Rajdhani-SemiBold": require("./assets/fonts/Rajdhani-SemiBold.ttf"),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"#2192FF"} barStyle={"dark-content"} />
      <Home />
    </Provider>
  );
}
