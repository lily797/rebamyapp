import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TopHeader from '../../components/sanbox/TopHeader'
import SideMenu from '../../components/sanbox/SideMenu'
import Home from './home/home'
import UserList from './user-manage'
import RoleList from './right-manage/role'
import RightList from './right-manage/right'
import NoPermission from './nopermission'
import './sandbox.css'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout;
export default function sanbox() {
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user-manage/list" component={UserList}></Route>
            <Route path="/right-manage/role/list" component={RoleList}></Route>
            <Route path="/right-manage/right/list" component={RightList}></Route>
            <Redirect from="/" to="/home" exact ></Redirect>
            <Route path="*" component={NoPermission}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
