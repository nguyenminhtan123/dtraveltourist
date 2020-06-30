import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginActions from "../redux/AuthRedux/actions";
import { NavigationUtils } from "../navigation";
import CheckActions from "../redux/ChekingRedux/actions";

export class Notification extends Component {
  logout = () => {
    console.log(this.props);

    // this.props.logout();
  };
  login = () => {
    const data = {
      email: "auicr.dn@gmail.com",
      password: "123456789",
    };
  };
  showList = async () => {
    NavigationUtils.showModal({
      screen: "Test",
      isClose: true,
      passProps: { test: this.props.checkData },
    });
  };

  render() {
    console.log(this.props.checkData);

    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={this.showList}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                backgroundColor: "orange",
                width: 100,
                height: 30,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>show Modal</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  checkData: state.check.CheckListData,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(LoginActions.logout()),
  login: (data) => dispatch(LoginActions.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
