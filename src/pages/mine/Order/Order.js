import React from 'react'
import TabsCom from '@/components/Tabs/Tabs'

// 线上
function OnLine(){
    return (
        <ul className="tabs-content">
            <li>
                <svg className="icon svg-order" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                <p>待发货</p>
            </li>
            <li>
                <svg className="icon svg-order" aria-hidden="true">
                    <use xlinkHref="#icon-yunshuzhong"></use>
                </svg>
                <p>运输中</p>
            </li>
            <li>
                <svg className="icon svg-order" aria-hidden="true">
                    <use xlinkHref="#icon-yilingqu"></use>
                </svg>
                <p>已领取</p>
            </li>
        </ul>
    )
}

// 线下
function UnderLine(){
    return (
        <ul className="tabs-content">
            <li>
                <svg className="icon svg-order" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                <p>待发货2</p>
            </li>
            <li>
                <svg className="icon svg-order" aria-hidden="true">
                    <use xlinkHref="#icon-yunshuzhong"></use>
                </svg>
                <p>运输中2</p>
            </li>
            <li>
                <svg className="icon svg-order" aria-hidden="true">
                    <use xlinkHref="#icon-yilingqu"></use>
                </svg>
                <p>已领取2</p>
            </li>
        </ul>
    )
}

//订单tabs
export default class Order extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="Order">
                <TabsCom>
                    <OnLine/>
                    <UnderLine/>
                </TabsCom>
            </section>
        )
    }
}
