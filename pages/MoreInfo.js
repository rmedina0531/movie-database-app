import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import { RotationGestureHandler } from "react-native-gesture-handler";

const DataEntry = (props) => {
  return (
    <View style={styles.dataEntry}>
      <Text style={styles.dataEntryLabel}>{props.label}</Text>
      <Text style={styles.dataEntryData}>{props.data}</Text>
    </View>
  );
};

const MoreInfo = (props) => {
  const { route } = props;
  const { movie_data } = route.params;
  let {
    Title,
    Actors,
    Awards,
    Poster,
    Plot,
    Runtime,
    Genre,
    Rated,
    Ratings,
    Released,
    BoxOffice,
  } = movie_data;
  const image = { uri: Poster };
  console.log(Poster);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{Title}</Text>
          <Text>Relese Date: {Released}</Text>
          <Text>Box Office: {BoxOffice}</Text>
          {Ratings.map((item, index) => {
            return (
              <Text key={index}>
                {item.Source}: {item.Value}
              </Text>
            );
          })}
          <DataEntry label="Starring: " data={Actors} />
          <Text
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          >
            {Plot}
          </Text>
          <DataEntry label="Genre: " data={Genre} />
          <DataEntry label="Runtime: " data={Runtime} />
          <DataEntry label="Rated: " data={Rated} />
          <DataEntry label="Awards: " data={Awards} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // paddingTop: 50
  },
  titleContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    height: 400,
    margin: 20,
    borderRadius: 20,
    padding: 10,
  },
  infoContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    height: 550,
    margin: 20,
    borderRadius: 20,
    padding: 10,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 200,
    height: 350,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  description: {
    fontSize: 20,
  },
  dataEntry: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  dataEntryLabel: {
    fontSize: 25,
    fontWeight: "bold",
    width: 110,
  },
  dataEntryData: {
    fontSize: 20,
    alignItems: "center",
    width: 230,
  },
});

// Title
// Actors
// BoxOffice
// Director
// Genre
// Rated

// Ratings - array of objects
//     Source
//     Value

// Released
// Runtime
// Year

// Plot
// Poster
