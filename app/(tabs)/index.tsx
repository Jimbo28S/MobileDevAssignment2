import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../../components/signin";
import Welcome from "../../components/welcome";
import { useState } from "react";
import { Users } from "../../constants/defaultTypes";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CalgaryScreen from "../../components/calgary";
import EdmontonScreen from "../../components/edmonton";

const userObjectDefault: Users = {
  firstName: "felix",
  lastName: "Turnbull",
  phoneNumber: "750320333",
  email: "felix@gmail.com",
  username: "felix",
  preferences: ["vegan", "vegetarian"],
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [userObject, setUserObject] = useState<Users>(userObjectDefault);

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeMessage}>
          <Text style={styles.welcomeText}>Welcome to an app about albertan cities</Text>
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name={"person"} size={size} color={color} />;
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
            tabBarItemStyle: { marginHorizontal: 30 },
            tabBarStyle: {
              width: 393,
            },
          })}
        >
          <Tab.Screen name="Calgary" component={CalgaryScreen} />
          <Tab.Screen name="Edmonton" component={EdmontonScreen} />
        </Tab.Navigator>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Signin
          booleanToggle={setIsLoggedIn}
          username={username}
          setUsername={setUsername}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006d75",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
  },
  welcomeMessage: {
    height: 50,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20
  }
});
