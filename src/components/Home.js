import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TYPOGRAPHY } from "../constants/TYPOGRAPHY";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#94B3FD",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginHorizontal: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "blue",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: TYPOGRAPHY.RAJDHANI_SEMIBOLD,
              fontSize: 24,
              // color: "white",
              flex: 1,
              backgroundColor: "red",
              textAlign: "center",
            }}
          >
            Varale
          </Text>
          <Text
            style={{
              fontFamily: TYPOGRAPHY.RAJDHANI_SEMIBOLD,
              fontSize: 24,
              // color: "white",
            }}
          >
            Options
          </Text>
        </View>
      </View>
    </View>
  );
}
