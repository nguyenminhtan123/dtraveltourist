import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../../themes/Colors";
import Icon from "react-native-vector-icons/EvilIcons";
import bottomTab from "../../navigation/BottomTab";
import { NavigationUtils } from "../../navigation";
import AsyncStorage from "@react-native-community/async-storage";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../assets/img/intro2.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../assets/img/intro3.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../assets/img/intro1.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={item.image}
          style={styles.image}
        ></ImageBackground>
      </View>
    );
  };
  _onDone = async () => {
    AsyncStorage.setItem("intro", "intro");
    NavigationUtils.startLoginContent();
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" color="rgba(255, 255, 255, .9)" size={34} />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="check" color="rgba(255, 255, 255, .9)" size={34} />
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 5 }}>
          <AppIntroSlider
            renderItem={this._renderItem}
            data={slides}
            onDone={this._onDone}
            dotStyle={{
              backgroundColor: colors.divider,
            }}
            activeDotStyle={{ backgroundColor: "green" }}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
          />
        </View>
        {/* <View
            style={{
              flex: 2,
              backgroundColor: colors.primary,
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View style={styles.button}>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.button}>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  button: {
    width: 200,
    height: 50,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    marginVertical: 5,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.divider,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: colors.divider,
    fontSize: 30,
    fontWeight: "bold",
  },
});
// {
//   /* <View style={styles.slide}>
//         <View style={{ flex: 3 }}>
//           <View
//             style={{
//               borderRadius: 100,
//               backgroundColor: "pink",
//               width: 200,
//               height: 200,
//               marginTop: 80,
//               overflow: "hidden",
//               alignItems: "center",
//               justifyContent: "center",
//               borderWidth: 4,
//               borderColor: "white",
//             }}
//           >
//             <Image
//               source={require("../../assets/img/logo.jpg")}
//               style={{ marginTop: 12, width: 300, height: 300 }}
//             />
//           </View>
//         </View>
//         <View style={{ flex: 2 }}>
//           <Text
//             style={{
//               color: colors.divider,
//               fontSize: 15,
//               width: 350,
//               marginTop: 15,
//             }}
//           >
//             I hope you enjoy learning React Native. Reach out to me
//           </Text>
//           <Text
//             style={{
//               color: colors.divider,
//               fontSize: 15,
//               width: 350,
//               marginTop: 15,
//             }}
//           >
//             I hope you enjoy learning React Native. Reach out to me
//           </Text>
//         </View>
//       </View> */
// }
