import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd'

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <img src="http://placeimg.com/700/350/tech" alt="" />
                </div>
                <div>
                    <img src="https://picsum.photos/700/350" alt="" />
                </div>
                <div>
                    <img src="http://placeimg.com/700/350/tech" alt="" />
                </div>
                <div>
                    <img src="https://picsum.photos/700/350" alt="" />
                </div>
            </Carousel>
        )
    }
}
