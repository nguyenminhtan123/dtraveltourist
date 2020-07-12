import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "../themes";
import Loader from "./Loader";

const Container = ({ children, style, loading, center }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, center && styles.center, style]}>
        {children}
        {loading && <Loader loading={loading} />}
      </View>
    </SafeAreaView>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  style: PropTypes.any,
  center: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Container;
