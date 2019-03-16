import React, {Component} from 'react';
import { Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import InstitutionList from './pages/InstitutionList/InstitutionList'
import AddInstitution from './pages/AddInstitution/AddInstitution'
const { Header} = Layout;

const BaseLayout = () => (
  <div className="base">
    <Layout className="layout">
      <Header>
          <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">账户</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/InstitutionList">训练营</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/AddInstitution">任务卡</Link></Menu.Item>
            </Menu>
        </Header>
    </Layout>
    <main className="container">
      <Route path="/InstitutionList" exact component={InstitutionList} />
      <Route path="/AddInstitution" component={AddInstitution} />
    </main>
  </div>
);

export default BaseLayout;
