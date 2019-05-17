import React from 'react'
import TabsCom from '@/components/Tabs/Tabs'

// 线上
function OnLine(){
    return (
        <ul className="tabs-content">
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                待发货
            </li>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                运输中
            </li>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                已领取
            </li>
        </ul>
    )
}

// 线下
function UnderLine(){
    return (
        <ul className="tabs-content">
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                待发货2
            </li>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                运输中2
            </li>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-dailingqu"></use>
                </svg>
                已领取2
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
