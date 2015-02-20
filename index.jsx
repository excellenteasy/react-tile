'use strict'
const React = require('react')

const tile = {
  render() {
    let bar
    if (this.props.bar !== false) {
      bar = (
        <div style={{background: bar}}>
          <TextCell  {...this.props}>{this.props.bar}</TextCell>
        </div>
      )
    }

    return (
      <div>
        <SquareBox {...this.props} size={this.props.width}>{this.props.children}</SquareBox>
        {bar}
      </div>
    )
  }
}

const squarebox = {
  propTypes: {
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    color: React.PropTypes.string,
    background: React.PropTypes.string,
    backgroundSize: React.PropTypes.string,
    fontMax: React.PropTypes.number,
    fontMin: React.PropTypes.number,
    fontFamily: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      size: '100%',
      color: 'white',
      background: 'black',
      backgroundSize: 'cover',
      fontFamily: 'inherit',
      fontSize: 10
    }
  },
  render() {
    let style = {
      color: this.props.color,
      width: this.props.size,
      fontSize: `${this.props.fontSize}px`,
      fontFamily: this.props.fontFamily,
      height: 0,
      paddingBottom: '100%',
      overflow: 'hidden',
      background: this.props.background,
      backgroundSize: this.props.backgroundSize
    }

    let contentStyle = {
      padding: '10px',
      boxSizing: 'border-box',
      width: '100%'
    }

    return (
      <div style={style}>
        <div style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const textcell = {
  propTypes: {
    truncating: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      truncating: true
    }
  },
  render() {
    let style = {
      width: '100%',
      overflow: 'hidden',
      height: '40px',
      fontSize: '11pt',
      padding: '0 10px',
      display: 'block',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    }
    style.lineHeight = style.height

    if (this.props.truncating) {
      style.textOverflow = 'ellipsis'
    }

    return (
      <div style={style}>{this.props.children || ''}</div>
    )
  }
}

export {textcell}
export const TextCell = React.createClass(textcell)
export {squarebox}
export const SquareBox = React.createClass(squarebox)
export {tile}
export const Tile = React.createClass(tile)
