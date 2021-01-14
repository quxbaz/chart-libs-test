import css from './style.css'
import React, { useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const DATA = [
  { labelX: '1/1', y: 0, pv: 2400, amt: 2400 },
  { labelX: '1/2', y: 100, pv: 2400, amt: 2400 },
  { labelX: '1/3', y: 200, pv: 2400, amt: 2400 },
  { labelX: '1/4', y: 300, pv: 2400, amt: 2400 },
  { labelX: '1/5', y: 400, pv: 2400, amt: 2400 },
  { labelX: '1/6', y: 500, pv: 2400, amt: 2400 },
  { labelX: '1/7', y: 550, pv: 2400, amt: 2400 },
  { labelX: '1/8', y: 600, pv: 2400, amt: 2400 },
]

function Controls ({width, onChange}) {
  return (
    <div className={css.Controls}>
      <div className={css.WidthLabel}>
        <b>Chart width</b>: {width}%
      </div>
      <input type="range" min={0} max={100} value={width}
             onChange={onChange} />
    </div>
  )
}


function Chart ({data}) {
  const [width, setWidth] = useState(100)
  return (
    <div className={css.Chart}>
      <Controls width={width}
                onChange={event => setWidth(event.target.value)} />
      <div style={{width: width + '%'}}>
        <ResponsiveContainer width="100%" aspect={1.5}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="labelX" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function test () {
  render(<Chart data={DATA} />, document.getElementById('Main'))
}

export default test
