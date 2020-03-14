/*
 * @Author: yangyao
 * @Date: 2019-09-30 09:13:04
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 23:06:32
 * @Description: 内容标题组件
 */
import "../assets/styles/contentTitle.less";
import * as React from "react";
import { Row } from "antd";
import { string } from "prop-types";

export interface contentTitleProps {
  title: string; // 标题
  subtitle: string; // 附标题
}

export default class TYContentTitle extends React.Component<contentTitleProps> {
  render() {
    const { title, subtitle } = this.props;
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="container_contentTitle"
      >
        <p className="contentTitle_subtitle">{subtitle}</p>
        <p className="contentTitle_title">{title}</p>
      </Row>
    );
  }
}
