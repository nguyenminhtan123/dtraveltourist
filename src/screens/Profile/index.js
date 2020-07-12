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
          height: metrics.screenHeight / 3,
          backgroundColor: "pink",
          position: "absolute",
          opacity: 0.4,
          borderWidth: 3,
          borderColor: Colors.white,
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
          height: metrics.screenHeight / 3,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={require("../../assets/img/user.png")}
          style={{
            width: 140,
            height: 140,
            borderRadius: 200,
            borderWidth: 3,
            borderColor: "white",
            marginBottom: -12,
          }}
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
