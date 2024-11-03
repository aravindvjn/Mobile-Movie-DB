import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import Cards from "../components/Cards";
import MovieCard from "../components/MovieCard";

export const HomeScreen = () => {
  const genre = ["Action", "Comedy", "Romance", "Thriller", "Sci-Fi"];
  const [theactive, setActive] = useState("Action");
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={Colors.BACKGROUNDCOLOR}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Showing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View>
        <FlatList
          style={{ paddingLeft: 10 }}
          showsHorizontalScrollIndicator={false}
          data={genre}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, idex }) => {
            return (
              <Cards
                genre={item}
                active={theactive === item ? true : false}
                onPress={() => setActive(item)}
              />
            );
          }}
          horizontal
        />
      </View>
      <View>
        <FlatList
          style={{ paddingLeft: 16 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={genre}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => {
            return <MovieCard />;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUNDCOLOR,
  },
  headerContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "300",
  },
  headerSubTitle: {
    color: Colors.BLUE,
  },
});
