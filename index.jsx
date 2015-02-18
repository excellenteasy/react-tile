'use strict'
const React = require('react')

const spec = {
  render() {
    console.log('inside render')
    return (
      <div>bar</div>
    )
  }
}

export const Component = React.createClass(spec)
