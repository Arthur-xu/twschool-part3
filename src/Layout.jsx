import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header} = Layout;

export default class MainLayout extends Component {
  render(){
    return <Layout className="layout">
    <Router>
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
      </Router>
    </Layout>
  }
    
}
