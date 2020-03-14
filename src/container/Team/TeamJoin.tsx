/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-05 11:14:04
 * @Description: 拓原 招贤纳士
 */
import "../../assets/styles/container_teamJoin.less";
import * as React from "react";
import { Row } from "antd";

import TYContainerPeer from "../../component/TYContainerPeer";
import TYTitle from "../../component/TYTitle";
import { lang } from "../../constant/zh_CN";

@TYContainerPeer
export default class TeamJoin extends React.Component {
  generateJoinItem = config => {
    return config.map((item, index) => {
      const { title, time, info } = item;
      return (
        <div className="item_box" key={index}>
          <p className="item_title">{title}</p>
          <Row className="item_info" type="flex" justify="space-between">
            <span className="item_subtitle info_item">
              工作地点:甘肃省庆阳市
            </span>
            <span className="item_subtitle info_item">{`发布时间: ${time}`}</span>
            <span className="item_subtitle info_item">工作待遇：面议</span>
            <span className="item_subtitle info_item">
              联系电话：{lang.tyls.phone}
            </span>
            <span className="item_subtitle info_item">
              投递邮箱：{lang.tyls.email}
            </span>
          </Row>
          <p className="item_subtitle">岗位要求:</p>
          {info.map((value, infoIdx) => (
            <p className="item_subtitle" key={infoIdx}>
              {value}
            </p>
          ))}
        </div>
      );
    });
  };
  render() {
    const joinItem = [
      {
        title: "招聘执业律师",
        time: "2020.3",
        info: [
          "1、全日制大学法律专业本科及以上学历。",
          "2、通过国家统一法律职业资格考试，持有律师执业证A证。",
          "3、有志长期从事律师法律服务工作，具有高度责任心、工作细致、认真、严谨。",
          "4、认同本所文化理念，热爱律师行业，遵纪守法。"
        ]
      }
    ];
    const footerBGI = require("../../assets/images/footer_QR_code.jpg");
    const team_joinBGI = require("../../assets/images/bg_team_join.jpg");
    return (
      <div className="container_teamJoin">
        <TYTitle
          title="招贤纳士"
          subtitle="join us"
          bgmSrc={team_joinBGI}
          containerProps={{ style: { height: 500 } }}
        />
        <Row className="teamJoin_content" type="flex">
          <div className="content_left">{this.generateJoinItem(joinItem)}</div>
          <Row className="content_right" type="flex" align="middle">
            <img src={footerBGI} className="right_qrCode" />
            <p className="right_desc">关注拓原微信公众号</p>
            <p className="right_desc">在线咨询工作人员</p>
          </Row>
        </Row>
      </div>
    );
  }
}
