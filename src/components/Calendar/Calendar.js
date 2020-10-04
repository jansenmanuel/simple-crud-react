import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Calendar } from 'antd'

export default class MyCalendar extends Component {
    render() {
        function onPanelChange(value, mode) {
            console.log(value, mode);
        }
        return (
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
        )
    }
}
