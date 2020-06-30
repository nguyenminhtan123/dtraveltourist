import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  SectionList,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import CheckCircle from "./CheckCircle";
import onComplete from "../redux/store";
import CheckBox from "@react-native-community/checkbox";
import CheckActions from "../redux/ChekingRedux/actions";
const data = [
  {
    id: 122222,
    name: "Section1",
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "item2" },
    ],
  },
  {
    id: 22342342,
    name: "Section A",
    data: [
      { id: 3, name: "Item A" },
      { id: 4, name: "item B" },
      { id: 11, name: "Item AA" },
      { id: 21, name: "item BB" },
    ],
  },
  {
    id: 12342343,
    name: "SectionC",
    data: [
      { id: 5, name: "Item 1" },
      { id: 6, name: "item2" },
      { id: 71, name: "item5" },
    ],
  },
];

const { width } = Dimensions.get("window");

export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { checkList: props.test, isCheck: false, number: 0 };
  }

  addCheck = async (type, data) => {
    // console.log("data111", data);
    // console.log("type", global.token);
    const { checkList } = this.state;

    const sectionId = data.id;
    if (_.isEmpty(checkList[sectionId])) {
      checkList[sectionId] = {};
      _.map(data.data, (item) => {
        checkList[sectionId][item.id] = true;
      });
    } else {
      const dataSize = data.data.length;
      const list = checkList[data.id];
      const checkedList = _.filter(list, (item) => item);
      if (checkedList.length >= dataSize) {
        checkList[sectionId] = {};
      } else {
        _.map(data.data, (item) => {
          checkList[sectionId][item.id] = true;
        });
      }
    }
    this.props.UpdateCheck(checkList);
    this.setState({ checkList });
  };

  checkItem = (sectionId, itemId) => {
    // console.log("sectionId", sectionId, itemId);
    const { checkList } = this.state;
    const itemSelected = _.get(checkList, [sectionId, itemId], null);
    if (!itemSelected) {
      _.setWith(checkList, [sectionId, itemId], true, Object);
    } else {
      _.setWith(checkList, [sectionId, itemId], !itemSelected, Object);
    }
    this.props.UpdateCheck(checkList);
    this.setState({ checkList });
  };

  renderSection = ({ item, index }) => {
    // console.log("ietm", item);
    const list = this.state.checkList[item.id];

    return (
      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
        {_.map(item.data, (elm) => (
          <View
            style={{
              height: 50,
              width: width / 3,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ marginRight: 8, textAlign: "center", maxWidth: 100 }}
            >
              {elm.name}
            </Text>
            <CheckCircle
              isCheck={list && list[elm.id]}
              onClick={this.checkItem}
              itemId={elm.id}
              sectionId={item.id}
              type="child"
            />
          </View>
        ))}
      </View>
    );
  };

  renderHeader = ({ section }) => {
    // console.log("section", section);
    const { checkList } = this.state;
    const _section = section.data[0];
    const list = checkList[_section.id];
    const check = _.filter(list, (item) => item);
    // console.log("unCheckIndex", check);

    return (
      <View style={{ flexDirection: "row", backgroundColor: "#F55145" }}>
        <Text style={styles.sectionHeader}>{section.title}</Text>
        <CheckCircle
          isCheck={list && _section.data.length === check.length}
          onClick={this.addCheck}
          item={section.data[0]}
          type="parent"
        />
      </View>
    );
  };

  render() {
    const configData = _(data)
      .groupBy((item) => item.name)
      .map((value, key) => ({ title: key, data: value }))
      .value();
    return (
      <SectionList
        sections={configData}
        renderItem={this.renderSection}
        renderSectionHeader={this.renderHeader}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  checkData: state.check.CheckList,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateCheck: (data) => dispatch(CheckActions.check(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#F55145",
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: "100%",
  },
});
