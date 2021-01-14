import css from './style.css'
import React, { useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const DATA = [
  { labelX: '1/1',   y1: 0, y2: 0, pv: 2400, amt: 2400 },
  { labelX: '1/2', y1: 100, y2: 50, pv: 2400, amt: 2400 },
  { labelX: '1/3', y1: 200, y2: 100, pv: 2400, amt: 2400 },
  { labelX: '1/4', y1: 300, y2: 150, pv: 2400, amt: 2400 },
  { labelX: '1/5', y1: 400, y2: 200, pv: 2400, amt: 2400 },
  { labelX: '1/6', y1: 500, y2: 250, pv: 2400, amt: 2400 },
  { labelX: '1/7', y1: 550, y2: 275, pv: 2400, amt: 2400 },
  { labelX: '1/8', y1: 600, y2: 300, pv: 2400, amt: 2400 },
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

const Notes = () => (
  <div>
    <h2>Notes</h2>
    <ul>
      <li>The tooltips look and feel janky.</li>
    </ul>
  </div>
)


function Chart ({data}) {
  const [width, setWidth] = useState(100)
  return (
    <div className={css.Chart}>
      <h1>Chart drawn with <a href="https://recharts.org">recharts</a></h1>
      <hr />
      <Controls width={width}
                onChange={event => setWidth(event.target.value)} />
      <div style={{width: width + '%'}}>
        <ResponsiveContainer width="100%" aspect={1.5}>
          <LineChart className={css.LineChart} data={data} margin={{top: 45, right: 40, bottom: 20, left: 0}}>
            <Line type="monotone" dataKey="y1" stroke="#8884d8" />
            <Line type="monotone" dataKey="y2" stroke="#ff8800" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="labelX" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Notes />
    </div>
  )
}

function test () {
  render(<Chart data={DATA} />, document.getElementById('Main'))
}

export default test
