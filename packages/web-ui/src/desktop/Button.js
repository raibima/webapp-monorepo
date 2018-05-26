import React, { Component } from 'react';

const style = {
  padding: 16,
  borderRadius: 4,
  backgroundColor: 'white',
  border: '1px solid black',
  color: 'black',
};

export default class Button extends Component {
  state = {
    style: {
      ...style,
      ...this.props.style,
    },
    styleProps: this.props.style,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.style !== state.styleProps) {
      return {
        style: {
          ...style,
          ...props.style,
        },
        styleProps: props.style,
      };
    }
    return null;
  }

  handleClick(...args) {
    // insert tracking here...
    args[0].preventDefault();
    if (typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }

  render() {
    const { style, children, onClick, ...props } = this.props;
    return (
      <button {...props} onClick={this.handleClick} style={this.state.style}>
        {children}
      </button>
    );
  }
}
