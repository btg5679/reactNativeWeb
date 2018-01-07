import React, { Component } from "react";
import { Image, Text, View, Button, Picker } from "react-native";
import { styles } from "../utils/styles";
import SomeCustomComponent from "./SomeCustomComponent";

// see https://github.com/necolas/react-native-web

class App extends Component {
  _onButtonPress() {
    //do some things
  }

  render() {
    return (
      <View>
        <View style={styles.box}>
          <Text style={styles.text}>Yo, some things</Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={this._onButtonPress}
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.pickerView}>
          <Picker
            selectedValue={"java"}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <SomeCustomComponent />
        </View>
      </View>
    );
  }
}

export default App;
