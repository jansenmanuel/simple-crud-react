import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./Home.css";
import MySider from "../../components/Sider/Sider";
import MyHeader from "../../components/Header/Header";
import MyFooter from "../../components/Footer/Footer";
import Dashboard from "../pages/Dashboard/Dashboard";
import Siswa from "../pages/Siswa/Siswa";

export default class Home extends Component {
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: "100vh" }}>
                    <MySider />
                    <Layout className="site-layout">
                        <MyHeader />
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/siswa" exact component={Siswa} />
                        <MyFooter />
                    </Layout>
                </Layout>
            </Router>
        )
    }
}
