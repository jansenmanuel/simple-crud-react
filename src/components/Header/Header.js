import React, { Component } from "react";
import "antd/dist/antd.css";
import "./Header.css";
import { Layout, Modal } from "antd";
import {
    InfoCircleOutlined
} from "@ant-design/icons";

const { Header } = Layout;

class MyHeader extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <InfoCircleOutlined onClick={this.showModal} className="float-right mt-4 ml-1 mr-3" style={{ fontSize: "18px" }} />
                <div className="float-right">
                    <p>Welcome, <b>Jansen Manuel</b></p>
                </div>
                <Modal
                    title="Info"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        This is My Mini Project<br />
                        CRUD ReactJS with JSON Server<br />
                        UI with Ant Design
                    </div>
                </Modal>
            </Header>
        );
    }
}

export default MyHeader;