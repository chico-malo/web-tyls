/*
 * @Author: yangyao
 * @Date: 2019-10-07 18:16:33
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 23:40:29
 * @Description: 轮播组件
 */
import "../assets/styles/TYslide.less";
import * as React from "react";
import Glide from "@glidejs/glide";
import TYContentTitle, { contentTitleProps } from "./TYContentTitle";
import { TeamListProps } from "../container/Team/config";

export interface TYSlideProps extends contentTitleProps {
  config: Array<TeamListProps>;
}

export default class TYSlide extends React.Component<TYSlideProps, any> {
  componentDidMount() {
    new Glide(".glide", {
      type: "carousel",
      perView: 4,
      focusAt: "center",
      autoplay: 2000,
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount();
  }
  generateSlideItem = (config: Array<TeamListProps>) => {
    return config.map(
      (item: TeamListProps, index: Number): React.ReactNode => {
        const { url, title, subtitle } = item;
        return (
          <li className="glide__slide item_slide" key={index}>
            <div
              className="slide_img"
              style={{ backgroundImage: `url(${url})` }}
            />
            <div className="slide_box_desc">
              {title && <p className="desc_title">{title}</p>}
              {subtitle && <p className="desc">{subtitle}</p>}
            </div>
          </li>
        );
      }
    );
  };

  render() {
    const { config, title, subtitle } = this.props;
    const aboutBGI = require("../assets/images/bg_home_main_2.jpg");
    return (
      <div className="glide contener_homeTeam">
        <div
          className="homeTeam_bgi"
          style={{ backgroundImage: `url(${aboutBGI})` }}
        ></div>
        <TYContentTitle title={title} subtitle={subtitle} />
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">{this.generateSlideItem(config)}</ul>
        </div>
      </div>
    );
  }
}
