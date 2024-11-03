import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";
const MovieCard = () => {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {/* <Image source={{uri}} /> */}
        <Ionicons
          onPress={() => setLiked(!liked)}
          name={liked ? "heart" : "heart-outline"}
          size={30}
          color={liked ? "red" : "black"}
          style={{ position: "absolute", left: 10, bottom: 10 }}
        />
      </View>
      <View style={styles.footContainer}>
        <View style={styles.movieText}>
          <Text style={styles.movieTitle}>Bahubali 3</Text>
          <Text style={styles.movieSub}>[Hindi]</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 3 }}>
          <Ionicons name="heart" size={17} color="red" />
          <Text>80%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    width: 230,
    backgroundColor: Colors.BLUE,
    height: 300,
    borderRadius: 12,
    elevation: 5,
  },
  footContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginRight: 20,
  },
  movieText: {},
  movieTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  movieSub: {
    opacity: 0.7,
  },
  ratingContainer: {},
});
export default MovieCard;
