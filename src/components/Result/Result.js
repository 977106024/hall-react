import React from 'react'
import './Result.scss'
import {Result} from 'antd-mobile';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

export default class ResultCom extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="Result">
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                    title="您无权限!"
                    message="请向管理员申请admin管理权限"
                />
            </section>
        )
    }
}