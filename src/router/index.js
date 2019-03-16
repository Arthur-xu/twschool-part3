import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import InstitutionList from '../pages/InstitutionList/InstitutionList'
import AddInstitution from '../pages/AddInstitution/CreateSchool'
class RouteViews extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    )
  }
}

export default RouteViews
