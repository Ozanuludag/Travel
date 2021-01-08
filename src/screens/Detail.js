import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ListCard from "./ListCard";
import { ScrollView } from "react-native-gesture-handler";

const Detail = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#4b3ca7",
          width: "100%",
          height: "43%",
          position: "absolute",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          alignItems: "center",
          paddingHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <Icon name="menu" size={30} color="#a2a2db" />
        <Icon name="account-circle" size={33} color="#a2a2db" />
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 50,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "#5facdb",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="airplane" color="white" size={32} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 40,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "RobotoBold", color: "#FFF" }}>
          {" "}
          NYC{" "}
        </Text>
        <Text style={{ fontSize: 20, color: "#a2a2db", paddingHorizontal: 15 }}>
          - - - - - - - - - - - - - - - - - - - -
        </Text>
        <Text style={{ fontSize: 24, fontFamily: "RobotoBold", color: "#FFF" }}>
          IDN
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 40,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoBold",
          }}
        >
          New York
        </Text>
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoBold",
          }}
        >
          Indonesia
        </Text>
      </View>
      <Text
        style={{
          paddingHorizontal: 40,
          color: "#a2a2db",
          fontFamily: "RobotoRegular",
        }}
      >
        20 June 2021
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 50,
          marginTop: 110,
        }}
      >
        <Image
          source={require("../images/dots.png")}
          style={{ width: 20, height: 20 }}
        />
        <Image
          source={require("../images/filter.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: 5,
        }}
      >
        <ListCard />
        <ListCard />
        <ListCard />
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
