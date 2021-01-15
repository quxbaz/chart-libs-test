import css from './style.css'
import React from 'react'
import classNames from 'classnames'

const Notes = ({className}) => (
  <div className={classNames(css.Notes, className)}>
    <h2>Notes</h2>
    <ul>
      <li>Dynamic resizing is supported.</li>
      <li>The tooltips look and feel janky.</li>
      <li>
        recharts is quite a large package and draws in a large number of dependencies.<br /><br />
        <a href="./bundle-size.png" style={{float: 'right'}}>
          <img src="./bundle-size.png" width={120} height={120} />
        </a>
        Total bundle size with <b>recharts</b>, <b>react</b>, and <b>react-dom</b> is <b>512K</b> uncompressed and <b>148K</b> compressed.<br />
        <div style={{clear: 'both'}} /><br />
        <a href="./bundle-size-bare.png" style={{float: 'right'}}>
          <img src="./bundle-size-bare.png" width={120} height={120} />
        </a>
        Total bundle size with <b>react</b> and <b>react-dom</b> is <b>132K</b> uncompressed and <b>44K</b> compressed.<br />
      </li>
    </ul>
  </div>
)

export default Notes
