/*
 * @Author: yangyao
 * @Date: 2019-09-30 14:18:27
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 22:59:57
 * @Description: 核心业务
 */
import "../assets/styles/business.less";
import * as React from "react";
import { Row } from "antd";
import {
  TeamOutlined,
  BgColorsOutlined,
  PieChartOutlined,
  BankOutlined,
  FundViewOutlined,
  PayCircleOutlined
} from "@ant-design/icons";
import TYContentTitle from "./TYContentTitle";

export interface TYBusinessConfig {
  Icon: any;
  title: string;
  desc: string;
}

export default class TYBusiness extends React.Component {
  generateBusinessItem = (config: Array<TYBusinessConfig>) => {
    return config.map((item: TYBusinessConfig, index) => {
      const { title, desc, Icon } = item;
      return (
        <div className="core_item" key={index}>
          {Icon}
          <p className="item_title">{title}</p>
          <p className="item_desc">{desc}</p>
        </div>
      );
    });
  };

  render() {
    // config
    const businessConfig: Array<TYBusinessConfig> = [
      {
        Icon: <TeamOutlined className="item_icon" />,
        title: "法律顾问领域",
        desc:
          "依法接受政府机关、公司企业、事业单位、其他组织和公民的聘请，为聘请方提供多方面的法律服务"
      },
      {
        Icon: <BgColorsOutlined className="item_icon" />,
        title: "刑事领域",
        desc:
          "提供法律咨询，代理申诉、控告、申请取保候审，担任辩护人，代理刑事案件的上诉、申诉、假释、减刑等法律事务"
      },
      {
        Icon: <PieChartOutlined className="item_icon" />,
        title: "民商事领域",
        desc:
          "依法接受聘请，承办的业务包括侵权损害赔偿法律业务，婚姻家庭、继承法律业务，劳动争议法律业务，知识产权法律业务，合同纠纷诉讼业务，公司法、股权纠纷诉讼业务等"
      },
      {
        Icon: <BankOutlined className="item_icon" />,
        title: "银行与金融",
        desc:
          "依法接受聘请，在商业银行、保险、信托、基金及资产管理、债券及资产证券化、融资租赁、政府与社会资本合作（PPP）及金融科技等领域提供法律服务"
      },
      {
        Icon: <FundViewOutlined className="item_icon" />,
        title: "行政领域",
        desc:
          "依法接受聘请，在行政案件的听证，复议，诉讼等与行政行为相关的法律事务中提供法律服务"
      },
      {
        Icon: <PayCircleOutlined className="item_icon" />,
        title: "非讼领域",
        desc:
          "依法提供咨询、代书服务、专项法律服务和法律顾问服务及其他法律服务等"
      }
    ];
    return (
      <div className="container_TYbusiness">
        <TYContentTitle title="业务核心" subtitle="Law Services" />
        <Row className="business_core" type="flex" justify="center">
          {this.generateBusinessItem(businessConfig)}
        </Row>
      </div>
    );
  }
}
