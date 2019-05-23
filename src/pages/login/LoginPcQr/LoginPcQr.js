import React from 'react'
import './LoginPcQr.scss'
import {Button} from 'antd-mobile'
import {Link, withRouter} from 'react-router-dom'
import {LoginPcConfirm,scanningQr} from '@/service/getData'
import ResultCom from '@/components/Result/Result'

class LoginPcQr extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uuid:"",
            controller:true
        }
    }

    componentWillMount() {
        //获取url上uuid
        let query = this.props.location.search
        let index = query.indexOf("=")
        let uuid = query.substr(index+1)

        //url上没有uuid
        if(uuid === ""){
            this.state.controller = false
            return
        }
        this.setState({
            uuid:uuid
        })

        const data = {
            openId:"9771",
            uuid:'a9fc3f50-7d2a-11e9-995a-85c462aef50d',
            statusQr:true,
        }
        //通知后台已扫二维码
        scanningQr(data).then(res=>{
            let $res = res.data
            if($res.code === 200 && $res.data){
                this.setState({
                    //有权限的用户
                    controller:true
                })
            }else{
                this.setState({
                    //没有权限的用户
                    controller:false
                })

            }
        })
    }

    //确认登陆
    login() {
        let data = {id: 9771,uuid:this.state.uuid}
        LoginPcConfirm(data).then(res => {
            let $res = res.data
            if ($res.code === 200 && $res.data === 'OK') {
                //确认登陆后跳到首页
                this.props.history.push('/')
            }
        })
    }

    render() {
        let isController
        if(this.state.controller){
            isController = (
                <div className="login-wrap">
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
                </div>
            )
        }else{
            isController = (
                <ResultCom/>
            )
        }
        return (
            <section id="LoginPcQr">
                {isController}
            </section>
        )
    }
}

//

export default withRouter(LoginPcQr)