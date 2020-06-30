import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import colors from "../../themes/Colors";

const { height, width } = Dimensions.get("window");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aesd5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-4s8d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1s-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default class UserProfile extends Component {
  static options = () => ({
    topBar: {
      elevation: 0,
      noBorder: true,
    },
  });

  renderItem = ({ item }) => (
    <View style={{ marginHorizontal: 5 }}>
      <Image
        source={require("../../assets/img/tourguide.jpg")}
        style={{ width: 100, height: 100 }}
      />
      {/* <Text>{item.title}</Text> */}
    </View>
  );
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../../assets/img/logo.jpg")}
            style={{
              borderRadius: 250,
              width: 130,
              height: 130,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
              marginTop: 5,
            }}
          >
            <Text>Tan Nguyen</Text>
            <View
              style={{
                width: StyleSheet.hairlineWidth,
                backgroundColor: "black",
                height: 25,
                marginHorizontal: 10,
              }}
            />
            <Text>20</Text>
          </View>
        </View>
        <View style={{}}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "red" }}>
              How much much do you want to pay for an hour ?
            </Text>
            <TextInput
              style={{
                borderBottomColor: colors.divider,
                borderBottomWidth: 2,
                height: 35,
                // width: 350,
              }}
              placeholder="5$"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "red" }}>
              The trip minium duration for each tour is ?
            </Text>
            <TextInput
              style={{
                borderBottomColor: colors.divider,
                borderBottomWidth: 2,
                height: 35,
                // width: 350,
              }}
              placeholder="2 hour"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "red" }}>Activities</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: 10,
            }}
          >
            <TouchableWithoutFeedback>
              <View style={styles.activityButton}>
                <Text style={styles.activityTitle}>Food</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.activityButton}>
                <Text style={styles.activityTitle}>Shopping</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.activityButton}>
                <Text style={styles.activityTitle}>Local</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.activityButton}>
                <Text style={styles.activityTitle}>Entertainment</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Tour history</Text>
        </View>
        <View
          style={{
            width: width,
            height: 100,
            // alignSelf: "center",
            marginTop: 10,
            marginLeft: -20,
          }}
        >
          <FlatList
            horizontal
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  activityButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  activityTitle: { color: colors.white, fontSize: 15 },
});
