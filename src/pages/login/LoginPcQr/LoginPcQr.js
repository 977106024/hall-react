import React from 'react'
import './LoginPcQr.scss'
import {Button} from 'antd-mobile'
import { Link } from 'react-router-dom'
import {LoginPcConfirm} from '@/service/getData'

export default class LoginPcQr extends React.Component {
    constructor(props) {
        super(props)
    }

    login(){
        let data = {}
        LoginPcConfirm(data).then(res=>{
            console.log('登录')
        })
    }

    render() {
        return (
            <section id="LoginPcQr">
                <div className="title">
                    <svg className="icon svg-pc" aria-hidden="true">
                        <use xlinkHref="#icon-diannao"></use>
                    </svg>
                    <p>admin PC端登陆确认</p>
                </div>
                <div className="sub">
                    <Button type="primary" size="small" onClick={this.login.bind(this)}>登陆</Button>
                    <Link to="/"><p>取消登录</p></Link>
                </div>
            </section>
        )
    }
}