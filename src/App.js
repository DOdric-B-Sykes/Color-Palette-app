import React, { Component } from "react";
import CssOptions from "./CssOptions";
import Palette from "./Palette";

class App extends Component {
  state = { selectedColor: "blue", palette: [] };
  selectColor = (color) => this.setState({ selectedColor: color });
  addToPalette = (color) => {
    if (!this.state.palette.includes(color)) {
      const newPalette = this.state.palette.concat(color);
      this.setState({ palette: newPalette });
    }
  };
  removeFromPalette = (color) => {
    const newPalette = this.state.palette.filter(
      (paletteColor) => paletteColor !== color
    );
    this.setState({ palette: newPalette });
  };
  render() {
    return (
      <div className="App">
        <Palette
          palette={this.state.palette}
          removeFromPalette={this.removeFromPalette}
        />
        <CssOptions
          palette={this.state.palette}
          addToPalette={this.addToPalette}
          selectColor={this.selectColor}
          selectedColor={this.state.selectedColor}
        />
      </div>
    );
  }
}

// This is considered a "Container component" - It manages the state of the selected color and palette, passes down necessary data and functions as props to child components (`Palette` and `CssOptions`), and handles the logic for adding and removing colors from the palette. This is a good example of a container component in a React application.

export default App;
