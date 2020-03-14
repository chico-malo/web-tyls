/*
 * @Author: yangyao
 * @Date: 2019-10-08 21:02:12
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-05 11:11:21
 * @Description: 联系我们
 */
import * as React from "react";
import { Row } from "antd";
import { lang } from "../../constant/zh_CN";
import TYContentTitle from "../../component/TYContentTitle";

export default class HomeAddress extends React.Component {
  render() {
    const addresssBGI = require("../../assets/images/bg_home_address.png");
    return (
      <div className="container_address">
        <TYContentTitle title="联系我们" subtitle="contact" />
        <Row type="flex">
          <div
            className="address_map"
            style={{ backgroundImage: `url(${addresssBGI})` }}
          />
          <Row className="address_info" type="flex" justify="center">
            <p>地址: {lang.tyls.address}</p>
            <p>邮箱: {lang.tyls.email}</p>
            <p>电话: {lang.tyls.phone}</p>
          </Row>
        </Row>
      </div>
    );
  }
}
