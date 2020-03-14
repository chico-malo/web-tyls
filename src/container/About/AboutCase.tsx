/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 23:21:34
 * @Description: 典型案例
 */
import "../../assets/styles/container_aboutCase.less";

import * as React from "react";
import TYTitle from "../../component/TYTitle";
import TYContainerPeer from "../../component/TYContainerPeer";
import { Row } from "antd";
import { caseConfig } from "../../constant/case.config";

@TYContainerPeer
export default class AboutCase extends React.Component {
  generateCase = config => {
    return config.map((item, index) => {
      const { img, label, url } = item;
      return (
        <a href={url} target="_blank" key={index}>
          <Row
            type="flex"
            justify="center"
            className="case_item"
            align="middle"
          >
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="item_bg"
            />
            <p className="item_title">{label}</p>
            <span className="item_btn">查看详细</span>
          </Row>
        </a>
      );
    });
  };
  render() {
    return (
      <div className="aboutCase_container">
        <TYTitle title="典型案例" subtitle="Typical Case" />
        <Row className="container_case" type="flex">
          {this.generateCase(caseConfig)}
        </Row>
      </div>
    );
  }
}
