import React, {useEffect, useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'
import {
    Link
  } from 'react-router-dom'
import { Dropdown, Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;



function Nav() {

    const [user, setUser] = useContext(UserContext)

    const logout = () =>{
        setUser(null)
        localStorage.removeItem("Authorization")
    }

    const menu = (
        <Menu>
          <Menu.Item>
            <Link to='/movie-editor'>
                Movie Editor
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/game-editor'>
                Game Editor
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/change-password'>
                Change Password
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/game-editor' onClick={logout}>
                Logout
            </Link>
          </Menu.Item>
        </Menu>
      );

    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                <Link to="/">
                    <img src="Logo.png" alt="logo"/>
                </Link>
                {
                        user ?
                        <Menu.Item style={{float: "right"}} key="1"> 
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Hello, {user.user.name} <DownOutlined />
                                </a>
                            </Dropdown>
                        </Menu.Item>
                          :
                        <Menu.Item style={{float: "right"}} key="1">
                            <Link to='/login'>
                                login
                            </Link>
                        </Menu.Item>
                }
                <Menu.Item style={{float: "right"}} key="2">
                    <Link to='/games'>
                        Games
                    </Link>
                </Menu.Item>
                <Menu.Item style={{float: "right"}} key="3">
                    <Link to='/movies'>
                        Movies
                    </Link>
                </Menu.Item>
                <Menu.Item style={{float: "right"}} key="4">
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
            </Header>
        </Layout>
    )
}

export default Nav
