import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const ChartControls = ({width, onChange}) => (
  <div className={css.Controls}>
    <div className={css.WidthLabel}>
      <b>Chart width</b>: {width}%
    </div>
    <input type="range" min={0} max={100} value={width} onChange={onChange} />
  </div>
)

ChartControls.propTypes = {
  width: PropTypes.number,
  onChange: PropTypes.func,
}

export default ChartControls
