import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// 组件
import Game from '@/pages/game/Game' //游戏
import Mine from '@/pages/mine/Mine' //我的

export default class AppRouter extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Route exact path="/" component={Game}/>
                <Route exact path="/mine" component={Mine}/>
            </div>
        )
    }
}