import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import InstitutionList from '../pages/Institution/InstituationList'
import AddInstitution from '../pages/AddInstitution/AddInstitution'
import Layout from '../Layout';
export default class RouteConfig extends Component{
    render(){
      return(
        <HashRouter>
          <Switch>
            <Route path="/" component={Layout}>
                <Route path="/InstitutionList" component={InstitutionList} />
                <Route path="/AddInstitution" component={AddInstitution} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      )
    }
  }
