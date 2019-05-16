import React from 'react'
import TabsCom from '@/components/Tabs/Tabs'

// 线上
function OnLine(){
    return (
        <ul className="tabs-content">
            <li>待发货</li>
            <li>运输中</li>
            <li>已领取</li>
        </ul>
    )
}

// 线下
function UnderLine(){
    return (
        <ul className="tabs-content">
            <li>待发货2</li>
            <li>运输中2</li>
            <li>已领取2</li>
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
