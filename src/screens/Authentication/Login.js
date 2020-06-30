import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginActions from "../../redux/AuthRedux/actions";
import colors from "../../themes/Colors";
import { Fonts } from "../../themes";
import Icons from "react-native-vector-icons/FontAwesome";
import ShadowInput from "../../components/TextInput/ShadowInput";
import { NavigationUtils } from "../../navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export class Login extends Component {
  emailRef = null;
  passwordRef = null;

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      SlideInBottom: new Animated.Value(0),
    };
    Animated.timing(this.state.SlideInBottom, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  getEmail = (text) => {
    this.setState({ email: text });
  };

  login = () => {
    const data = {
      email: "tantann@gmail.com",
      password: "123456789",
    };
    this.props.login(data);
  };
  pushRegister = () => {
    NavigationUtils.push({
      screen: "Register",
      title: "Register",
      isBack: true,
      isTopBarEnable: true,
      noBorder: true,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/intro3.jpg")}
          style={styles.image}
        >
          <KeyboardAwareScrollView
            enableResetScrollToCoords={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ alignSelf: "center" }}>
              <Image
                source={require("../../assets/img/logo.jpg")}
                style={styles.logo}
              />
            </View>
            <View style={{ alignItems: "center", marginVertical: 35 }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: Fonts.fontWeight.semibold,
                  fontSize: Fonts.fontSize.title,
                }}
              >
                Discover new place
              </Text>

              <Text
                style={{
                  color: "white",
                  fontWeight: Fonts.fontWeight.semibold,
                  fontSize: Fonts.fontSize.title,
                }}
              >
                you will love
              </Text>
            </View>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: this.state.SlideInBottom.interpolate({
                      inputRange: [0, 1],
                      outputRange: [300, 0],
                    }),
                  },
                ],
              }}
            >
              <View style={styles.loginFormContainer}>
                <View style={{ justifyContent: "space-around", height: 150 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      shadowOffset: { width: 1, height: 1 },
                      shadowColor: "black",
                      backgroundColor: "white",
                      shadowOpacity: 0.2,
                      height: 45,
                      elevation: 2,
                    }}
                  >
                    <View style={{ justifyContent: "center" }}>
                      <Icons
                        name="envelope"
                        size={18}
                        color={colors.divider}
                        style={{ marginHorizontal: 10 }}
                      />
                    </View>
                    <View style={{ justifyContent: "center", flex: 1 }}>
                      <TextInput
                        ref={(ref) => (this.emailRef = ref)}
                        placeholder="Email"
                        onChangeText={this.getEmail}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      shadowOffset: { width: 1, height: 1 },
                      shadowColor: "black",
                      backgroundColor: "white",
                      shadowOpacity: 0.2,
                      height: 45,
                      elevation: 2,
                    }}
                  >
                    <View style={{ justifyContent: "center" }}>
                      <Icons
                        name="lock"
                        size={18}
                        color={colors.divider}
                        style={{ marginHorizontal: 10 }}
                      />
                    </View>
                    <View style={{ justifyContent: "center", flex: 1 }}>
                      <TextInput
                        ref={(ref) => (this.passwordRef = ref)}
                        placeholder="Password"
                        onChangeText={this.getPassword}
                      />
                    </View>
                  </View>
                </View>

                <TouchableWithoutFeedback onPress={this.login}>
                  <View
                    style={{
                      width: "100%",
                      height: 48,
                      backgroundColor: "#51cb96",
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.white,
                        fontWeight: Fonts.fontWeight.medium,
                        fontSize: Fonts.fontSize.xMedium,
                      }}
                    >
                      Login
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.pushRegister}>
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: colors.white,
                      borderRadius: 5,
                      alignItems: "center",
                      borderColor: "#51cb96",
                      borderWidth: 1,
                      justifyContent: "center",
                      height: 48,
                    }}
                  >
                    <Text
                      style={{
                        color: "#51cb96",
                        fontWeight: Fonts.fontWeight.regular,
                        fontSize: Fonts.fontSize.xMedium,
                      }}
                    >
                      Register
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </Animated.View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(LoginActions.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.divider,
  },
  image: {
    flex: 1,
  },
  text: {
    color: colors.divider,
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 105,
    height: 105,
    borderRadius: 35,
    marginTop: 50,
  },
  loginFormContainer: {
    alignSelf: "center",
    width: "90%",
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
  },
});
