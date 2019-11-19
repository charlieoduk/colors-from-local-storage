import colors from "./_colors";

const helpers = {
  colorStore: () => {
    let aaColorArray = colors.colorArray();
    if (typeof window !== 'undefined') {
      let colorsFromLocalStorage = JSON.parse(
        localStorage.getItem("aaColorArray")
      );
      if (colorsFromLocalStorage) {
        let firstColor = colorsFromLocalStorage.shift();
        let firstColorToLast = [...colorsFromLocalStorage, firstColor];
        localStorage.setItem("aaColorArray", JSON.stringify(firstColorToLast));
        return firstColor;
      } else {
        localStorage.setItem("aaColorArray", JSON.stringify(aaColorArray));
        return aaColorArray[0];
      }
    } 
    return aaColorArray[0];
  },
};

export default helpers;
