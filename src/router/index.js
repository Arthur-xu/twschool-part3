import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import InstitutionList from '../pages/InstitutionList/InstitutionList'
import AddInstitution from '../pages/AddInstitution/AddInstitution'

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
            <Router>
                <Route path="/" exact component={InstitutionList} />
                <Route path="/AddInstitution" component={AddInstitution} />
            </Router>
          
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}