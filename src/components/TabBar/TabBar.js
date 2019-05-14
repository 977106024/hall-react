import React from 'react'
import './TabBar.css'
import { TabBar as TabBarCom } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'game',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageText) {

    }

    render() {
        return (
            <section id="TabBar">
                <TabBarCom
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                        <TabBarCom.Item
                            title="游戏"
                            key="game"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
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
                        </TabBarCom.Item>
                        <TabBarCom.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
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
                        </TabBarCom.Item>
                </TabBarCom>
            </section>
        )
    }
}

export default withRouter(TabBar)