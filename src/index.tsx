/**
 * @author yangyao
 * @date date
 * @Description:
 */
import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import "babel-polyfill";
import "animate.css";
import "normalize.css";
import "antd/dist/antd.css";
import "./assets/styles/theme.less";

import React from "react";
import ReactDOM from "react-dom";
import Home from "./container/Home";
import { HashRouter, Route } from "react-keeper";
import { BackTop } from "antd";
import {
  routeConfig,
  RouteConfigProps,
  menuRouteInfo
} from "./constant/route.config";

const application = document.getElementById("application");

class App extends React.Component {
  /**
   * @description: 生成路由 
   * @param {type} config:配置
   * @return: React.node
   */
  generateRouteItem = config => {
    return config.map((item: RouteConfigProps, index) => {
      const { component, path, children } = item;
      if (children) {
        return this.generateRouteItem(children);
      }
      return <Route component={component} path={path} key={index} />;
    });
  };
  render() {
    return (
      <HashRouter>
        <div className="application_container">
          <BackTop />
          <Route component={Home} path={menuRouteInfo.home.path} index cache />
          {this.generateRouteItem(routeConfig)}
          <Route miss component={Home} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, application);
