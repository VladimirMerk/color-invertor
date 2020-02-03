{
  const colorPicker = document.querySelector('#main-color');
  const mainBlock = document.querySelector('#main');

  setColor(colorPicker.value);

  colorPicker.addEventListener("change", onChangeColorPicker);
  mainBlock.addEventListener("mouseover", inverseBackgroundColor);
  mainBlock.addEventListener("mouseout", inverseBackgroundColor);

  function onChangeColorPicker(event) {
    setColor(event.target.value);
    inverseBackgroundColor();
  }

  function setColor(color) {
      mainBlock.style.backgroundColor = color;
  }

  function inverseBackgroundColor() {
      let rgb = parseRGBFromString(getComputedStyle(mainBlock).backgroundColor);
      rgb = rgb.map(color => 255 - +color);
      mainBlock.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  /**
  * return string array
  **/
  function parseRGBFromString(rgbString) {
      return rgbString.match(/\d+/g);
  }
}
