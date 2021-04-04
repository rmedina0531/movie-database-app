import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const SearchEntry = (props) => {
  return (
    <View style={styles.searchEntry}>
      <Text style={{ paddingRight: 5 }}>{props.type}:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => props.onChange(text)}
        value={workMinutes.toString()}
      />
    </View>
  );
};

const MovieSearch = () => {
  let [title, setTitle] = useState("");
  let [year, setYear] = useState("");

  const titleHandler = (text) => {
    setTitle = text;
  };
  const yearHandler = (text) => {
    setYear = text;
  };

  async function searchButtonHandler() {
    let title = "s=Toy+Story";
    let plot = "plot=full";
    let url = "http://www.omdbapi.com/?";
    let apiKey = "apikey=2abc6af7";
    const res = await fetch(url + apiKey + "&" + title);

    const data = await res.json();
    console.log(data);
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <SearchEntry type="Title" onChange={titleHandler} value={title} />
      <SearchEntry type="Year" onChange={yearHandler} value={year} />
      <Button title="Search" onPress={searchButtonHandler} />
    </View>
  );
};

export default MovieSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    fontSize: 15,
    width: 50,
  },
  searchEntry: {
    display: "flex",
    flexDirection: "row",
  },
});
