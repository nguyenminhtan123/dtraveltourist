import React from "react";
import { Navigation } from "react-native-navigation";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Intro from "../screens/Intro";
import Login from "../screens/Authentication/Login";
import Home from "../screens/Home";
import History from "../screens/History";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Test from "../screens/Test";
import Register from "../screens/Authentication/Register";
import ListPlaces from "../screens/Place/ListPlaces";
import PlaceDetail from "../screens/Place/PlaceDetail";
import maps from "../screens/maps";

// import Loading from "../screens/Utils/Loading";
// import InAppNotification from "../screens/Utils/InAppNotification";

const SCREENS_WITH_REDUX = {
  Intro,
  Login,
  Home,
  History,
  Notification,
  Profile,
  Test,
  Register,
  ListPlaces,
  PlaceDetail,
  maps,
};
// const SCREENS = {
//   Loading,
//   InAppNotification,
// };

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;
    return (
      <Provider {...props}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };

  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponentWithRedux(
      screenName,
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
      PersistProvider,
      store
    );
  });

  // Object.keys(SCREENS).map((screenName) => {
  //   Navigation.registerComponent(screenName, () => SCREENS[screenName]);
  // });
}

export default registerScreens;
