/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors: yangyao
 * @LastEditTime: 2020-02-28 14:35:11
 * @Description: 联系我们
 */
import "../assets/styles/container_contact.less";
import * as React from "react";
import TYContainerPeer from "../component/TYContainerPeer";
import TYTitle from "../component/TYTitle";
import { lang } from "../constant/zh_CN";

@TYContainerPeer
export default class Contact extends React.Component {
  render() {
    const addresssBGI = require("../assets/images/bg_home_address.png");
    return (
      <div className="container_contact">
        <TYTitle title="联系我们" subtitle="contact" />
        <div className="contact_content">
          <div className="content_info">
            <p className="info_title">联系方式</p>
            <p className="info_value">{`地址:${lang.tyls.address}`}</p>
            <p className="info_value">{`邮箱:${lang.tyls.email}`}</p>
            <p className="info_value">{`电话:${lang.tyls.phone}`}</p>
          </div>
          <div
            className="content_address"
            style={{ backgroundImage: `url(${addresssBGI})` }}
          />
        </div>
      </div>
    );
  }
}
