import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
// import Search from "../Search";

const users = [
  {
    name: "brynn",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
  },
  {
    name: "Bender",
    avatar:
      "https://comicvine1.cbsistatic.com/uploads/scale_medium/11/114183/6665970-%24%20%281%29.png",
  },
];

const SearchEntry = (props) => {
  return (
    <View style={styles.searchEntry}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#ffcad4",
          paddingRight: 5,
        }}
      >
        {props.type}:
      </Text>
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => {
          props.onChange(text);
          console.log(props.value);
        }}
        // value={workMinutes.toString()}
      />
    </View>
  );
};

const Search = (props) => {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <SearchEntry
        type="Title"
        onChange={props.titleHandler}
        value={props.title}
      />
      <Button
        style={styles.buttonStyle}
        title="Search"
        onPress={props.onSearch}
      />
    </View>
  );
};

const HomeScreen = (props) => {
  const { navigation } = props;
  let [title, setTitle] = useState("title");
  let [year, setYear] = useState("year");

  const titleHandler = (text) => {
    setTitle(text);
  };
  const yearHandler = (text) => {
    setYear(text);
  };

  async function searchButtonHandler() {
    let titleSearch = "s=" + title;
    let plot = "plot=full";
    let url = "http://www.omdbapi.com/?";
    let apiKey = "apikey=2abc6af7";
    const res = await fetch(url + apiKey + "&" + titleSearch);

    const search_results = await res.json();
    // console.log(typeof data);
    // console.log(data);
    navigation.navigate("Results", { data: search_results });
    // console.log(title, year);
  }
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.h1}>Movie Database Search App</Text>
      <Search
        onSearch={searchButtonHandler}
        title={title}
        year={year}
        titleHandler={titleHandler}
        yearHandler={yearHandler}
      />
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: "#12130f",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  h1: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ffcad4",
    textAlign: "center",
    paddingBottom: 150,
  },
  searchEntry: {
    display: "flex",
    flexDirection: "row",
  },
  textBox: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    fontSize: 30,
    width: 250,
    height: 50,
    marginBottom: 50,
  },
  buttonStyle: {
    backgroundColor: "#d6f49d",
  },
});
