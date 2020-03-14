/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-05 11:12:33
 * @Description: 理论研究
 */
import "../../assets/styles/container_aboutTheoretical.less";
import * as React from "react";
import TYContainerPeer from "../../component/TYContainerPeer";
import TYTitle from "../../component/TYTitle";
import { Row } from "antd";
import TYBanner from "../../component/TYBanner";

@TYContainerPeer
export default class AboutTheoretical extends React.Component {
  render() {
    const showBGI = require("../../assets/images/bg_about_theoretical_1.jpg");
    const bookBGI = require("../../assets/images/bg_about_theoretical_2.png");
    return (
      <div className="container_about_theoretical">
        <TYTitle title="理论研究" subtitle="theoretical research" />
        <div className="about_theoretical_content">
          <p className="info_title">理论成果 -- 《中国律师梦》</p>
          <p className="info_desc">
            甘肃拓原律师事务所主任刘吉颖从事律师职业34年，其个人文集《中国律师梦》已正式出版发行
          </p>
          <img src={showBGI} className="show_img" />
          <img src={bookBGI} className="show_img" />
        </div>
        <TYBanner />
      </div>
    );
  }
}
