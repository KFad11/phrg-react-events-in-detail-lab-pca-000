import React from 'react';

export default class DelayedButton extends React.Component {

  clickEvent = event => {
    event.persist()
    setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay)
  }

  render() {
    return <button onClick={this.clickEvent}>Button</button>
  }
}
