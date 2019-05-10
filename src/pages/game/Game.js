import React from 'react'
import './Index.scss'
import Carousel from '@/components/Carousel/Carousel'
import FlashGame from './FlashGame/FlashGame'

export default class Game extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="game">
                <Carousel />
                <FlashGame />
            </section>
        )
    }
}