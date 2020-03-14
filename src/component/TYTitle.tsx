/*
 * @Author: yangyao
 * @Date: 2019-10-10 18:35:31
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 23:17:14
 * @Description: 页面头部 的标题组件
 */
import "../assets/styles/tyTitle.less";
import * as React from "react";
import { Row } from "antd";

export interface TYTitleProps {
  title: string;
  subtitle: string;
  bgmSrc: any;
  containerProps: object;
}

export default class TYTitle extends React.Component<TYTitleProps, any> {
  render() {
    const { title, subtitle, bgmSrc, containerProps } = this.props;
    const addresssBGI =
      bgmSrc || require("../assets/images/bg_home_main_1.jpg");

    return (
      <Row
        type="flex"
        align="middle"
        className="contaner_title"
        {...containerProps}
      >
        <div
          className="title_bgi"
          style={{ backgroundImage: `url(${addresssBGI})` }}
        />
        <div className="title_info">
          <p className="title_value">{title}</p>
          <p className="title_dsc">{subtitle}</p>
        </div>
      </Row>
    );
  }
}
