import React from 'react'
import { Button } from 'antd-mobile';

// 热门游戏
export default class HotGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameInfo: [{
                id: 1,
                name: "广西玉林麻将",
                introduce: "经典地方棋牌，真人实时对战。",
                gameIcon: "https://img.fphdcdn.com/member/2019-03-11am8SYiYfEY.png"
            },
            {
                id: 2,
                name: "广西玉林麻将",
                introduce: "经典地方棋牌，真人实时对战。",
                gameIcon: "https://img.fphdcdn.com/member/2019-03-11am8SYiYfEY.png"
            },
            {
                id: 2,
                name: "广西玉林麻将",
                introduce: "经典地方棋牌，真人实时对战。",
                gameIcon: "https://img.fphdcdn.com/member/2019-03-11am8SYiYfEY.png"
            },
            {
                id: 2,
                name: "广西玉林麻将",
                introduce: "经典地方棋牌，真人实时对战。",
                gameIcon: "https://img.fphdcdn.com/member/2019-03-11am8SYiYfEY.png"
            },
            {
                id: 2,
                name: "广西玉林麻将",
                introduce: "经典地方棋牌，真人实时对战。",
                gameIcon: "https://img.fphdcdn.com/member/2019-03-11am8SYiYfEY.png"
            }]
        }
    }

    render() {
        const gameInfo = this.state.gameInfo
        return (
            <section id="HotGame">
                <h3>热门游戏</h3>
                <ul>
                    {
                        gameInfo.map(item => {
                            return (
                                <li className="game-item" key={item.id}>
                                    <img src={item.gameIcon} alt={item.name} />
                                    <div className="game-introduce">
                                        <div className="text">
                                            <p className="name">{item.name}</p>
                                            <p className="introduce">{item.introduce}</p>
                                        </div>
                                        <Button type="ghost" size="small">开始玩</Button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}