import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// 组件
import Game from '@/pages/game/Game' //游戏
import Mine from '@/pages/mine/Mine' //我的
import LoginPcQr from '@/pages/login/LoginPcQr/LoginPcQr'

export default class AppRouter extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="page">
                <Route exact path="/" component={Game}/>
                <Route exact path="/mine" component={Mine}/>
                <Route exact path="/LoginPcQr" component={LoginPcQr}/>
            </section>
        )
    }
}