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
  SafeAreaView,
  Platform,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Icons from "react-native-vector-icons/FontAwesome";
import { Fonts, Colors } from "../../themes";
import { ShadowInput } from "../../components";
import RegisterActions from "../../redux/AuthRedux/actions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class Register extends Component {
  register = () => {
    const data = {
      full_name: "Din0",
      email: "tantann@gmail.com",
      password: "123456789",
      confirm_password: "123456789",
      phone_number: "0976756578",
      accountable_type: 1,
    };
    this.props.register(data);
  };
  focusNextField(nextField) {
    this[nextField].focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/intro3.jpg")}
          style={styles.image}
        >
          <KeyboardAwareScrollView
            enableResetScrollToCoords={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ alignSelf: "center", paddingVertical: 5 }}>
              <Image
                source={require("../../assets/img/logo.jpg")}
                style={{
                  width: 105,
                  height: 105,
                  borderRadius: 35,
                  marginTop: Platform.OS === "ios" ? 0 : 60,
                }}
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                width: "90%",
                flex: 1,
                backgroundColor: Colors.white,
                borderRadius: 15,
                justifyContent: "space-evenly",
                paddingHorizontal: 15,
                marginVertical: 25,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  justifyContent: "space-around",
                  height: 400,
                }}
              >
                <ShadowInput
                  ref={(ref) => {
                    this.fullName = ref;
                  }}
                  isRequired
                  validateType="username"
                  errorMessage={"Full name is invalid"}
                  placeholder={"Full name"}
                  onSubmitEditing={() => {
                    this.focusNextField("email");
                  }}
                  icon="user"
                />

                <ShadowInput
                  ref={(ref) => {
                    this.email = ref;
                  }}
                  isRequired
                  validateType="email"
                  errorMessage={"Email is invalid"}
                  placeholder={"Email"}
                  onSubmitEditing={() => {
                    this.focusNextField("password");
                  }}
                  icon="envelope"
                />
                <ShadowInput
                  ref={(ref) => {
                    this.password = ref;
                  }}
                  isRequired
                  validateType="password"
                  errorMessage={"Password is invalid"}
                  placeholder={"Password"}
                  onSubmitEditing={() => {
                    this.focusNextField("confirmPassword");
                  }}
                  icon="lock"
                />
                <ShadowInput
                  ref={(ref) => {
                    this.confirmPassword = ref;
                  }}
                  isRequired
                  validateType="password"
                  errorMessage={"Confirm Password is invalid"}
                  placeholder={"Confirm Password"}
                  onSubmitEditing={() => {
                    this.focusNextField("phone");
                  }}
                  icon="lock"
                />

                <ShadowInput
                  ref={(ref) => {
                    this.phone = ref;
                  }}
                  isRequired
                  validateType="phone"
                  errorMessage={"Phone is invalid"}
                  placeholder={"Phone"}
                  icon="phone"
                />

                <TouchableWithoutFeedback onPress={this.register}>
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
                        color: Colors.white,
                        fontWeight: Fonts.fontWeight.medium,
                        fontSize: Fonts.fontSize.xMedium,
                      }}
                    >
                      Register
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(RegisterActions.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: Colors.divider,
  },
  image: {
    flex: 1,
  },
  text: {
    color: Colors.divider,
    fontSize: 30,
    fontWeight: "bold",
  },
  registerFormContainer: {
    alignSelf: "center",
    width: "90%",
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    marginVertical: 25,
    paddingVertical: 10,
  },
  shadowInput: {
    flexDirection: "row",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.2,
    height: 45,
    elevation: 2,
  },
});
