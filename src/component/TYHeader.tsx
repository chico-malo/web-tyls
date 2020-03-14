/*
 * @Author: yangyao
 * @Date: 2019-09-29 11:06:15
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-12 18:39:21
 * @Description: menu
 */
import "../assets/styles/header.less";
import * as React from "react";
import { Menu, Row } from "antd";
import { routeConfig, RouteConfigProps } from "../constant/route.config";
import { Control } from "react-keeper";
import { lang } from "../constant/zh_CN";

const { SubMenu } = Menu;

export default class TYHeader extends React.Component<any, any> {
  state = {
    current: "mail"
  };

  handleClick = e => {
    Control.go(e.key);
    this.setState({
      current: e.key
    });
  };
  /**
   * @description: 渲染菜单
   * @param {type}
   * @return:
   */
  generateMenuItem = (config: Array<RouteConfigProps>) => {
    return config.map((menu: RouteConfigProps, index) => {
      const { path, title, children, isMenu } = menu;
      // 只渲染菜单路由，非菜单路由不渲染
      if (!isMenu) {
        return;
      }
      // 如果存在子集
      if (children) {
        return (
          <SubMenu
            key={index}
            title={<span className="menu_title">{title}</span>}
          >
            {this.generateMenuItem(children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={path} className="menu_title">
          {title}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="container_header">
        <Row type="flex" className="header_nav">
          <p>{`地址：${lang.tyls.address}`}</p>
          <p>{`电话：${lang.tyls.phone}`}</p>
          <p>{`邮箱：${lang.tyls.email}`}</p>
        </Row>
        <Row type="flex" justify="space-between">
          <Row type="flex" align="middle">
            <img
              className="header_logo"
              src={require("../assets/images/logo.png")}
            />
            <span className="header_name">甘肃拓原律师事务所</span>
          </Row>

          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
            className="header_menu"
          >
            {this.generateMenuItem(routeConfig)}
          </Menu>
        </Row>
      </div>
    );
  }
}
