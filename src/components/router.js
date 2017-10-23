import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './authpage/auth'
import Dashboard from './dashboard/dashboard'
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import Step4 from './steps/step4'
import Step5 from './steps/step5'



export default (
    <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/step1' component={Step1} />
        <Route path='/step2' component={Step2} />
        <Route path='/step3' component={Step3}/>
        <Route path='/step4' component={Step4}/>
        <Route path='/step5' component={Step5}/>
    </Switch>
)