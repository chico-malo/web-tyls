import "../../assets/styles/container_teamDetail.less";
import React from "react";
import { Row } from "antd";
import objectPath from "object-path";

import TYContainerPeer from "../../component/TYContainerPeer";
import TYTitle from "../../component/TYTitle";
import { teamListConfig } from "./config";

@TYContainerPeer
export default class TeamDetail extends React.Component<any, any> {
  render() {
    const id = objectPath.get(this.props, "params.id");
    if (!id || Number(id) > 11) {
      return null;
    }
    const config = teamListConfig[id];
    const { url, title, subtitle, desc } = config;
    return (
      <div className="teamDetail_container">
        <TYTitle title="拓原团队" subtitle="tuoyuan team" />
        <Row className="teamDetail_content">
          <Row type="flex" className="content_header">
            <div
              className="header_img"
              style={{ backgroundImage: `url(${url})` }}
            />
            <div className="header_info">
              <h3 className="info_title">{title}</h3>
              <p className="info_subtitle">{subtitle}</p>
            </div>
          </Row>
          <p className="content_desc">{desc}</p>
        </Row>
      </div>
    );
  }
}
