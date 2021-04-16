import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import { Card, Button, Icon, ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// use touchable opacity to wrap

const Item = ({ data }) => {
  const navigation = useNavigation();

  async function onPress() {
    let imdbkey = "i=" + data.imdbID;
    let url = "http://www.omdbapi.com/?";
    let apiKey = "apikey=2abc6af7";
    const res = await fetch(url + apiKey + "&" + imdbkey);

    const movie_data = await res.json();
    console.log(movie_data);
    // console.log(typeof data);
    navigation.navigate("MoreInfo", { movie_data });
    // console.log(title, year);
  }
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{data.Title}</Text>
      <Image style={styles.logo} source={{ uri: data.Poster }} />
    </TouchableOpacity>
  );
};

const Results = (props) => {
  let resultPacket = props.route.params.data;
  let resultArray = resultPacket.Search;
  //   console.log(results);
  //   console.log(typeof results);
  //   console.log(results.Response);
  //   if (results.Response) {
  //     console.log(results.Search[0]);
  //   } else {
  //     console.log("something went wrong");
  //   }
  console.log(props.route.params.data);

  const renderItem = ({ item }) => <Item data={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={resultArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </SafeAreaView>
    // <Card containerStyle={{ padding: 0 }}>
    //   {resultArray.map((entry, i) => (
    //     <ListItem key={i}>
    //       <Text>{entry.Title}</Text>
    //       <Image style={styles.logo} source={{ uri: entry.Poster }} />
    //     </ListItem>
    //   ))}
    // </Card>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // paddingTop: 50
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
});
