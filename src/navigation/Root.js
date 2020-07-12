import { Navigation } from "react-native-navigation";
import { Colors } from "../themes";
import { iconsMap } from "../utils/appIcons";

const intro = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Intro",
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

const login = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Login",
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

const mainTab = (screenName, title = "New Orders") => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ["portrait"],
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Home",
                    passProps: {
                      text: "This is tab 1",
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: "Home",
                  icon: iconsMap["home"],
                  testID: "FIRST_TAB_BAR_BUTTON",
                  selectedIconColor: Colors.primary,
                  iconColor: "gray",
                },
              },
            },
          },
          {
            component: {
              name: "History",
              passProps: {
                text: "This is tab 2",
              },
              options: {
                bottomTab: {
                  text: "History",
                  icon: iconsMap["history"],
                  testID: "SECOND_TAB_BAR_BUTTON",
                  selectedIconColor: Colors.primary,
                  iconColor: "gray",
                },
              },
            },
          },
          {
            component: {
              name: "Notification",
              passProps: {
                text: "This is tab 2",
              },
              options: {
                bottomTab: {
                  text: "Notification",
                  icon: iconsMap["bell"],
                  testID: "SECOND_TAB_BAR_BUTTON",
                  selectedIconColor: Colors.primary,
                  iconColor: "gray",
                },
              },
            },
          },
          {
            component: {
              name: "Profile",
              passProps: {
                text: "This is tab 2",
              },
              options: {
                bottomTab: {
                  text: "User",
                  icon: iconsMap["user"],
                  testID: "SECOND_TAB_BAR_BUTTON",
                  selectedIconColor: Colors.primary,
                  iconColor: "gray",
                },
              },
            },
          },
        ],
      },
    },
  });
};

export function showConfirmAlert(options = {}) {
  Navigation.showOverlay({
    component: {
      name: "ConfirmAlert",
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
        layout: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        statusBar: {
          style: "light",
        },
      },
      passProps: options,
    },
  });
}

export default {
  intro,
  login,
  mainTab,
};

const bottomTab = {
  backgroundColor: Colors.primary,
  textColor: Colors.tabInActiveColor,
  iconColor: Colors.tabInActiveColor,
  selectedIconColor: Colors.tabActiveColor,
  selectedTextColor: Colors.tabActiveColor,
  iconInsets: {
    top: 5,
    left: 0,
    bottom: -5,
    right: 0,
  },
  fontSize: 10,
  drawBehind: false,
  disableIconTint: true, // set true if you want to disable the icon tinting
  disableSelectedIconTint: true,
};

const defaultTopBar = {
  visible: false,
  drawerBehind: false,
  noBorder: true,
  background: {
    color: Colors.primary,
  },
};
