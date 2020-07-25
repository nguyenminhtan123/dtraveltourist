import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Colors, Fonts, Metrics } from "../../themes";
import SiteActions from "../../redux/SiteRedux/actions";
import { Container } from "../../components";
import TourActions from "../../redux/BookTourRedux/actions";
import _ from "lodash";

export class PlaceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SlideInLeft: new Animated.Value(0),
      SlideInLeftButton: new Animated.Value(0),
      SlideInRight: new Animated.Value(0),
    };
    Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.SlideInLeftButton, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.SlideInRight, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
    this.props.getSiteById(this.props.siteId);
  }

  componentDidMount() {
    const { tour, user } = this.props;
    if (_.has(this.props.tour, "id")) {
      let data = {
        tourist_id: user.accountable_id,
        tour_guide_id: null,
        promotion_code: null,
        tourist_site_id: null,
        pickup_location: "101B Ngo Quyen",
        start_time: "09:20:00",
        unit_price: 5,
        total_guests: 3,
        status: 0,
      };
      console.log(_.has(this.props.tour, "id"));
      this.props.createCart(data);
    }
  }

  static options = () => ({
    topBar: {
      noBorder: true,
      visible: true,
      background: {
        color: "transparent",
      },
      elevation: 0,
    },
  });

  render() {
    const { site, tour } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Container loading={this.props.loading}>
          <View style={{ width: "100%", height: 250, position: "absolute" }}>
            <Image
              source={{ uri: site.image_url }}
              style={{ width: "100%", height: "100%" }}
              resizeMode={"cover"}
            />
            <Image
              source={require("../../assets/img/bwBackround.jpg")}
              style={{ width: "100%", height: 500, opacity: 0.12 }}
              resizeMode={"cover"}
            />
          </View>
          <View style={{ flex: 3 }}></View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: this.state.SlideInLeft.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            }}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{site.name}</Text>
              <Text style={styles.subTitle}>{site.address}</Text>
              <View style={{ width: "40%", marginTop: 10 }}>
                <Text style={{ textAlign: "justify" }}>{site.description}</Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: this.state.SlideInLeftButton.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            }}
          >
            <View style={styles.buttonAddCartContainer}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: Fonts.fontSize.xMedium,
                }}
              >
                Add To Cart
              </Text>
              <View style={styles.whiteLine} />
            </View>
          </Animated.View>

          <View style={{ flex: 3, paddingLeft: 35 }}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: this.state.SlideInLeftButton.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-300, 0],
                    }),
                  },
                ],
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={styles.primaryLine} />
                <View>
                  <Text style={styles.overViewText}>An OverView</Text>
                  <ScrollView style={{ marginTop: 15 }}>
                    <Text
                      style={{
                        width: "85%",
                        color: Colors.black,
                        textAlign: "justify",
                      }}
                    >
                      We develop highly polished android & iOS apps for startups
                      and enterprise clients. Our specialist app developers
                      deliver quality large-scale applications on time and on
                      budget. Industry-leading, Agile-driven software
                      application development. Call today. Shorter project
                      timelines.
                    </Text>
                  </ScrollView>
                </View>
              </View>
            </Animated.View>
          </View>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: state.site.getSiteByIdLoading,
  site: state.site.siteById,
  tour: state.tour.data,
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({
  getSiteById: (id) => dispatch(SiteActions.getSiteById(id)),
  createCart: (data) => dispatch(TourActions.updateTour(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);
const styles = StyleSheet.create({
  titleContainer: {
    height: 230,
    width: 800,
    backgroundColor: Colors.white,
    borderRadius: 40,
    marginLeft: 35,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.2,
    elevation: 2,
    padding: 30,
  },
  title: {
    fontSize: Fonts.fontSize.title,
    fontWeight: Fonts.fontWeight.bold,
  },
  buttonAddCartContainer: {
    height: 80,
    width: 300,
    backgroundColor: Colors.primary,
    marginTop: -40,
    marginLeft: 220,
    borderRadius: 70,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 25,
    elevation: 3,
  },
  whiteLine: {
    width: 100,
    height: 1,
    backgroundColor: "white",
    marginLeft: 10,
  },
  primaryLine: {
    width: 20,
    height: 2,
    backgroundColor: Colors.primary,
    marginRight: 10,
    marginTop: 15,
  },
  overViewText: {
    fontSize: Fonts.fontSize.subtitle,
    fontWeight: Fonts.fontWeight.bold,
    color: Colors.primary,
  },
  subTitle: {
    color: Colors.primary,
    fontSize: Fonts.fontSize.medium,
    fontWeight: "bold",
    width: Metrics.screenWidth - 120,
  },
});
