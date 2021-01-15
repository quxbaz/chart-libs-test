import css from './style.css'
import React from 'react'
import classNames from 'classnames'

const GoodRatingMark = () => (
  <div className={`${css.RatingMark} ${css.GoodRatingMark}`} />
)

const BadRatingMark = () => (
  <div className={`${css.RatingMark} ${css.BadRatingMark}`} />
)

const Notes = ({className}) => (
  <div className={classNames(css.Notes, className)}>
    <h2>Notes</h2>
    <ul>
      <li>Dynamic resizing is supported.</li>
      <li>
        recharts is quite a large package and draws in a large number of dependencies.
      </li>
      <br />
      <li>
        <a href="./bundle-size.png" style={{float: 'right', marginLeft: 10}}>
          <img src="./bundle-size.png" width={120} height={120} />
        </a>
        Total bundle size with <b>recharts</b>, <b>react</b>, and <b>react-dom</b> is <b>512K</b> uncompressed and <b>148K</b> compressed.
      </li>
      <div style={{clear: 'both'}} />
      <li>
        <a href="./bundle-size-bare.png" style={{float: 'right', marginLeft: 10}}>
          <img src="./bundle-size-bare.png" width={120} height={120} />
        </a>
        Total bundle size with <b>react</b> and <b>react-dom</b> is <b>132K</b> uncompressed and <b>44K</b> compressed.
      </li>
      <div style={{clear: 'both'}} />
      <br />
      <li>
        The API is very nice to use. Reactivity is such a nice feature to have
        in a charting library. Declarative programming style fits really well.
      </li>
      <li>
        The authors really considered a lot when considering what options to
        expose. I was able to find a config for just about anything I wanted to
        change.
      </li>
      <li>
        Not the prettiest. Quite plain looking. Might be able to spice it up, but the defaults are just okay.
      </li>
      <li>
        Bar graphs are a better fit here. Line graphs are too noisy. Line graphs
        are better at showing a trend. I think we expect the numbers to remain
        fairly constant, especially for the time interval (61 days). Bar graphs
        also indicate abnormal spikes really well. Bar charts take more
        horizontal space though. I think recharts has support for horizontal
        scroll with the "Brush" component, but maybe not.<br />
        <a href='https://github.com/recharts/recharts/issues/1761'>
          https://github.com/recharts/recharts/issues/1761
        </a>
      </li>
      <br />
      <li>
        <div className={css.Rating}>
          <span>Ease of use:</span>
          <GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><GoodRatingMark />
        </div>
        <div className={css.Rating}>
          <span>Flexibility:</span>
          <GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><GoodRatingMark />
        </div>
        <div className={css.Rating}>
          <span>Interactivity:</span>
          <GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><BadRatingMark />
        </div>
        <div className={css.Rating}>
          <span>Performance:</span>
          <GoodRatingMark /><GoodRatingMark /><GoodRatingMark /><BadRatingMark /><BadRatingMark />
        </div>
        <div className={css.Rating}>
          <span>Size:</span>
          <GoodRatingMark /><GoodRatingMark /><BadRatingMark /><BadRatingMark /><BadRatingMark />
        </div>
      </li>
    </ul>
  </div>
)

export default Notes
