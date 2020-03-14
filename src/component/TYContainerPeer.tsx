/*
 * @Author: yangyao
 * @Date: 2019-10-10 11:10:07
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-07 23:05:56
 * @Description: 项目中 容器高阶组件
 */
import * as React from "react";
import objectPath from "object-path";
import TYHeader from "../component/TYHeader";
import TYFooter from "../component/TYFooter";
import { menuRouteInfo } from "../constant/route.config";

export default WrappedComponent =>
  class extends React.Component<any, any> {
    componentDidMount() {
      const { pathname } = this.props;
      // 获取当前路由path，跟路由表中的title做对比，统一修改网站title
      const pasthnameString = pathname.substr(1);
      const title = objectPath.get(menuRouteInfo, `${pasthnameString}.title`);
      document.title = title
        ? `${title}-甘肃拓原律师事务所`
        : "甘肃拓原律师事务所【官网】";
    }
    render() {
      return (
        <React.Fragment>
          <TYHeader />
          <WrappedComponent {...this.props} />
          <TYFooter />
        </React.Fragment>
      );
    }
  };
