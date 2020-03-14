/*
 * @Author: yangyao
 * @Date: 2019-09-30 15:25:17
 * @LastEditors: yangyao
 * @LastEditTime: 2020-02-27 15:41:17
 * @Description: 首页 关于我们
 */
import * as React from "react";
import { Row } from "antd";

export default class HomeAbout extends React.Component {
  render() {
    const aboutBGI = require("../../assets/images/bg_home_main_2.jpg");
    return (
      <Row
        className="conatiner_home_about"
        style={{ backgroundImage: `url(${aboutBGI})` }}
      >
        <div className="about_right">
          <p className="right_title">甘肃拓原律师事务所</p>
          <p className="right_subtitle">成立于1996年，是庆阳市首家合伙制律师事务所。</p>
          <p className="right_desc">
            本所坚持“法治、公平、正义”的宗旨，推行“团队优势、专业分工、规范管理”模式，提供“专业、高效、尽责”的服务，追求“协作、进步、共赢”的目标，竭诚为法律需求者提供高品质的法律服务。
          </p>
        </div>
      </Row>
    );
  }
}
