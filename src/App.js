import React, { Component } from 'react'
import Layout from './components/Layout'
import RouteViews from './router'

class App extends Component {
  render = () => (
    <RouteViews>
      <Layout />
    </RouteViews>
  )
}

export default App
