// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  handleOnFocus(ev) {
    ev.preventDefault()
    console.log('Good!')
  }

  handleOnBlur(ev) {
    ev.preventDefault()
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
        <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Click Me!</button>
    )
  }
}
