import * as $ from 'jquery'
import Post from '@models//Post'
// import json from './assets/json.json'   (пакеты установленны)
// import xml from './assets/data.xml'  (пакеты установленны)
// import csv from './assets/data.csv'  (пакеты установленны)
import WebpackLogo from './assets/webpack-logo.png'
import React from 'react'
import {render} from 'react-dom'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import './babel.js'

const post = new Post('Webpack Post Title', WebpackLogo)

// $('pre').addClass('code').html(post.toString())

const App = () => (
    <div class="container">
    <h1>Webpack practice</h1>
    <hr />
    <div class="logo" />
    <hr />
    <pre />
    <hr />
    <div class="box">
      <h2>Less</h2>
    </div>
    <hr />
    <div class="card">
      <h2>SCSS</h2>
    </div>
  </div>
)
render(<App/>, document.getElementById('app'))

// console.log('Post to String: ', post.toString())
// console.log('JSON: ', json)
// console.log('XML ', xml)