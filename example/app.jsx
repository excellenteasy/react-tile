'use strict'
const React = require('react')
import {Tile} from '../index.jsx'

const style = {
  width: '160px',
  border: '1px solid black'
}

let url = "https://unsplash.imgix.net/photo-1418479631014-8cbf89db3431?q=75&fm=jpg&w=1080&fit=max&s=26b16cdf05f4b6a3ad6b5def1d408612"

React.render(
  <div style={style}>
    <Tile
      fontSize="30"
      fontFamily="Avenir"
      background="red"
      bar="Color red"
      color="black"
    >Tile #1</Tile>
    <Tile background={`url(${url})`} bar="Background image">Tile #2</Tile>
    <Tile background="purple" bar={false}>Tile #3</Tile>
    <Tile bar={<b>fooo</b>}>Tile #4</Tile>
  </div>,
  document.body
)
