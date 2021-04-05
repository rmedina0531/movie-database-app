import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import { Card, Button, Icon, ListItem } from "react-native-elements";

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

  return (
    // <Card containerStyle={{ padding: 0 }}>
    //   {props.route.params.users.map((u, i) => (
    //     <FlatList key={i}>
    //       <Text>Element {i}</Text>
    //     </FlatList>
    //   ))}
    // </Card>
    <Card containerStyle={{ padding: 0 }}>
      {resultArray.map((entry, i) => (
        <ListItem key={i}>
          <Text>{entry.Title}</Text>
          <Image style={styles.logo} source={{ uri: entry.Poster }} />
        </ListItem>
      ))}
    </Card>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
