import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input className={this.props.className} placeholder={this.props.placeholder} ref={this.props.propsref} />
    )
  }
}
