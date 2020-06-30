import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { Colors } from "../themes";
import _ from "lodash";

const CheckCircle = (props) => {
  const onTouch = () => {
    const { item, onClick, list, type, sectionId, itemId } = props;
    if (type === "parent") {
      onClick && onClick(type, item);
    } else {
      onClick(sectionId, itemId);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onTouch}>
      <View style={{ flex: 1 }}>
        <Icons
          name={props.isCheck ? "check-circle" : "circle"}
          size={30}
          color={props.isCheck ? Colors.success : Colors.divider}
          style={{ marginHorizontal: 10 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CheckCircle;
