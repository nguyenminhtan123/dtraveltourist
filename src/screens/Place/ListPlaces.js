import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Colors, Fonts } from "../../themes";
import { iconsMap } from "../../utils/appIcons";
import { createMultiStyleIconSet } from "react-native-vector-icons";
import Icons from "react-native-vector-icons/FontAwesome";
import { NavigationUtils } from "../../navigation";

export class ListPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pushPlaceDetail = (item) => {
    NavigationUtils.push({
      screen: "PlaceDetail",
      isBack: true,
      isTopBarEnable: true,
      noBorder: true,
      leftButtonsColor: Colors.white,
      passProps: {
        siteId: item.id,
      },
    });
  };
  renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.pushPlaceDetail(item)}>
        <View
          style={{
            width: "100%",
            height: 190,
            borderRadius: 30,
            marginVertical: 10,
            elevation: 10,
            shadowColor: "black",
            shadowOffset: { width: 3, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <ImageBackground
            source={{ uri: item.image }}
            style={{ flex: 1 }}
            imageStyle={{ borderRadius: 30 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingHorizontal: 30,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: Colors.white,
                }}
              >
                {item.name}
              </Text>

              {/* <Text
                style={{
                  fontWeight: Fonts.fontWeight.bold,
                  fontSize: Fonts.fontSize.large,
                  color: Colors.white,
                }}
              >
                Best place
              </Text> */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 4,
                }}
              >
                <View style={styles.starContainer}>
                  <Icons name="star" size={13} color={Colors.white} />
                </View>
                <View style={styles.starContainer}>
                  <Icons name="star" size={13} color={Colors.white} />
                </View>
                <View style={styles.starContainer}>
                  <Icons name="star" size={13} color={Colors.white} />
                </View>
                <View style={styles.starContainer}>
                  <Icons name="star" size={13} color={Colors.white} />
                </View>
                <View style={styles.starContainer}>
                  <Icons name="star" size={13} color={Colors.white} />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            marginTop: 65,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{ fontSize: Fonts.fontSize.title, fontWeight: "bold" }}
            >
              Popular Places
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 15,
              paddingBottom: 100,
            }}
            data={this.props.categorySites}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaces);
const styles = StyleSheet.create({
  starContainer: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: Colors.warning,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    marginVertical: 3,
  },
});
