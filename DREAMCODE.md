# react-tile
[![Build Status](https://travis-ci.org/excellenteasy/react-component.svg?branch=master)](https://travis-ci.org/excellenteasy/react-component)
[![Dependency Status](https://david-dm.org/excellenteasy/react-component.svg)](https://david-dm.org/excellenteasy/react-component)
[![devDependency Status](https://david-dm.org/excellenteasy/react-component/dev-status.svg)](https://david-dm.org/excellenteasy/react-component#info=devDependencies)

## Usage
Installation: `npm install -S react-tile`.

Consume using ES6 modules (and browserify):

```jsx
const React = require('react')
import {Tile} from 'react-tile'

React.render(
  <Tile background="url(path/to/img.png)" bar="subtext">Main content</Tile>
)
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
* [`background`](#background): provide the background for `SquareBox`
* [`backgroundSize`](#backgroundSize): provide the backgroundSize for `SquareBox`
* [`autoFontSize` et. al.](#font-props): font related props can be customized
* [`bar`](#bar): provide content for the bottom bar or disable it
* [`barBackground`](#barbackground): provides background styles as a string

#### width
The width of the `Tile` component also defines the length of a side of `SquareBox`. It can be any CSS value as string. Default is `"100%"`.

#### background
The `background` prop can be a string (shorthand) or a React component (e.g. picture element). If it is a string, this will used as value for the css `background` property of `SquareBox`. If it is a React component, it will be positioned to fill the entire `SquareBox` and have a lower `z-index` than the content of `SquareBox`, so it appears as background. Default is `"black"`.

#### font props
The font size of `content` - if it is a string - will be automatically determined to reasonable fit the size of the `SquareBox`. To change this behavior you can use:
* `autoFontSize` [Boolean]: enable automatic font sizing; default `true`
* `fontMax` [Number]: the maximum `font-size` in px; default is 100
* `fontMin` [Number]: the minimum `font-size` in px; default is 10
* `fontFamily` [String]: what is says; default is `inherit`

#### bar
The `bar` prop can be a string (shorthand) or a React component. It is used as content for `TextCell`.

### barBackground
The `barBackground` prop provides the css background styles for the `TextCell`.

#### Examples
This is somewhat pseudo-code, but provided the used React components, exist you should be able to do this.

Using a `picture` component:
```jsx
<Tile 
  background=
    <picture>
      <source media="(min-width: 800px)"
        sizes="80vw"
        srcset="lighthouse-landscape-640.jpg 640w,
          lighthouse-landscape-1280.jpg 1280w,
          lighthouse-landscape-2560.jpg 2560w">
      <img src="lighthouse-160.jpg" alt="lighthouse"
       sizes="80vw"
       srcset="lighthouse-160.jpg 160w,
         lighthouse-320.jpg 320w,
         lighthouse-640.jpg 640w,
         lighthouse-1280.jpg 1280w">
    </picture>
  content="Text inside square" bar="Text inside bottom bar" />
```

Using a `TimeRelative` component, that formats dates:
```jsx
  <Tile 
  background="foo/bar/baz.png"
  content="Text inside square" 
  bar=<TimeRelative date={this.props.date}> />
```

### SquareBox
The `SquareBox` component has the same width and height. It supports these props:
* `size`: Specifies the size of one side; default is `"100%"`
* [`background`](#background): value for css `background` property or React component to be used as background; see above for details
* `backgroundImage`: value for css `background-imag` property
* [`backgroundSize`](#backgroundSize): value for css `backgroundSize` property; Default is `"cover"`
* [`autoFontSize` et. al.](#font-props): font related props can be customized; see above for details

### TextCell
The `TextCell` component does not wrap text, hides overflowing elements and - if provided a string - will automatically cut off strings that are too long for the width of the tile, using an ellipsis. It supports these props:
* `truncating`: Truncate long text when if overflows; default is true

## License

MIT License 
2015 © David Pfahler and [contributors](https://github.com/excellenteasy/react-tile/graphs/contributors)
