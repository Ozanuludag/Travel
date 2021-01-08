import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {StatusBar} from 'expo-status-bar';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require("../images/back.png")}
      style={styles.backGroundStyle}
    >
      <View style={styles.iconsContainer}>
        <Icon name="menu" size={30} color="#a2a2db" style={styles.icon1} />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={styles.icon2}
        />
      </View>
      <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
        <Text style={styles.textOne}>Hello</Text>
        <Text style={styles.textTwo}>
          Lorem ipsum dolor sit amet, consecturar apipcing elit
        </Text>
        <View style={styles.searchBarStyle}>
          <Image
            source={require("../images/search.png")}
            style={styles.searchBarIcon}
          />
          <TextInput style={styles.inputStyle} placeholder="İnput" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: -40, paddingVertical: 20 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={[
              { backgroundColor: "#5facdb" },
              styles.scrollViewImageContainer,
            ]}
          >
             <Icon name="airplane" color="white" size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { backgroundColor: "red" },
              styles.scrollViewImageContainer,
            ]}
          >
            <Icon name="office-building" color="white" size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { backgroundColor: "#ffa06c" },
              styles.scrollViewImageContainer,
            ]}
          >
            <Icon name="bus" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              { backgroundColor: "#bb32fe" },
              styles.scrollViewImageContainer,
            ]}
          >
            <Icon name="dots-horizontal" color="white" size={32} />
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            color: "#FFF",
            fontFamily: "RobotoRegular",
            marginTop: 50,
            fontSize: 17,
          }}
        >
          Recommended
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -40, paddingTop: 30 }}
        >
          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
             
            }}
          >
            <Image
              source={require("../images/1.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />

            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
               
              }}
            >
              <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 12,
                    color: "#a2a2db",
                  }}
                >
                  Lorem ipsum dolor sit amet, consecturar apipcing elit
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal:20
            }}
          >
            <Image
              source={require("../images/2.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />

            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
               
              }}
            >
              <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 12,
                    color: "#a2a2db",
                  }}
                >
                  Lorem ipsum dolor sit amet, consecturar apipcing elit
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#5facdb" />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
            }}
          >
            <Image
              source={require("../images/3.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />

            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
               
              }}
            >
              <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 12,
                    color: "#a2a2db",
                  }}
                >
                  Lorem ipsum dolor sit amet, consecturar apipcing elit
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
          </View>

        </ScrollView>
      </View>
      <StatusBar style="dark"/>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  backGroundStyle: {
    width: "100%",
    height: "100%",
    marginTop:20
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  icon1: { width: 20 },
  icon2: {},
  textOne: {
    fontSize: 40,
    color: "#522289",
    fontFamily: "RobotoBold",
  },
  textTwo: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontFamily: "RobotoRegular",
    color: "#a2a2db",
  },

  searchBarStyle: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  searchBarIcon: {
    height: 14,
    width: 14,
  },
  inputStyle: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: "#ccccef",
  },
  scrollViewImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 66,
    width: 66,
    borderRadius: 50,
    marginLeft: 22,
  },
  scrollableIconStyle: {
    width: 24,
    height: 24,
  },
});
