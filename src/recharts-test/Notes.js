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
        <a href="./bundle-size.png" style={{float: 'right', marginLeft: 10}}>
          <img src="./bundle-size.png" width={120} height={120} />
        </a>
        Total bundle size with <b>recharts</b>, <b>react</b>, and <b>react-dom</b> is <b>512K</b> uncompressed and <b>148K</b> compressed.<br />
        <div style={{clear: 'both'}} /><br />
        <a href="./bundle-size-bare.png" style={{float: 'right', marginLeft: 10}}>
          <img src="./bundle-size-bare.png" width={120} height={120} />
        </a>
        Total bundle size with <b>react</b> and <b>react-dom</b> is <b>132K</b> uncompressed and <b>44K</b> compressed.<br />
      </li>
      <li>
        The API is very nice to use. Reactivity is such a neat feature to have
        in a charting library. Declarative programming style fits really well.
      </li>
      <li>
        The authors really considered a lot when considering what options to expose.
      </li>
      <li>
        Not the prettiest. Quite plain looking. Might be able to spice it up, but the defaults are just okay.
      </li>
      <li>
        Bar graphs are a better fit here. Line graphs are too noisy. Line graphs
        are better at showing a trend. I think we expect the data to remain
        close to constant. Bar graphs also indicate abnormal spikes really
        well. Bar charts take more horizontal space though. I think recharts has
        support for horizontal scroll with the "Brush" component, but maybe not.<br />
        <a href='https://github.com/recharts/recharts/issues/1761'>
          https://github.com/recharts/recharts/issues/1761
        </a>
      </li>
    </ul>
  </div>
)

export default Notes
