/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 21:56:48
 * @Description: 拓原团队
 */
import "../../assets/styles/container_team.less";
import * as React from "react";
import TYContainerPeer from "../../component/TYContainerPeer";
import TYTitle from "../../component/TYTitle";
import { Row } from "antd";
import { teamListConfig } from "./config";
import { Link } from "react-keeper";

@TYContainerPeer
export default class Team extends React.Component<any, any> {
  generateTeamItem = config => {
    return config.map((item, index) => {
      const { title, subtitle, desc, url } = item;
      // 图片
      const imgElement = (
        <div className="item_img" style={{ backgroundImage: `url(${url})` }} />
      );
      // 信息
      const infoElement = (
        <div className="item_info">
          <h3 className="info_title">{title}</h3>
          <p className="info_subtitle">{subtitle}</p>
          <span className="info_btn_home">查看主页</span>
        </div>
      );
      return (
        <Link key={index} to={`/team-detail/${index}`}>
          <Row type="flex" className="item_box">
            {imgElement}
            {infoElement}
          </Row>
        </Link>
      );
    });
  };
  render() {
    return (
      <div className="container_team">
        <TYTitle title="拓原团队" subtitle="tuoyuan team" />
        <Row className="team_content" type="flex" justify="space-around">
          {this.generateTeamItem(teamListConfig)}
        </Row>
      </div>
    );
  }
}
