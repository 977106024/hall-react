import React from 'react'
import './Index.scss'
import CarouselCom from '@/components/Carousel/Carousel'
import FlashGame from './FlashGame/FlashGame'
import HotGame from './HotGame/HotGame'

// 游戏页面 首页
export default class Game extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="game">
                <CarouselCom />
                <FlashGame />
                <HotGame />
            </section>
        )
    }
}