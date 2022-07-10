import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input  type={this.props.type} ref={this.props.propsref} className={this.props.className} placeholder={this.props.placeholder} />
    )
  }
}
