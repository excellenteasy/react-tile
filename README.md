# react-tile
[![Build Status](https://travis-ci.org/excellenteasy/react-component.svg?branch=master)](https://travis-ci.org/excellenteasy/react-component)
[![Dependency Status](https://david-dm.org/excellenteasy/react-component.svg)](https://david-dm.org/excellenteasy/react-component)
[![devDependency Status](https://david-dm.org/excellenteasy/react-component/dev-status.svg)](https://david-dm.org/excellenteasy/react-component#info=devDependencies)

**Disclaimer**: This component is work in progress. Dreamcode can be found in [DREAMCODE.md](DREAMCODE.md). Unit tests are coming.

## Usage
Installation: `npm install -S react-tile`.

Consume using ES6 modules (and browserify):

```jsx
const React = require('react')
import {Tile} from 'react-tile'

React.render(
  <Tile backgroundImage="url(path/to/img.png)" bar="subtext">Main content</Tile>
)
```

Consume using only browserify (no ES6, no JSX):

```javascript
var React = require('react')
var Tile = require('react-tile').Tile
```

## API
This module exports three components:
* [`Tile`](#tile)
* [`SquareBox`](#squarebox)
* [`TextCell`](#textcell)

Most likely you only want to use `Tile` - buy hey, modularity!

### Tile
The `Tile` component is very flexible and allows you to manipulate its rendering using these props:
* [`width`](#width): define the width of the tile
* `color`: set text color `SquareBox`'s content
* `lineHeight`: set css lineHeight property for `SquareBox`
* [`bg`](#bg): provide the background for `SquareBox` as React Element
* `backgroundImage`: set backgroundImage css property for `SquareBox`
* [`backgroundSize`](#backgroundSize): provide the backgroundSize for `SquareBox`
* `fontSize`: set fontSize of `SquareBox`
* `fontFamily`: set fontFamily of `SquareBox`
* [`bar`](#bar): provide content for the bottom bar or disable it
* [`barBackground`](#barbackground): provides background styles as a string
* `barColor`: set text color of `TextCell`,

#### width
The width of the `Tile` component also defines the length of a side of `SquareBox`. It can be any CSS value as string. Default is `"100%"`.

#### bg
The `bg` prop is a React element which will be used as background for `SquareBox`'s content, if provided.

#### bar
The `bar` prop can be a string (shorthand) or a React component used as content for `TextCell`.

### barBackground
The `barBackground` prop provides the css background styles for the `TextCell`.

#### Examples
This is somewhat pseudo-code, but provided the used React components, exist you should be able to do this.

Using a imaginary `TimeRelative` component, that formats dates:
```jsx
  <Tile 
  background="foo/bar/baz.png"
  content="Text inside square" 
  bar=<TimeRelative date={this.props.date}> />
```

### SquareBox
The `SquareBox` component has the same width and height. It supports these props:
* `size`: Specifies the size of one side; default is `"100%"`
* [`bg`](#bg): value for css `bg` property or React component to be used as background; see above for details
* `color`, `lineHeight`, `backgroundSize`, `fontSize`, `fontFamily`, `backgroundImage`

### TextCell
The `TextCell` component does not wrap text, hides overflowing elements and - if provided a string - will automatically cut off strings that are too long for the width of the tile, using an ellipsis. It supports these props:
* `truncating`: Truncate long text when if overflows; default is true

## License

MIT License 
2015 © David Pfahler and [contributors](https://github.com/excellenteasy/react-tile/graphs/contributors)
