import React from "react";
import "antd/dist/antd.css";
import "./Sider.css";
import { Layout, Menu } from "antd";
import {
    DashboardOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

class MySider extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/siswa">Siswa</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default MySider;