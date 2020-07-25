import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class ProcessTime extends React.PureComponent {
  render() {
    const {
      icon,
      iconColor,
      lineColor,
      title,
      titleColor,
      time,
      timeColor,
      data,
      indexItem,
    } = this.props;
    return (
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Icon name={icon} color={iconColor} size={32} />
          {indexItem < data.length - 1 && (
            <View
              style={[
                styles.line,
                {
                  backgroundColor: lineColor,
                },
              ]}
            />
          )}
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.textStep} type="bodyLight14" color={titleColor}>
            {title}
          </Text>
          <Text type="bodyLight12" color={timeColor}>
            {time}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  leftContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  line: {
    width: 1,
    flex: 1,
  },
  rightContainer: {
    paddingBottom: 40,
    marginTop: -3,
    marginRight: 15,
  },
  textStep: {
    marginBottom: 3,
  },
});
