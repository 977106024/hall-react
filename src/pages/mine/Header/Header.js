import React from 'react'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <header>
                <div className="user-info">
                    <img src="https://thirdwx.qlogo.cn/mmopen/sR7PHf3Vmpibbwo1MtwxBlwfaKtLnpU542wazDx2hkPuv2UduhSLTeiaj4b64zr9GpQhshAHib7l1JBcVfCsERfakbywUczyVkX/132" alt="头像"/>
                    <div className="name-id">
                        <p className="name">柏宏</p>
                        <p className="id">ID:121321</p>
                    </div>
                </div>
                <div className="chat">
                    xxx
                </div>
            </header>
        )
    }
}