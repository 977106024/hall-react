import React from 'react'
import './Carousel.css'
import { Carousel} from 'antd-mobile';


export default class CarouselCom extends React.Component {
    state = {
        data: ['1', '2', '3','4'],
        format:['jpg','gif','jpg','gif'],
        imgHeight: 176,
      }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2', '3','4'],
          });
        }, 100);
      }

    render() {
        return (
            <section id="Carousel">
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log()}
                    afterChange={index => console.log()}
                    autoplay={true}
                >
                    {this.state.data.map((val,i) => (
                        <a
                            key={i}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://img.xuewuzhijing.top/Carousel/${val}.${this.state.format[i]}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </section>
        )
    }
}
