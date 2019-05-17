import React from 'react'

export default class NavList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="NavList">
                <ul>
                    <li>
                        <svg className="icon svg-card" aria-hidden="true">
                            <use xlinkHref="#icon-idCard"></use>
                        </svg>
                        <div className="nav-item">
                            <p>我的折扣</p>
                            <svg className="icon svg-arrow" aria-hidden="true">
                                <use xlinkHref="#icon-right"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <svg className="icon svg-card" aria-hidden="true">
                            <use xlinkHref="#icon-idCard"></use>
                        </svg>
                        <div className="nav-item">
                            <p>我的折扣</p>
                            <svg className="icon svg-arrow" aria-hidden="true">
                                <use xlinkHref="#icon-right"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <svg className="icon svg-card" aria-hidden="true">
                            <use xlinkHref="#icon-idCard"></use>
                        </svg>
                        <div className="nav-item">
                            <p>我的折扣</p>
                            <svg className="icon svg-arrow" aria-hidden="true">
                                <use xlinkHref="#icon-right"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <svg className="icon svg-card" aria-hidden="true">
                            <use xlinkHref="#icon-idCard"></use>
                        </svg>
                        <div className="nav-item">
                            <p>我的折扣</p>
                            <svg className="icon svg-arrow" aria-hidden="true">
                                <use xlinkHref="#icon-right"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <svg className="icon svg-card" aria-hidden="true">
                            <use xlinkHref="#icon-idCard"></use>
                        </svg>
                        <div className="nav-item">
                            <p>我的折扣</p>
                            <svg className="icon svg-arrow" aria-hidden="true">
                                <use xlinkHref="#icon-right"></use>
                            </svg>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}