import React, { Component } from "react";

import "./index.css";

class Rating extends Component {
  state = {
    index: null
  };
  handleRating = () => {
    const elements = [1, 2, 3, 4, 5];

    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(
        <li
          onClick={() => this.setState({ index: index })}
          className={`selected_star${this.state.index === index ? ' selected' : ''}`}
          key={index}
        >
          {value}
        </li>
      );
    }

    return items;
  };
  render() {
    console.log(this.state.index);
    return <div>{this.handleRating()}</div>;
  }
}

export default Rating;
