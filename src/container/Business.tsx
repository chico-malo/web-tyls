/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors  : yangyao
 * @LastEditTime : 2019-12-30 12:14:47
 * @Description: 业务范围
 */
import "../assets/styles/container_business.less";
import * as React from "react";
import TYContainerPeer from "../component/TYContainerPeer";
import TYTitle from "../component/TYTitle";
import TYContentTitle from "../component/TYContentTitle";
import TYBusiness from "../component/TYBusiness";

@TYContainerPeer
export default class Business extends React.Component {
  render() {
    const coreBGI1 = require("../assets/images/bg_business_1.png");
    const coreBGI2 = require("../assets/images/bg_business_2.png");
    return (
      <div className="container_business">
        <TYTitle title="业务范围" subtitle="business" />
        <TYBusiness />
      </div>
    );
  }
}
