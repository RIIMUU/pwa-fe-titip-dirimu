import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/login">Login</Link>
        </Menu.Item>
        {/* Tambahkan tautan lain sesuai kebutuhan */}
        <Menu.Item key="4">
          <Link to="/super-admin">Super Admin</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
