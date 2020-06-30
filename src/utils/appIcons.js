import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Colors } from "../themes";
import colors from "../themes/Colors";

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  "ios-cart": [22, Colors.black, "ionIcons"],
  "ios-trash": [25, Colors.white, "ionIcons"],
  "ios-pricetags": [10, Colors.darkGray, "ionIcons"],
  "ios-leaf": [10, Colors.darkGray, "ionIcons"],
  "ios-today": [10, Colors.white, "ionIcons"],
  "ios-create": [25, Colors.white, "ionIcons"],
  "chevron-left": [25, Colors.white, "fontAwesome"],
  "ios-home": [25, Colors.black, "ionIcons"],
  "ios-chevron-back-outline": [25, Colors.black, "ionIcons"],
  home: [25, Colors.black, "fontAwesome"],
  history: [25, Colors.black, "fontAwesome"],
  bell: [25, Colors.black, "fontAwesome"],
  user: [25, Colors.black, "fontAwesome"],
  search: [25, Colors.black, "fontAwesome"],
};

const iconsMap = {};

const iconsLoaded = new Promise((resolve) => {
  new Promise.all(
    Object.keys(icons).map((iconName) => {
      switch (icons[iconName][2]) {
        case "fontAwesome":
          return FontAwesome.getImageSource(
            iconName.replace(replaceSuffixPattern, ""),
            icons[iconName][0],
            icons[iconName][1]
          );
        case "ionIcons":
          return IonIcons.getImageSource(
            iconName.replace(replaceSuffixPattern, ""),
            icons[iconName][0],
            icons[iconName][1]
          );
        default:
          return Icon.getImageSource(
            iconName.replace(replaceSuffixPattern, ""),
            icons[iconName][0],
            icons[iconName][1]
          );
      }
    })
  )
    .then((sources) => {
      Object.keys(icons).forEach((iconName, idx) => {
        iconsMap[iconName] = sources[idx];
      });

      // Call resolve (and we are done)
      resolve(true);
    })
    .catch((err) => {
      console.log(err);
    });
});

export { iconsMap, iconsLoaded };
