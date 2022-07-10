import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input ref={this.props.propsref} />
    )
  }
}
