import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

let timeStamp = Date.parse(new Date());

const UpdateBackground = (setBgColor) => {
  setBgColor(UpdateTimestamp());
}

function UpdateTimestamp() {
  let timeStamp = new Date().getTime();
  let lastChar = String(timeStamp).charAt(String(timeStamp).length - 1);
  switch (parseInt(lastChar)) {
    case 0:
      return "white"
    case 1:
      return "black"
    case 2:
      return "blue"
    case 3:
      return "green"
    case 4:
      return "pink"
    case 5:
      return "red"
    case 6:
      return "purple"
    case 7:
      return "yellow"
    case 8:
      return "gray"
    case 9:
      return "#c8a2c8"
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "600",
    textAlign: "center",
    textShadowRadius: 5,
    textShadowColor: "pink",
    color: Colors.black,
    paddingBottom: 100
  },

});

const App: () => React$Node = () => {
  const [bgColor, setBgColor] = React.useState("white");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View contentInsetAdjustmentBehavior="automatic" style={[styles.body, { backgroundColor: bgColor, flex: 1 }]}>
        <Text style={styles.title}>GO 4ALL</Text>
        <Button title="Atualizar" onPress={() => UpdateBackground(setBgColor)} />
      </View>
    </>
  );
};

export default App;
