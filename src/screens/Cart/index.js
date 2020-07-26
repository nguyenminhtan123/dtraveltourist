import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
} from "react-native";
import { Container } from "../../components";
import metrics from "../../themes/Metrics";
import Icons from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, Fonts } from "../../themes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Polyline,
} from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";

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
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    // requestLocationPermission();
    console.log("voooo22112");

    locationCurrentPosition();
  }, []);
  const requestLocationPermission = async () => {
    if (Platform.OS === "ios") {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (response === "granted") {
        locationCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (response === "granted") {
        getPermissions();
      }
    }
  };
  const locationCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        // setState({ initialRegion: region });
        setCurrentLocation(region);
      },
      (error) => Alert.alert(error.message),
      {
        enableHighAccuracy: false,
        timeout: 10000,
      }
    );
  };

  const getPermissions = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    }).then((data) => {
      if (data === "already-enabled") {
        locationCurrentPosition();
      } else {
        setTimeout(() => {
          locationCurrentPosition();
        }, 1000);
      }
    });
  };
  console.log(currentLocation);

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
    <Container style={{ alignItems: "center", flex: 1, marginTop: 55 }}>
      <View style={{ height: metrics.screenWidth }}>
        {/* <DateTimePickerModal isVisible={true} mode="date" /> */}
        <View>
          <Text>Điểm đón</Text>
          {/* <MapView
            initialRegion={currentLocation}
            style={{ width: 200, height: 200 }}
          >
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
            ></Marker>
          </MapView> */}
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SITE}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableWithoutFeedback>
        <View
          style={{
            width: metrics.screenWidth - 24,
            height: 48,
            backgroundColor: "#51cb96",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontWeight: Fonts.fontWeight.medium,
              fontSize: Fonts.fontSize.xMedium,
            }}
          >
            Book Tour
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "green",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
