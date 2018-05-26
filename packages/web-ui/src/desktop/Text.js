import React, { Component } from 'react';

export default class Text extends Component {
  state = {
    size: this.props.size,
    style: {
      fontSize: getFontSize(this.props.size),
    },
  };

  static getDerivedStateFromProps(props, state) {
    if (props.size !== state.size) {
      return {
        size: props.size,
        style: {
          fontSize: getFontSize(props.size),
        },
      };
    }
    return null;
  }

  render() {
    return <span style={this.state.style}>{this.props.children}</span>;
  }
}

function getFontSize(size) {
  if (size === 'large') {
    return 24;
  }
  return 16;
}
