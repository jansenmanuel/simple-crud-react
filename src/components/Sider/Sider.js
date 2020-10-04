import React from "react";
import "antd/dist/antd.css";
import "./Sider.css";
import { Layout, Menu } from "antd";
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
                    <Menu.Item key="1">
                        <Link to="/">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fa fa-tachometer" />
                                </div>
                                <div className="col-10">
                                    <p>Dashboard</p>
                                </div>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" >
                        <Link to="/siswa">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fa fa-user" />
                                </div>
                                <div className="col-10">
                                    <p>Siswa</p>
                                </div>
                            </div>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default MySider;