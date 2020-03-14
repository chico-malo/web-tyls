/*
 * @Author: yangyao
 * @Date: 2019-09-30 15:23:31
 * @LastEditors  : yangyao
 * @LastEditTime : 2019-12-30 11:58:20
 * @Description: 首页banner
 */
import '../assets/styles/TYBanner.less'
import * as React from "react";

export default class TYBanner extends React.Component {
  render() {
    const aboutBGI = require("../assets/images/bg_home_main_2.jpg");
    return (
      <div
        className="contaner_home_banner"
        style={{ backgroundImage: `url(${aboutBGI})` }}
      >
        <div className="banner_flow">
          <p className="flow_title">理论成果-《中国律师梦》</p>
          <p className="flow_subtitle">
            甘肃拓原律师事务所主任刘吉颖从事律师职业34年，撰写发表了上百篇文章，其挑选部分发表过的文章编辑成个人文集《中国律师梦》已正式出版发行。
          </p>
          <span className="flow_contact">购书联系电话:0934-8228568</span>
        </div>
      </div>
    );
  }
}
