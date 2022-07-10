import React, { Component } from 'react'
import Wrapper from "../../Ui/Wrapper/Wrapper"

export default class Listitem extends Component {
  render() {
    return (
      <Wrapper>
      <li className={this.props.className}>{this.props.children}</li>

      <br />
      </Wrapper>
    )
  }
}
