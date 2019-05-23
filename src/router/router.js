import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// 组件
import Game from '@/pages/game/Game' //游戏
import Mine from '@/pages/mine/Mine' //我的
import LoginPcQr from '@/pages/login/LoginPcQr/LoginPcQr'

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="page">
                <Switch>
                    <Route exact path="/" component={Game}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/LoginPcQr" component={LoginPcQr}/>
                </Switch>
            </section>
        )
    }
}