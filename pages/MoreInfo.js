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

const MoreInfo = (props) => {
  let movie_info = props.route.params.data;

  return (
    <View>
      <Text>{movie_info.Title}</Text>
      <Text>{movie_info.Actors}</Text>
      <Text>{movie_info.Awards}</Text>
    </View>
  );
};

export default MoreInfo;
