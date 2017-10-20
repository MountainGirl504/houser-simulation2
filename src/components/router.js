import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './authpage/auth'
import Dashboard from './dashboard/dashboard'
import Step1 from './steps/step1'





export default (
    <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/step1' component={Step1} />
    </Switch>
)