import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import moment from "moment";
import { Colors } from "../../themes";
import ProcessTime from "../../components/ProcessTime";

const PROCESS = [
  {
    id: 0,
    tag: "WAITING_FOR_QUOTE",
    timeTag: "createdAt",
    contentTransId: "waitingForQuoteStatus",
    icon: "ios-cart-outline",
  },
  {
    id: 1,
    tag: "RECEIVED_QUOTE",
    timeTag: "receivedTime",
    contentTransId: "receivedQuoteStatus",
    icon: "ios-timer",
  },
  {
    id: 2,
    tag: "PROCESSING",
    timeTag: "processingTime",
    contentTransId: "processingStatus",
    icon: "ios-walk",
  },
  {
    id: 3,
    tag: "READY_FOR_DELIVERY",
    timeTag: "readyForDeliveryTime",
    contentTransId: "readyForDeliveryStatus",
    icon: "ios-flag",
  },
];

class ProcessTour extends React.PureComponent {
  filterItem = (filterTag) => {
    const { data } = this.props;
    const processData = PROCESS;
    const filtered = processData.filter((item) => item.tag === filterTag);
    return filtered[0];
  };

  renderRow = ({ item, index }) => {
    const { data } = this.props;

    const markedData = this.filterItem("WAITING_FOR_QUOTE");
    const processData = PROCESS;
    if (markedData) {
      return (
        <ProcessTime
          icon={
            index <= markedData.id ? "ios-checkmark-circle-outline" : item.icon
          }
          iconColor={
            index <= markedData.id ? Colors.primary : Colors.neutralGrey
          }
          title={item.contentTransId}
          titleColor={
            index <= markedData.id ? Colors.neutralBlack : Colors.neutralGrey
          }
          data={processData}
          lineColor={
            index <= markedData.id ? Colors.primary : Colors.neutralGrey
          }
          indexItem={index}
          time={"waitingTime"}
          timeColor={
            index <= markedData.id ? Colors.primary : Colors.neutralGrey
          }
        />
      );
    }
  };

  render() {
    const { data } = this.props;
    const processData = PROCESS;
    return (
      <SafeAreaView style={styles.flexContainer}>
        <Text>asdasd</Text>
        <FlatList
          data={processData}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.container}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 44,
  },
  flexContainer: {
    flex: 1,
  },
});

export default ProcessTour;
