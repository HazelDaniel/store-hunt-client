const themeActionTypes = {
  toggleTheme: "TOGGLE_THEME",
};

const lightTheme = {
  // HOME PAGE
  $homeFadingTextColor: "#333436",
  $homeGoldLikeColor: "#AB893B",
  $homeDarkColor: "#000000",
  $DirectoryCTATextColor: "#272727",
  $DirectoryBlurColor: "#d4d4d4a8",
  $DirectoryBlurColorDark: "#010000af",
  $homeOutlineColorTrans: "#d3d3d398",
  $homeOutlineColor: "#d3d3d3",
  $homeBodyColor: "#E5D6CB",
  $homePlaceholderColor: "#3c3c4344",
  $oddColor: "#D1C3B9",
  $homeSeparatorColor: "#D9CABF",
  $accentColor: "#BB9D88",
  $brightColor: "#FFFFFF",
  $lessBrightColor: "#F3F3EE",
  $darkAccentColor: "#08090A",
  $lightestShadowColor: "#00000018",
  $accentColorTrans: "#bb9d8838",
  $hotDealAccentColor: "#2A2414",
  $hotDealAccentColorTrans: "#2a24144a",

  // SHOP PAGE
  $shopSideTabListColor: "#626262",
  $shopSideTabTitleColor: "#000000a2",
  $redTextColor: "#FC2222",
  $shopSizeChipColor: "#967E6D",

  // SINGLE PRODUCTS PAGE

  $singleProductMainTextColor: "#C5C5C7",

  // CHECKOUT PAGE
  $checkoutConnectorColor: "#E3DBD2",

  // BLOG PAGE

  // CONTACT PAGE

  // SHOPPING CART PAGE

  // AUTH PAGE
  $authInactiveTextColor: "#B4B4B4",
  $authFormColor: "#4D4D4D",
};

const darkTheme = {};

export const initialThemeState = {
  theme: lightTheme,
  isLightTheme: true,
};

const toggledThemeObject = (state) => {
  switch (state.isLightTheme) {
    case true:
      return {
        theme: darkTheme,
        isLightTheme: false,
      };
    case false:
      return {
        theme: lightTheme,
        isLightTheme: true,
      };
  }
};

const toggleTheme = (state) => {
  const newTheme = {
    ...state,
    ...toggledThemeObject(state),
  };
  // sessionStorage.setItem("themes", JSON.stringify(newTheme));
  return newTheme;
};
export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case themeActionTypes.toggleTheme:
      return toggleTheme(state);
  }
};

export const __toggleTheme = () => {
  return {
    type: themeActionTypes.toggleTheme,
  };
};
