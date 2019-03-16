import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import './Layout.scss'

import logo from '../assets/imgs/thoughtworks-logo.png'
import avatar from '../assets/imgs/oval.png'

export default class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="logo">
            <img src={logo} alt="thoughtworks-logo" />
          </div>
          <nav>
            <NavLink to="/Account" activeClassName="active">
              账户
            </NavLink>
            <NavLink to="/InstitutionList" activeClassName="active">
              训练营
            </NavLink>
            <NavLink to="/TaskCard" activeClassName="active">
              任务卡
            </NavLink>
          </nav>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </header>
      </Fragment>
    )
  }
}
