const Colors = function() {
  return {
    ltBlue: "#0093bb",
    dkBlue: "#002f71",
    ltPurple: "#b5007c",
    dkPurple: "#6d236f",
    ltGreen: "#5d8e1c",
    dkGreen: "#087323",
    ltOrange: "#e75113",
    dkOrange: "#da001a",
    aaBlue: "#006f84",
    aaMagenta: "#ef2d87",
    aaOrange: "#ec7404",
    dkGray: "#322B2B",
    accent: "#b4b4b4",
    main: "#323232",
    light: "#eeeeee",
    white: "#ffffff",
    colorObj: function() {
      return {
        blueTheme: {
          primary: this.dkBlue,
          secondary: this.ltBlue,
        },
        orangeTheme: {
          primary: this.dkOrange,
          secondary: this.ltOrange,
        },
        greenTheme: {
          primary: this.dkGreen,
          secondary: this.ltGreen,
        },
        purpleTheme: {
          primary: this.dkPurple,
          secondary: this.ltPurple,
        },
      };
    },
    colorArray: function() {
      return [
        {
          themeName: "blue",
          primary: this.dkBlue,
          secondary: this.ltBlue,
        },
        {
          themeName: "orange",
          primary: this.dkOrange,
          secondary: this.ltOrange,
        },
        {
          themeName: "green",
          primary: this.dkGreen,
          secondary: this.ltGreen,
        },
        {
          themeName: "purple",
          primary: this.dkPurple,
          secondary: this.ltPurple,
        },
      ];
    },
  };
};

const colors = new Colors();

export default colors;
