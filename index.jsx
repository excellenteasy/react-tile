'use strict'
const React = require('react')

const tile = {
  render() {
    let bar
    if (this.props.bar !== false) {
      bar = (
        <div style={{background: this.props.barBackground, color: this.props.barColor}}>
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
    lineHeight: React.PropTypes.string,
    background: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    backgroundSize: React.PropTypes.string,
    fontSize: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    fontFamily: React.PropTypes.string,
    backgroundImage: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      size: '100%',
      color: 'white',
      background: 'black',
      backgroundSize: 'cover',
      fontFamily: 'inherit',
      fontSize: 10,
      lineHeight: '1.5'
    }
  },
  render() {
    let style = {
      position: 'relative',
      color: this.props.color,
      width: this.props.size,
      fontSize: `${this.props.fontSize}px`,
      fontFamily: this.props.fontFamily,
      height: 0,
      paddingBottom: '100%',
      overflow: 'hidden',
      backgroundSize: this.props.backgroundSize,
      backgroundImage: this.props.backgroundImage,
      lineHeight: this.props.lineHeight
    }

    let children = []

    if (typeof this.props.background === 'string') {
      style.background = this.props.background
    }
    else if (this.props.background) {

      let bgStyle = {
        zIndex: '-1',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }
      children.push(
        <div key='background' style={bgStyle}>
          {this.props.background}
        </div>
      )
    }

    let contentStyle = {
      padding: '10px',
      boxSizing: 'border-box',
      width: '100%'
    }

    children.push(
      <div key="content" style={contentStyle}>{this.props.children}</div>
    )

    return (
      <div style={style}>
        {children}
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
