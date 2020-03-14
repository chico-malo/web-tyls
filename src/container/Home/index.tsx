/*
 * @Author: yangyao
 * @Date: 2019-09-18 10:33:20
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 23:41:48
 * @Description: home
 */
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "../../assets/styles/home.less";

import * as React from "react";
import { Carousel, Row, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import TYHeader from "../../component/TYHeader";
import TYBusiness from "../../component/TYBusiness";
import HomeAmbient from "./HomeAmbient";
import TYBanner from "../../component/TYBanner";
import HomeAbout from "./HomeAbout";
import { teamConfig } from "./HomeTeam";
import HomeAddress from "./HomeAddress";
import TYFooter from "../../component/TYFooter";
import TYSlide from "../../component/TYSlide";
import HomeInfo from "./HomeInfo";
import { teamListConfig } from "../Team/config";

export default class Home extends React.Component {
  // 走马灯ref
  carouselRef;
  generateCarouselItem = config => {
    return config.map((item, index) => {
      const { url, title, desc } = item;
      return (
        <div className="carousel_item" key={index}>
          <div
            className="item_background"
            style={{
              backgroundImage: `url(${url})`
            }}
          />
          <Row type="flex" align="top" justify="end" className="item_first">
            <h3 className="first_title">{title}</h3>
            <p className="first_desc fadeInLeft">{desc}</p>
          </Row>
        </div>
      );
    });
  };

  render() {
    const carouseConfig = [
      {
        url: require("../../assets/images/bg_home_main_1.jpg"),
        title: "放眼世界 胸怀祖国 开拓法治原野",
        desc: "成立二十余年"
      },
      {
        url: require("../../assets/images/bg_home_main_2.jpg"),
        title: "甘肃拓原律师事务所",
        desc: "律所环境"
      },
      {
        url: require("../../assets/images/bg_home_main_3.jpg"),
        title: "甘肃拓原律师事务所",
        desc: "律所环境"
      },
      {
        url: require("../../assets/images/bg_home_main_4.jpg"),
        title: "甘肃拓原律师事务所",
        desc: "团队风貌"
      }
    ];
    return (
      <div className="home_container">
        <Row className="container_group">
          <TYHeader />
          <Button
            type="primary"
            shape="round"
            icon={<LeftOutlined />}
            size="large"
            className="group_carousel_pre"
            onClick={() => this.carouselRef.prev()}
          />
          <div className="group_carousel_box">
            <Carousel
              className="group_carousel"
              autoplay
              ref={node => (this.carouselRef = node)}
            >
              {this.generateCarouselItem(carouseConfig)}
            </Carousel>
          </div>
          <Button
            type="primary"
            shape="round"
            icon={<RightOutlined />}
            size="large"
            className="group_carousel_next"
            onClick={() => this.carouselRef.next()}
          />
        </Row>
        <HomeAbout />
        <TYBusiness />
        <TYBanner />
        <HomeAmbient />
        <TYSlide
          config={teamListConfig}
          title="我们的团队"
          subtitle="Partners at tuoyuan"
        />
        <HomeInfo />
        <HomeAddress />
        <TYFooter />
      </div>
    );
  }
}
