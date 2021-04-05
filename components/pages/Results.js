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

const Item = ({ data }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{data.title}</Text>
    <Image style={styles.logo} source={{ uri: data.Poster }} />
  </View>
);

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
    flexDirection: "row",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 350,
  },
});
