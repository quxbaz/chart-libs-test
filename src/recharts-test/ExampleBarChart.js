import css from './style.css'
import React, { useState } from 'react'
import classNames from 'classnames'
import {
  ResponsiveContainer, BarChart, Bar,
  CartesianGrid, XAxis, YAxis,
  Legend, Tooltip,
} from 'recharts'
import ChartControls from './ChartControls'

const formatTick = date => date.split('-').slice(1).join('/')

function ExampleBarChart ({className, style, data, margin, showLegend, showControls, hasBoxShadow}) {
  const [width, setWidth] = useState(100)
  return (
    <div className={classNames(css.ExampleBarChart, className)} style={style}>
      {showControls && (
        <ChartControls width={width} onChange={event => setWidth(parseInt(event.target.value))} />
      )}
      <div style={{width: width + '%'}}>
        <ResponsiveContainer width='100%' aspect={1.5}>
          <BarChart className={css.Chart} data={data} margin={margin}
                    barGap={0} barCategoryGap='15%' reverseStackOrder={true}
                    style={{boxShadow: hasBoxShadow ? '0 2px 12px hsl(0 0% 60% / 1)' : 'none'}}>
            <CartesianGrid stroke='#eee'/>
            <Bar name='Sent'    dataKey='quantity_sent'    fill='#00aa00' minPointSize={6} />
            <Bar name='Pending' dataKey='quantity_pending' fill='#808080' minPointSize={6} />
            <Bar name='Failed'  dataKey='quantity_failed'  fill='#ff0000' minPointSize={6} />
            <XAxis dataKey='date' tickLine={false} tickFormatter={formatTick} />
            <YAxis />
            {showLegend && (
              <Legend verticalAlign='top' height={36} iconType='rect' />
            )}
            <Tooltip isAnimationActive={false} cursor={{fill: 'hsl(44 81% 62% / 0.3)'}} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

ExampleBarChart.defaultProps = {
  className: '',
  style: {},
  showLegend: false,
  showControls: false,
  hasBoxShadow: false,
}

export default ExampleBarChart
