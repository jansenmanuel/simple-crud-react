import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Footer } = Layout;

class MyFooter extends React.Component {

    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Simple CRUD React &copy;2020 Created by Jansen Manuel</Footer>
        );
    }
}

export default MyFooter;