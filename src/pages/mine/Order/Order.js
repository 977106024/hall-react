import React from 'react'
import TabsCom from '@/components/Tabs/Tabs'

export default class Order extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="Order">
                <TabsCom />
            </section>
        )
    }
}