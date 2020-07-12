import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { Container } from "../../components";
import metrics from "../../themes/Metrics";
import Icons from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../themes";

const Cart = () => {
  const SITE = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Cruise",
      image: require("../../assets/img/site3.jpg"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Plane",
      image: require("../../assets/img/site2.jpg"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Train",
      image: require("../../assets/img/site1.jpg"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e2972",
      name: "Beer",
      image: require("../../assets/img/site3.jpg"),
    },
  ];
  const renderItem = (item) => {
    return (
      <View
        style={{
          width: metrics.screenWidth - 24,
          height: metrics.screenHeight / 5,
          marginBottom: 12,
          borderRadius: 12,
          flexDirection: "row",
          borderWidth: 1,
          borderColor: Colors.divider,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../assets/img/site1.jpg")}
          style={{
            width: (metrics.screenWidth * 2) / 5,
            height: metrics.screenHeight / 5,
            borderRadius: 12,
            alignSelf: "center",
          }}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: Colors.error,
                  width: 28,
                  height: 28,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                }}
              >
                <Icon name="md-close" size={24} color="white" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Container style={{ alignItems: "center" }}>
      <View style={{ height: metrics.screenWidth }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SITE}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Container>
  );
};

export default Cart;
