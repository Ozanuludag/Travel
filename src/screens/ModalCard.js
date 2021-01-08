import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const ModalCard = () => {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        alignSelf: "center",
        marginTop: 290,
        backgroundColor: "#FFF",
        height: 386,
        elevation: 1,
        width: 270,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "RobotoBold", color: "#4b3ca7", fontSize: 20 }}
        >
          NYC
        </Text>
        <Text
          style={{
            fontFamily: "RobotoBold",
            color: "#4b3ca7",
            paddingHorizontal: 12,
          }}
        >
          - - - - - - - - - - - - - - - -
        </Text>
        <Text
          style={{ fontFamily: "RobotoBold", color: "#4b3ca7", fontSize: 20 }}
        >
          IDN
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          New York
        </Text>
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Indonesia
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#522289",
            fontFamily: "RobotoRegular",
            fontSize: 20,
          }}
        >
          09:00 AM
        </Text>
        <Text
          style={{
            color: "#522289",
            fontFamily: "RobotoRegular",
            fontSize: 20,
          }}
        >
          21:00 PM
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Name
        </Text>
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Seat
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#522289",
            fontFamily: "RobotoRegular",
            fontSize: 20,
          }}
        >
          Alexson
        </Text>
        <Text
          style={{
            color: "#522289",
            fontFamily: "RobotoRegular",
            fontSize: 20,
          }}
        >
          15A
        </Text>
      </View>
      <Text
        style={{
          color: "#a2a2db",
          fontFamily: "RobotoRegular",
          fontSize: 17,
          marginRight: -5,
          marginVertical: 8,
        }}
      >
        {" "}
        - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Class
        </Text>
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
          }}
        >
          Price
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#522289",
            fontFamily: "RobotoRegular",
            fontSize: 20,
          }}
        >
          Bussines
        </Text>
        <Text
          style={{
            color: "#522289",
            fontFamily: "RobotoBold",
            fontSize: 20,
          }}
        >
          $400
        </Text>
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: "#44FEA1",
          margin: 10,
          marginTop: 20,
          borderRadius: 20,
          alignItems: "center",
          padding: 10,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontFamily: "RobotoBold",
            fontSize: 18,
            color: "#FFF",
          }}
        >
          Check Out
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default ModalCard;

const styles = StyleSheet.create({});
