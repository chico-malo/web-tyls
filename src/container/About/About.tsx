/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-05 10:05:30
 * @Description: 关于我们
 */
import "../../assets/styles/container_about.less";
import * as React from "react";
import { Row } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import TYContainerPeer from "../../component/TYContainerPeer";
import TYTitle from "../../component/TYTitle";
import { lang } from "../../constant/zh_CN";

@TYContainerPeer
export default class About extends React.Component {
  generateTipItem = config => {
    return config.map((item, index) => {
      return (
        <Row
          type="flex"
          align="middle"
          justify="center"
          key={index}
          className="idea_item"
        >
          <BulbOutlined className="item_icon" />
          <p className="item_title">{item.title}</p>
          <p className="item_subtitle">{item.subtitle}</p>
        </Row>
      );
    });
  };
  render() {
    const aboutBGI = require("../../assets/images/logo.png");
    const ideaBGI = require("../../assets/images/bg_home_environment_1.jpg");
    const tipsConfig = [
      {
        title: "我们的理念",
        subtitle: "法律至上    维护法律尊严"
      },
      {
        title: "我们的原则",
        subtitle: "受人之托    忠人之事"
      },
      {
        title: "我们的宗旨",
        subtitle: "诚信为本     专业高效"
      }
    ];
    return (
      <div className="container_about">
        <TYTitle title="关于我们" subtitle="about" />
        <div className="about_content">
          <div className="content_guide">
            <h3 className="guide_title">关于我们</h3>
            <p className="guide_desc">
              甘肃拓原律师事务所成立于1996年，是庆阳市首家合伙制律师事务所。
              本所坚持“法治、公平、正义”的宗旨，推行“团队优势、专业分工、规范管理”模式，提供“专业、高效、尽责”的服务，追求“协作、进步、共赢”的目标，竭诚为法律需求者提供高品质的法律服务。
            </p>
          </div>
          <Row type="flex" className="content_manifesto">
            <img src={aboutBGI} className="manifesto_img" />
            <div className="manifesto_info">
              <h3 className="info_title">{lang.tyls.title}</h3>
              <p className="info_desc">
                本所以法律顾问、民商事案件代理、刑事辩护、金融保险和房地产法律事务为专业特色，同时承办各类非诉讼业务，有充足的专业人才储备和大量的法律实务经验。成功办理过在省市范围内许多有重大影响的大案、要案及疑难案件，有效地维护了当事人的合法权益和社会的公平正义，受到社会各界的广泛好评。
                本所律师专业精湛、人才济济。
              </p>
              <p className="info_desc">
                律所创始人刘吉颖具有30多年的执业经验，法律造诣深厚，社会影响广泛，现担任甘肃省律师协会副会长，甘肃拓原律师事务所主任。本所拥有一批80、90后的年轻律师，他们学有所专，业有所长，品学兼优，锐意进取，是这个律师团队中的重要元素和未来之星。
                甘肃拓原律师事务所全体律师，将用集体的智慧、知识和经验，为推进国家法治建设，为维护当事人的合法权益坚持不懈的努力！
              </p>
            </div>
          </Row>
        </div>
        <Row
          type="flex"
          className="container_about_idea"
          justify="space-around"
          style={{ backgroundImage: `url(${ideaBGI})` }}
        >
          {this.generateTipItem(tipsConfig)}
        </Row>
      </div>
    );
  }
}
