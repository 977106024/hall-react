import React from 'react'
import './Index.scss'
import Header from './Header/Header'
import Money from './Money/Money'
import Order from './Order/Order'

// 我的页面
export default class Mine extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <section id="Mine">
           <Header />
           <Money />
           <Order />
        </section>
      )
    }
}
