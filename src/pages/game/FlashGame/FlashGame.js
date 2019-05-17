import React from 'react'
import {Flex, Button} from 'antd-mobile';

//精选游戏
export default class FlashGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: "苹果的诱惑",
                    img: "https://img.xuewuzhijing.top/game/pg.jpg",
                    url: "https://xuewuzhijing.top/littleGame/pgdyh/"
                },
                {
                    id: 2,
                    name: "打泡泡",
                    img: "https://xuewuzhijing.top/littleGame/dppM/res/share.png",
                    url: "https://xuewuzhijing.top/littleGame/dppM/"
                },
                {
                    id: 3,
                    name: "十三张",
                    img: "https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png",
                    url: ""
                },
                {
                    id: 4,
                    name: "十三张",
                    img: "https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png",
                    url: ""
                }
            ]
        }
    }

    //跳转游戏
    goGame(url) {
        window.location.href = url
    }

    render() {
        return (
            <section id="FlashGame">
                <h3>精选游戏</h3>
                <Flex justify="center">
                    {
                        this.state.data.map(val => (
                            <Flex.Item key={val.id}>
                                <img src={val.img} alt=""/>
                                <p className="name">{val.name}</p>
                                <Button type="primary" size="small"
                                        onClick={this.goGame.bind(this, val.url)}>开始玩</Button>
                            </Flex.Item>
                        ))
                    }
                </Flex>
            </section>
        )
    }
}