import React from 'react'
import './Index.scss'
import Header from './Header/Header'
import Money from './Money/Money'

export default class Mine extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <section id="Mine">
           <Header />
           <Money />

        </section>
      )
    }
}
