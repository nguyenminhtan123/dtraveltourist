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
  ImageBackground,
} from "react-native";
import LoginActions from "../../redux/AuthRedux/actions";
import colors from "../../themes/Colors";
import { Container } from "../../components";
import metrics from "../../themes/Metrics";
import { Colors } from "../../themes";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";

const { height, width } = Dimensions.get("window");

const Profile = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    await dispatch(LoginActions.logout());
  };
  return (
    <Container>
      <Image
        source={require("../../assets/img/userBackground.jpg")}
        style={{
          width: metrics.screenWidth,
          height: metrics.screenHeight / 3 - 24,
          backgroundColor: "white",
          position: "absolute",
          opacity: 0.4,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            onLogout();
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: Colors.white,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginTop: 12,
              marginRight: 12,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <Icon
              name="ios-log-out"
              size={24}
              style={{ marginLeft: 4 }}
              color={Colors.primary}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          width: metrics.screenWidth,
          height: metrics.screenHeight / 3 - 24,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={require("../../assets/img/user.png")}
          style={{
            width: 120,
            height: 120,
            borderRadius: 200,
            borderWidth: 3,
            borderColor: "white",
          }}
        />
      </View>
      <View>
        <Text>Name</Text>
        <TextInput
          style={{ backgroundColor: "pink", width: 100, height: 50 }}
        />
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  activityButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  activityTitle: { color: colors.white, fontSize: 15 },
});
