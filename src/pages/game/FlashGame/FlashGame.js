import React from 'react'
import { Flex, Button } from 'antd-mobile';

//精选游戏
export default class FlashGame extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="FlashGame">
                <h3>精选游戏</h3>
                <Flex justify="center">
                    <Flex.Item>
                        <img src="https://img.xuewuzhijing.top/game/pg.jpg" alt="" />
                        <p className="name">苹果的诱惑</p>
                        <a href="https://xuewuzhijing.top/littleGame/pgdyh/">
                            <Button type="primary" size="small">开始玩</Button>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <img src="https://xuewuzhijing.top/littleGame/dppM/res/share.png" alt="" />
                        <p className="name">打泡泡</p>
                        <a href="https://xuewuzhijing.top/littleGame/dppM/">
                            <Button type="primary" size="small">开始玩</Button>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <img src="https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png" alt="" />
                        <p className="name">十三张</p>
                        <Button type="primary" size="small">开始玩</Button>
                    </Flex.Item>
                    <Flex.Item justify="center">
                        <img src="https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png" alt="" />
                        <p className="name">十三张</p>
                        <Button type="primary" size="small">开始玩</Button>
                    </Flex.Item>
                </Flex>
                {/* <h3>精选游戏</h3>
                <ul>
                    <li>
                        <img src="https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png" alt="" />
                        <p>十三张</p>
                        <button>开始游戏</button>
                    </li>
                    <li>
                        <img src="https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png" alt="" />
                        <p>十三张</p>
                        <button>开始游戏</button>
                    </li>
                    <li>
                        <img src="https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png" alt="" />
                        <p>十三张</p>
                        <button>开始游戏</button>
                    </li>
                    <li>
                        <img src="https://img.fphdcdn.com/member/2018-09-26rsNYrw2epZ.png" alt="" />
                        <p>十三张</p>
                        <button>开始游戏</button>
                    </li>
                </ul> */}
            </section>
        )
    }
}