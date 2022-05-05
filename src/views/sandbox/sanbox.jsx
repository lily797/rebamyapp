import React from 'react'
import {Switch, Route} from 'react-router-dom'

import TopHeader from '../../components/sanbox/TopHeader'
import SideMenu from '../../components/sanbox/SideMenu'
import Home from './home/home'
import UserList from './user-manage'
import RoleList from './right-manage/role'
import RightList from './right-manage/right'
export default function sanbox() {
  return (
    <div>
      <TopHeader />
      <SideMenu />
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/user-manage/list" component={UserList}></Route>
        <Route path="/right-manage/role/list" component={RoleList}></Route>
        <Route path="/right-manage/right/list" component={RightList}></Route>
      </Switch>
    </div>
  )
}
