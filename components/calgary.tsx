import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";

const calgaryPic = require("../assets/images/calgary.jpg");

export default function CalgaryScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D2001C",
      }}
    >
      <Image source={calgaryPic} style={{ width: 200, height: 200 }} />

      <View
        style={{
          backgroundColor: "#FAAF19",
          width: 393,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.calgary.ca/home.html");
          }}
        >
          <Text>Go to city page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
