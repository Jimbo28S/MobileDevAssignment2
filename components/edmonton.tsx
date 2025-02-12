import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";

const edmontonPic = require("../assets/images/edmonton.jpg");

export default function EdmontonScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#041E42",
      }}
    >
      <Image source={edmontonPic} style={{ width: 200, height: 200 }} />

      <View
        style={{
          backgroundColor: "#FF4C00",
          width: 393,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.edmonton.ca/");
          }}
        >
          <Text>Go to city page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
