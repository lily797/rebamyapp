import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const changeCollapsed = () => {
        setCollapsed(collapsed);
    };
    return (
        <Header className="site-layout-background" style={{ paddingLeft: 20 }}>
            {collapsed ? (
                <MenuUnfoldOutlined onClick={changeCollapsed} />
            ) : (
                <MenuFoldOutlined onClick={changeCollapsed} />
            )}
        </Header>
    );
}
