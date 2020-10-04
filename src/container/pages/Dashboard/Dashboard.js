import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
import MyCarousel from "../../../components/Carousel/Carousel";
import MyCalendar from "../../../components/Calendar/Calendar";
const { Content } = Layout;

class Dashboard extends React.Component {
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280
                }}
            >
                <h3>Dashboard</h3>
                <div className="row">
                    <div className="col-6">
                        <h5>Carousel</h5>
                        <MyCarousel />
                    </div>
                    <div className="col-6">
                        <h5>Calendar</h5>
                        <MyCalendar />
                    </div>
                </div>
            </Content>
        );
    }
}

export default Dashboard;