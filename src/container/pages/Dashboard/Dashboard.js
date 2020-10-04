import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout } from "antd";
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
                Content
            </Content>
        );
    }
}

export default Dashboard;