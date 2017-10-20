import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './authpage/auth'
import Dashboard from './dashboard/dashboard'





export default (
    <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>
)