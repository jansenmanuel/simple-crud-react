import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import TableSiswa from "./TableSiswa";
const { Content } = Layout;

class Siswa extends React.Component {
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
                <h3>Data Siswa</h3>
                <TableSiswa />
            </Content>
        );
    }
}

export default Siswa;