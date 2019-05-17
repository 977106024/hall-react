import React from 'react'
import './TabBar.css'
import { TabBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class TabBarCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'game',
            hidden: false,
            fullScreen: false,
        };
    }

    componentDidMount() {
        //通过路由来选中TabBar
        let pathname = this.props.location.pathname
        console.log(pathname)
        if(pathname === '/'){
            this.setState({
                selectedTab:'game'
            })
        }else if(pathname === '/mine'){
            this.setState({
                selectedTab:'mine'
            })
        }
    }

    renderContent(pageText) {

    }

    render() {
        return (
            <footer id="TabBar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                        <TabBar.Item
                            title="游戏"
                            key="game"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://img.xuewuzhijing.top/game.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://img.xuewuzhijing.top/game-room2.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'game'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'game',
                                });
                                this.props.history.push('/')
                            }}
                            data-seed="logId"
                        >
                            {/* {this.renderContent('game')} */}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://img.xuewuzhijing.top/mine-tabbar.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://img.xuewuzhijing.top/mine-active2.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="我的"
                            key="mine"
                            selected={this.state.selectedTab === 'mine'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'mine',
                                });
                                this.props.history.push('/mine')
                            }}
                            data-seed="logId1"
                        >
                            {/* {this.renderContent('mine')} */}
                        </TabBar.Item>
                </TabBar>
            </footer>
        )
    }
}

export default withRouter(TabBarCom)