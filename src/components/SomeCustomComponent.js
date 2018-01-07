import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";

// see https://github.com/necolas/react-native-web

class SomeCustomComponent extends Component {
  render() {
    return (
      <View style={styles.customComponentStyles}>
        <Text>Yo, this is a custom component</Text>
      </View>
    );
  }
}

export default SomeCustomComponent;
