import React from 'react'
import { render } from 'react-dom'
import './style.css'
import { RechartsTest } from 'recharts-test'

console.log('chart-libs-test.js')
console.log('--------------------------------')

const Main = document.getElementById('Main')
render(<RechartsTest />, Main)
