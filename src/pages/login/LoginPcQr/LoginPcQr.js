import React from 'react'
import './LoginPcQr.scss'
import {Button} from 'antd-mobile'
import {Link, withRouter} from 'react-router-dom'
import {LoginPcConfirm} from '@/service/getData'

class LoginPcQr extends React.Component {
    constructor(props) {
        super(props)
    }

    login() {
        let data = {id: 9771}
        LoginPcConfirm(data).then(res => {
            let $res = res.data
            if ($res.code === 200 && $res.data === 'OK') {
                //确认登陆后跳到首页
                this.props.history.push('/')
            }
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

export default withRouter(LoginPcQr)