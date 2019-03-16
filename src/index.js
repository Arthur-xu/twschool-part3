import React from 'react'
import { render } from 'react-dom'
import App from './App'
import CreateSchool from "./pages/AddInstitution/CreateSchool";

import './App.scss'
import 'antd/dist/antd.css'

render(<CreateSchool />, document.getElementById('root'))
