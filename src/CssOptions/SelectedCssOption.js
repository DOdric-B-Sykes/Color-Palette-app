import React from "react";
import Heart from "./Heart.js";

const SelectedCssOption = (props) => {
  let selectedClassName = "selected-color";
  if (props.palette.includes(props.selectedColor)) {
    selectedClassName += " already-in-palette";
  }

  return (
    <div
      className={selectedClassName}
      style={{ backgroundColor: props.selectedColor }}
      onClick={() => props.addToPalette(props.selectedColor)}
    >
      <Heart />
    </div>
  );
};

// This considered a "Presentational component" - It is mainly focused on how the UI elements are displayed based on the props it receives, such as the selected color, palette, and functions to handle interactions. It does not manage any state or contain business logic, making it suitable for presenting UI elements in a clear and reusable way.

export default SelectedCssOption;
