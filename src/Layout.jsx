import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

export default function BuildLayout(){
    return <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">账户</Menu.Item>
        <Menu.Item key="2"></Menu.Item>
        <Menu.Item key="3">任务卡</Menu.Item>
      </Menu>
      
    </Header>
    <main>
        ssss
    </main>
  </Layout>
}
