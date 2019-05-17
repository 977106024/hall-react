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
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} tabBarUnderlineStyle={{width: '25%',marginLeft:'12.5%'}}>
                    {React.Children.map(this.props.children,(child, i)=>
                        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', backgroundColor: '#fff' }}>
                                {child}
                        </div>)
                    )}
                </Tabs>
        )
    }
}