import React from 'react'

export default class Money extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="Money">
                <div className="Balance">
                    <p className="num">$0.00</p>
                    <p>充值余额</p>
                </div>
                <div className="fangka">
                    <p className="num">0</p>
                    <p>房卡</p>
                </div>
                <div className="integral">
                    <p className="num">367</p>
                    <p>积分</p>
                </div>
            </section>
        )
    }
}