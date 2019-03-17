import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter
} from 'react-router-dom'
import InstitutionList from '../pages/InstitutionList/InstitutionList'
import AddInstitution from '../pages/AddInstitution/CreateSchool'
class RouteViews extends Component {
  render() {
    return (
      <HashRouter>
        {this.props.children}
        <main>
          <div className="content">
            <Switch>
              <Route path="/InstitutionList" component={InstitutionList} />
              <Route path="/AddInstitution" component={AddInstitution} />
              <Redirect to="/InstitutionList" />
            </Switch>
          </div>
        </main>
      </HashRouter>
    )
  }
}

export default RouteViews
