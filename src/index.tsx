import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import { Layout, Menu } from 'antd'
import RatingsView from './views/ratings/Ratings'
import * as serviceWorker from './serviceWorker'

const { Header, Content, Footer } = Layout

ReactDOM.render(
    <Layout className="layout">
        <Router>
            <Header style={{ backgroundColor: 'white' }}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['ratings']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="ratings">
                        <Link to="/ratings">Ratings</Link>
                    </Menu.Item>
                    <Menu.Item key="contests">
                        <Link to="/contests">Contests</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <Switch>
                        <Route path="/ratings">
                            <RatingsView></RatingsView>
                        </Route>
                        <Route path="/contests">
                            <div>This is the contests page</div>
                        </Route>
                        <Route path="/">
                            <RatingsView></RatingsView>
                        </Route>
                    </Switch>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                UESTC ACM Training + 0.0.1 Copyright (C) 2018-2020
            </Footer>
        </Router>
    </Layout>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
