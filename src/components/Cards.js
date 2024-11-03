import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("screen");
const Cards = ({ genre, active = false, onPress }) => {
  console.log(onPress);
  return (
    <TouchableOpacity onPress={onPress}
      style={[
        styles.containers,
        { backgroundColor: active ? Colors.BLUE : "white" },
      ]}
    >
      <Text style={{ color: active ? "white" : "black" }}>{genre}</Text>
    </TouchableOpacity>
  );
};

export default Cards;
const styles = StyleSheet.create({
  containers: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 6,
    margin: 20,
    borderRadius: 5,
    paddingVertical: 6,
    elevation: 5,
    height: 50,
    width: width * 0.25,
  },
});
