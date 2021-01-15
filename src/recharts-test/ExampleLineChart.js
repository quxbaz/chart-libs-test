import css from './style.css'
import React, { useState } from 'react'
import classNames from 'classnames'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import ChartControls from './ChartControls'

function ExampleLineChart ({className, style, data, margin, showControls, hasBoxShadow}) {
  const [width, setWidth] = useState(100)
  return (
    <div className={classNames(css.ExampleLineChart, className)} style={style}>
      {showControls && (
        <ChartControls width={width} onChange={event => setWidth(parseInt(event.target.value))} />
      )}
      <div style={{width: width + '%'}}>
        <ResponsiveContainer width="100%" aspect={1.5}>
          <LineChart className={css.Chart} data={data} margin={margin}
                     style={{boxShadow: hasBoxShadow ? '0 2px 12px hsl(0 0% 60% / 1)' : 'none'}}>
            <Line type="monotone" dataKey="quantity_sent"    stroke="#00aa00" strokeWidth={2} />
            <Line type="monotone" dataKey="quantity_pending" stroke="#808080" strokeWidth={2} />
            <Line type="monotone" dataKey="quantity_failed"  stroke="#ff0000" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="labelX" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

ExampleLineChart.defaultProps = {
  className: '',
  style: {},
  showControls: false,
  hasBoxShadow: false,
}

export default ExampleLineChart
