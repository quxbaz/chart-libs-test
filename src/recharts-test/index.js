import css from './style.css'
import React, { useState } from 'react'
import { generateReports } from '../data'
import ExampleLineChart from './ExampleLineChart'
import Notes from './Notes'

function DataControls ({onGenerateData}) {
  const generateNormalData = () => {
    onGenerateData(generateReports())
  }
  const generateTrendingUpData = () => {
    onGenerateData(generateReports())
  }
  const generateTrendingDownData = () => {
    onGenerateData(generateReports())
  }
  const generateFailingData = () => {
    onGenerateData(generateReports())
  }
  return (
    <div className={css.DataControls}>
      <button type='button' onClick={generateNormalData}>Generate <b>Normal</b> data</button>
      <button type='button' onClick={generateTrendingUpData}>Generate <b>Trending Up</b> data</button>
      <button type='button' onClick={generateTrendingDownData}>Generate <b>Trending Down</b> data</button>
      <button type='button' onClick={generateFailingData}>Generate <b>Failing</b> data</button>
    </div>
  )
}

function RechartsTest () {
  const [data, setData] = useState(generateReports())
  return (
    <div className={css.RechartsTest}>
      <div className={css.LeftColumn}>
        <h1>Charts drawn with <a href="https://recharts.org">recharts</a></h1>
        <DataControls onGenerateData={setData} />
        <ExampleLineChart data={data} margin={{top: 45, right: 40, bottom: 20, left: 0}} style={{marginTop: '20px'}}
                          showControls={true} hasBoxShadow={true} />
        <div className={css.Tiles3}>
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
        </div>
        <div className={css.Tiles4}>
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
        </div>
        <div className={css.Tiles5}>
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
        </div>
        <div className={css.Tiles6}>
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
        </div>
        <div className={css.Tiles7}>
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
        </div>
        <div className={css.Tiles8}>
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
          <ExampleLineChart data={data} />
        </div>
      </div>
      <Notes className={css.RightColumn} />
    </div>
  )
}

export { RechartsTest }
