import React from 'react'
import { Tabs } from 'antd-mobile';

const tabs = [
    { title: '在线订单' },
    { title: '到店兑换码' },
];

export default class TabsCom extends React.Component {
    constructor(porps){
        super(porps)
    }

    render(){
        return (
            <section id="Order">
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} tabBarUnderlineStyle={{width: '25%',marginLeft:'12.5%'}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                </Tabs>
            </section>
        )
    }
}