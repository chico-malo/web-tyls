/*
 * @Author: yangyao
 * @Date: 2019-09-30 15:18:16
 * @LastEditors: yangyao
 * @LastEditTime: 2019-09-30 15:49:31
 * @Description: 律所环境模块
 */
import * as React from "react";
import TYContentTitle from "../../component/TYContentTitle";
import { Row } from "antd";

export default class HomeAmbient extends React.Component {
  generateAmbientItem = config => {
    return config.map((item, index) => {
      const { img, title, desc } = item;
      return (
        <Row
          type="flex"
          className="core_item"
          key={index}
          style={{
            backgroundImage: `url(${img})`
          }}
        >
          <div className="item_flow">
            <p className="flow_title">{title}</p>
            <p className="flow_desc">{desc}</p>
          </div>
        </Row>
      );
    });
  };

  render() {
    const listConfig = [
      {
        img: require("../../assets/images/bg_home_environment_1.jpg"),
        title: "公共办公区",
        desc: "律所环境"
      },
      {
        img: require("../../assets/images/bg_home_environment_2.jpg"),
        title: "茶话区",
        desc: "律所环境"
      },
      {
        img: require("../../assets/images/bg_home_environment_3.jpg"),
        title: "图书区",
        desc: "律所环境"
      },
      {
        img: require("../../assets/images/bg_home_environment_4.jpg"),
        title: "独立办公区",
        desc: "律所环境"
      },
      {
        img: require("../../assets/images/bg_home_environment_5.jpg"),
        title: "办公室",
        desc: "律所环境"
      },
      {
        img: require("../../assets/images/bg_home_environment_6.jpg"),
        title: "办公地址",
        desc: "律所环境"
      }
    ];
    return (
      <div className="contaner_home_environment">
        <TYContentTitle title="律所环境" subtitle="Lawyer Environment" />
        <Row type="flex" justify="center" className="environment_core">
          {this.generateAmbientItem(listConfig)}
        </Row>
      </div>
    );
  }
}
