import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import LoginActions from "../redux/AuthRedux/actions";
import { Colors, Fonts } from "../themes";
import { fontWeight } from "../themes/Fonts";
import Icons from "react-native-vector-icons/FontAwesome";
import { NavigationUtils } from "../navigation";
import { iconsMap } from "../utils/appIcons";

class Home extends Component {
  static options = () => ({
    topBar: {
      noBorder: true,
      visible: true,
      title: {
        text: "D-TRAVEL",
        alignment: "center",
        color: Colors.white,
        fontSize: Fonts.fontSize.xMedium,
        fontWeight: Fonts.fontWeight.bold,
      },
      background: {
        color: "#51cb96",
      },
      elevation: 0,
    },
  });
  pushListSites = () => {
    NavigationUtils.push({
      screen: "ListPlaces",
      isBack: true,
      isTopBarEnable: true,
      noBorder: true,
      leftButtonsColor: Colors.black,
      rightButtons: true,
      rightButtonsColor: Colors.black,
    });
  };
  pushPlaceDetail = () => {
    NavigationUtils.push({
      screen: "PlaceDetail",
      isBack: true,
      isTopBarEnable: true,
      noBorder: true,
      leftButtonsColor: Colors.white,
    });
  };
  pushTest = () => {
    this.props.logout();
  };
  pushCart = () => {
    NavigationUtils.push({
      screen: "Cart",
      isBack: true,
      isTopBarEnable: true,
      noBorder: true,
      leftButtonsColor: Colors.black,
    });
  };

  render() {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        category: "Cruise",
        color: "#a4f4ff",
        icon: "ios-boat",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        category: "Plane",
        color: "#fce3a2",
        icon: "ios-airplane",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        category: "Train",
        color: "#baff8a",
        icon: "ios-train",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e2972",
        category: "Beer",
        color: "#fbc7dc",
        icon: "ios-beer",
      },
    ];
    const SITE = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "Cruise",
        image: require("../assets/img/site3.jpg"),
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "Plane",
        image: require("../assets/img/site2.jpg"),
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "Train",
        image: require("../assets/img/site1.jpg"),
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e2972",
        name: "Beer",
        image: require("../assets/img/site3.jpg"),
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            flex: 1,
            paddingHorizontal: 20,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: Fonts.fontSize.title,
              color: Colors.white,
              fontWeight: Fonts.fontWeight.bold,
            }}
          >
            Place in Da Nang
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              height: 50,
              borderRadius: 25,
              marginVertical: 10,
            }}
          >
            <View style={{ justifyContent: "center", flex: 1 }}>
              <TextInput
                ref={(ref) => (this.emailRef = ref)}
                placeholder="Eg. Dragon Bridge, Linh Ung Pagoda"
                onChangeText={this.getEmail}
                style={{ paddingLeft: 20 }}
              />
            </View>
            <TouchableWithoutFeedback>
              <View style={{ justifyContent: "center" }}>
                <Icons
                  name="search"
                  size={25}
                  color={Colors.divider}
                  style={{ marginHorizontal: 25 }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={{ flex: 4, marginLeft: 15, marginTop: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text
                style={{
                  fontSize: Fonts.fontSize.xMedium,
                  fontWeight: Fonts.fontWeight.bold,
                }}
              >
                CHOOSE BY CATEGORIES
              </Text>
              <View style={{ marginTop: 15 }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={DATA}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        backgroundColor: item.color,
                        width: 100,
                        height: 95,
                        marginRight: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size={55}
                        color={Colors.white}
                        style={{ marginHorizontal: 25, marginVertical: 3 }}
                      />
                      <Text style={{ color: "#888888" }}>{item.category}</Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: Fonts.fontSize.xMedium,
                    fontWeight: Fonts.fontWeight.bold,
                  }}
                >
                  MOST POPULAR
                </Text>
                <TouchableWithoutFeedback onPress={this.pushListSites}>
                  <View style={{ marginRight: 10 }}>
                    <Text
                      style={{
                        fontSize: Fonts.fontSize.xMedium,
                        fontWeight: Fonts.fontWeight.bold,
                        color: Colors.primary,
                      }}
                    >
                      See more
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View
                style={{
                  height: 260,
                  marginBottom: 20,
                  paddingBottom: 15,
                }}
              >
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingVertical: 15,
                  }}
                  data={SITE}
                  renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={this.pushPlaceDetail}>
                      <View
                        style={{
                          alignItems: "center",
                          marginRight: 15,
                          flex: 1,
                          borderRadius: 9,
                          shadowOffset: { width: 3, height: 4 },
                          shadowColor: "black",
                          backgroundColor: "white",
                          shadowOpacity: 0.3,
                          elevation: 10,
                        }}
                      >
                        <View
                          style={{
                            overflow: "hidden",
                            borderRadius: 15,
                            flex: 3,
                            paddingHorizontal: 4,
                          }}
                        >
                          <Image
                            source={item.image}
                            style={{
                              width: 140,
                              height: 200,
                              resizeMode: "cover",
                              overflow: "hidden",
                              marginTop: -15,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            flex: 1,
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: Fonts.fontWeight.medium,
                              marginLeft: 5,
                              marginTop: 10,
                            }}
                          >
                            {item.name}
                          </Text>
                          <View
                            style={{
                              width: 25,
                              height: 25,
                              backgroundColor: "#f77776",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 20,
                              marginRight: 15,
                              marginTop: -10,
                            }}
                          >
                            <Icon
                              name="ios-heart"
                              size={15}
                              color={Colors.white}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        <TouchableWithoutFeedback onPress={this.pushCart}>
          <View
            style={{
              backgroundColor: Colors.primary,
              position: "absolute",
              width: 56,
              height: 56,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              bottom: 18,
              right: 18,
            }}
          >
            <Icons name={"shopping-cart"} color={Colors.white} size={24} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(LoginActions.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  shadowContainer: {
    height: 180,
    width: 150,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // backgroundColor: "pink",
    marginRight: 10,
    borderRadius: 10,
  },
});
