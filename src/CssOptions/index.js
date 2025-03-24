import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";

/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionsList
        selectColor={props.selectColor}
        // This props is located and used in the "CssOptionsList" component, in the "CssOptionsList.js" module
        // Render the CSSOptionsList component, passing along the selectColor prop that was passed to CssOptions from the App component
      />

      <SelectedCssOption
        palette={props.palette}
        // Comes from the conditional statement located in "SelectedCssOptions.js" - Used "palette" due to props being passed to it via the SelectedCssOption variable
        selectedColor={props.selectedColor}
        // "SelectedColor" prop doesn't need to have a "-" in it like its originally written in the "SelectedCssOption.js" module (selected-color) - Used "selectedColor" due to props being passed to it via the SelectedCssOption variable
        addToPalette={props.addToPalette}
        // See the "SelectedCssOption.js" module to see why I would use these specific props -> these props are present in the "SelectedCssOption" component
      />
    </div>
  </div>
);

export default CssOptions;
