import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Alert,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Polyline,
} from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import { request, PERMISSIONS } from "react-native-permissions";
import Carousel from "react-native-snap-carousel";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, Fonts } from "../themes";
// import { Modalize } from "react-native-modalize";

export class maps extends Component {
  modal = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [
        {
          name: "Tan",
          latitude: 16.07571,
          longitude: 108.234129,
          image: require("../assets/img/site2.jpg"),
        },
        {
          name: "Nguyen",
          latitude: 16.073329,
          longitude: 108.231254,
          image: require("../assets/img/site2.jpg"),
        },
        {
          name: "Minh",
          latitude: 16.07186,
          longitude: 108.234671,
          image: require("../assets/img/site2.jpg"),
        },
      ],
      initialRegion: {
        latitude: 16.075669,
        longitude: 108.234441,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      markers: [],
    };
  }
  componentDidMount() {
    this.requestLocationPermission();
    this.openModal();
  }
  requestLocationPermission = async () => {
    if (Platform.OS === "ios") {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (response === "granted") {
        this.locationCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (response === "granted") {
        this.getPermissions();
      }
    }
  };
  locationCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        this.setState({ initialRegion: region });
      },
      (error) => Alert.alert(error.message),
      {
        enableHighAccuracy: false,
        timeout: 10000,
      }
    );
  };

  getPermissions = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    }).then((data) => {
      if (data === "already-enabled") {
        this.locationCurrentPosition();
      } else {
        setTimeout(() => {
          this.locationCurrentPosition();
        }, 1000);
      }
    });
  };

  renderCarouselItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 20,
          paddingBottom: 12,
          borderRadius: 12,
          shadowOffset: { width: 3, height: 4 },
          shadowColor: "black",
          backgroundColor: "white",
          shadowOpacity: 0.3,
          elevation: 10,
        }}
      >
        <View>
          <View
            style={{
              overflow: "hidden",
              borderRadius: 12,
              flex: 3,
              // paddingHorizontal: 4,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: Dimensions.get("screen").height / 4,
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
                fontWeight: "300",
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
              <Icon name="ios-heart" size={15} color={Colors.white} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  onCarouselChangeItem = (index) => {
    let location = this.state.coordinates[index];
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
    this.state.markers[index].showCallout();
  };

  onMakerPress = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
    this._carousel?.snapToItem(index);
  };
  openModal = () => {
    this.modal.current?.open();
  };

  render() {
    const currentLocation = this.state.initialRegion;
    console.log("location", currentLocation.latitude);

    const origin = { latitude: 16.073329, longitude: 108.231254 };
    const destination = { latitude: 16.07186, longitude: 108.234671 };
    const GOOGLE_MAPS_APIKEY = "AIzaSyAY8xHhjVV0td4HcpbeqdpPFDZvrV7ggyU";
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          ref={(map) => (this._map = map)}
          initialRegion={currentLocation}
          loadingEnabled={true}
          cacheEnabled={Platform.OS === "ios"}
          mapType="standard"
          minZoomLevel={1}
          maxZoomLevel={20}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation
          showsCompass={false}
        >
          {this.state.coordinates.map((marker, index) => {
            return (
              <Marker
                key={marker.name}
                ref={(ref) => (this.state.markers[index] = ref)}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                onPress={() => this.onMakerPress(marker, index)}
              >
                <Callout>
                  <Text>{marker.name}</Text>
                </Callout>
              </Marker>
            );
          })}
          {/* <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            waypoints={[{ latitude: 16.07571, longitude: 108.234129 }]}
          /> */}
        </MapView>
        {/* <Modalize ref={this.modal} snapPoint={400} alwaysOpen={400}>
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            contentContainerStyle={{
              backgroundColor: "pink",
            }}
            containerCustomStyle={{ bottom: 12 }}
            data={this.state.coordinates}
            renderItem={this.renderCarouselItem}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={300}
            onSnapToItem={(index) => this.onCarouselChangeItem(index)}
            layout={"stack"}
            layoutCardOffset={`18`}
          />
        </Modalize> */}

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          contentContainerStyle={{
            backgroundColor: "pink",
          }}
          containerCustomStyle={{ position: "absolute", bottom: 12 }}
          data={this.state.coordinates}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={300}
          onSnapToItem={(index) => this.onCarouselChangeItem(index)}
          layout={"stack"}
          layoutCardOffset={18}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(maps);
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
