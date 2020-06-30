import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import Root from "./Root";
import { Colors, Images } from "../themes";
import { iconsMap } from "../utils/appIcons";
import AsyncStorage from "@react-native-community/async-storage";

const SIDE_MENU_ID = "sideMenu";
const SCREEN_OVERLAY = {
  android: "overCurrentContext",
  ios: "overFullScreen",
};

class NavigationUtils {
  sideMenuVisible = false;

  currentScreenId = "";

  showingOverlay = false;

  constructor() {
    Navigation.events().registerComponentDidAppearListener(
      ({ componentId }) => {
        if (
          componentId === "inAppNotification" ||
          componentId === "overlay" ||
          componentId === SIDE_MENU_ID
        ) {
          return;
        }
        this.currentScreenId = componentId;
      }
    );

    Navigation.events().registerComponentDidDisappearListener(
      ({ componentId }) => {
        if (componentId === SIDE_MENU_ID) {
          this.sideMenuVisible = false;
        }
      }
    );

    Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId }) => {
        if (buttonId === "backBtt") {
          Navigation.pop(this.currentScreenId);
        }
        if (buttonId === "closeBtt") {
          this.dismissModal();
        }
        if (buttonId === SIDE_MENU_ID) {
          console.log("buttonId");
          this.toggleSizeMenu();
        }
      }
    );
  }

  openSideMenu() {
    this.sideMenuVisible = true;
    Navigation.mergeOptions(SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: true,
          enabled: true,
        },
      },
    });
  }

  closeSideMenu() {
    this.sideMenuVisible = false;
    Navigation.mergeOptions(SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: false,
          enabled: true,
        },
      },
    });
  }

  toggleSizeMenu() {
    this.sideMenuVisible = !this.sideMenuVisible;
    Navigation.mergeOptions(SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: this.sideMenuVisible,
          enabled: true,
        },
      },
    });
  }

  async startIntroContent() {
    const intro = await AsyncStorage.getItem("intro");
    if (intro) {
      Root.login();
    } else {
      Root.intro();
    }
  }

  startLoginContent() {
    Root.login();
  }

  startMainContent() {
    Root.mainTab();
  }

  push({
    screen,
    title,
    passProps,
    isBack,
    isTopBarEnable,
    leftButtons,
    rightButtons,
    noBorder,
    isBottomTabsEnable = true,
    isDrawBehind,
    leftButtonsColor,
    rightButtonsColor,
  }) {
    Navigation.push(this.currentScreenId, {
      component: {
        name: screen,
        passProps,
        options: {
          animations: {
            push: {
              content: {
                translationX: {
                  from: require("react-native").Dimensions.get("window").width,
                  to: 0,
                  duration: 250,
                },
              },
            },
          },
          bottomTabs: {
            visible: isBottomTabsEnable,
            drawBehind: !isBottomTabsEnable,
          },
          topBar: {
            visible: isTopBarEnable,
            noBorder: noBorder || true,
            title: {
              text: title,
              alignment: "center",
              color: Colors.black,
              fontSize: 20,
            },
            drawBehind: isDrawBehind || true,
            elevation: 0,
            background: {
              color: "transparent",
            },
            leftButtons: isBack
              ? [
                  {
                    id: "backBtt",
                    icon: iconsMap["chevron-left"],
                    color: leftButtonsColor,
                  },
                ]
              : leftButtons || [],
            rightButtons: rightButtons
              ? [
                  {
                    id: "search",
                    icon: iconsMap["search"],
                    color: rightButtonsColor,
                  },
                ]
              : leftButtons || [],
          },
        },
      },
    });
  }

  pop = () => {
    Navigation.pop(this.currentScreenId);
  };

  showModal = ({
    screen,
    title,
    isClose,
    isSave,
    rightButtons = [],
    passProps,
    topBarVisible = true,
  }) => {
    if (isSave) {
      rightButtons = [
        {
          id: "doneBtt",
          text: "Save",
          color: Colors.primary,
        },
      ];
    }
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: screen,
              passProps,
              options: {
                topBar: {
                  visible: topBarVisible,
                  noBorder: true,
                  buttonColor: "black",
                  title: {
                    text: title,
                  },
                  drawBehind: true,
                  elevation: 0,
                  noBorder: true,
                  leftButtons: isClose
                    ? [
                        {
                          id: "closeBtt",
                          icon: iconsMap["chevron-left"],
                          color: "black",
                        },
                      ]
                    : [],
                  rightButtons,
                },
                layout: {
                  backgroundColor: "transparent",
                },
                modalPresentationStyle: "overFullScreen",
              },
            },
          },
        ],
      },
    });
  };

  dismissModal() {
    Navigation.dismissModal(this.currentScreenId);
  }

  showLoading = () => {
    Navigation.showModal({
      component: {
        name: "Loading",
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
          layout: {
            componentBackgroundColor: "transparent",
            backgroundColor: "transparent",
          },
          screenBackgroundColor: "transparent",
          modalPresentationStyle: SCREEN_OVERLAY[Platform.OS],
          animations: {
            showModal: {
              enabled: false,
            },
            dismissModal: {
              enable: false,
              enabled: false,
            },
          },
        },
      },
    });
  };

  dismissLoading = () => {
    Navigation.dismissModal(this.currentScreenId, {
      animations: {
        showModal: {
          enabled: false,
        },
        dismissModal: {
          enable: false,
          enabled: false,
        },
      },
    });
  };

  resetTo = ({ screen, title, topBarVisible = true }) => {
    Navigation.setStackRoot(this.currentScreenId, {
      component: {
        name: screen,
        options: {
          animations: {
            setStackRoot: {
              enabled: false,
            },
          },
          topBar: {
            visible: topBarVisible,
            title: {
              text: title,
              color: Colors.default,
            },
            leftButtons: [
              {
                icon: iconsMap["md-menu"],
                id: SIDE_MENU_ID,
                color: Colors.default,
              },
            ],
            background: {
              color: Colors.primary,
            },
          },
          layout: {
            backgroundColor: Colors.default,
            orientation: ["portrait"], // An array of supported orientations
          },
        },
      },
    });
  };

  showInAppNotification = ({
    title,
    content,
    type,
    duration,
    isAutoDismiss,
  }) => {
    if (this.showingOverlay) {
      Navigation.dismissOverlay("inAppNotification");
    }
    this.showingOverlay = true;
    Navigation.showOverlay({
      component: {
        id: "inAppNotification",
        name: "InAppNotification",
        passProps: {
          title,
          content,
          type,
          duration,
          isAutoDismiss,
        },
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });
  };

  dismissInAppNotification = () => {
    this.showingOverlay = false;
    Navigation.dismissOverlay("inAppNotification");
  };

  showOverlay = ({ screen, interceptTouchOutside, passProps = {} }) => {
    Navigation.showOverlay({
      component: {
        id: "overlay",
        name: screen,
        passProps: passProps,
        style: {
          backgroundBlur: "none", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
          backgroundColor: Colors.blur1, // tint color for the background, you can specify alpha here (optional)
          tapBackgroundToDismiss: true, // dismisses LightBox on background taps (optional)
        },
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: interceptTouchOutside || false,
          },
        },
      },
    });
  };

  dismissOverlay = () => {
    Navigation.dismissOverlay("overlay");
  };
}

export default new NavigationUtils();
