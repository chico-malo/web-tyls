import { ReactNode } from "react";
import Home from "../container/Home";
import About from "../container/About/About";
import AboutTheoretical from "../container/About/AboutTheoretical";
import AboutCase from "../container/About/AboutCase";
import Business from "../container/Business";
import Team from "../container/Team/Team";
import TeamJoin from "../container/Team/TeamJoin";
import Info from "../container/Info";
import Contact from "../container/Contact";
import TeamDetail from "../container/Team/TeamDetail";

/*
 * @Author: yangyao
 * @Date: 2019-09-21 19:24:28
 * @LastEditors: yangyao
 * @LastEditTime: 2020-02-28 17:30:08
 * @Description: 路由配置
 */
export interface RouteConfigProps {
  path: string; // 路由
  title: string; // 网站title
  component?: any; // 容器
  children?: Array<RouteConfigProps>;
  isMenu?: boolean; // 是否是菜单的路由
}

// 纯粹只配置的路由表
export const menuRouteInfo = {
  home: {
    path: "/",
    isMenu: true,
    title: "首页"
  },
  about: {
    path: "/about",
    isMenu: true,
    title: "关于我们"
  },
  aboutTheoretical: {
    path: "/about-heoretical",
    isMenu: true,
    title: "理论研究"
  },
  aboutCase: {
    path: "/about-case",
    isMenu: true,
    title: "典型案例"
  },
  business: {
    path: "/business",
    isMenu: true,
    title: "业务范围"
  },
  team: {
    path: "/team",
    isMenu: true,
    title: "拓原团队"
  },
  teamJoin: {
    path: "/teamJoin",
    isMenu: true,
    title: "招贤纳士"
  },
  info: {
    path: "/info",
    isMenu: true,
    title: "拓原之声"
  },
  contact: {
    path: "/contact",
    isMenu: true,
    title: "联系我们"
  }
};

const routeInfo = [
  {
    path: "/team-detail/:id",
    title: "拓原团队",
    component: TeamDetail
  }
];

// 有上下级包含关系的路由配置
export const routeConfig: Array<RouteConfigProps> = [
  {
    ...menuRouteInfo.home,
    component: Home
  },
  {
    ...menuRouteInfo.about,
    children: [
      {
        ...menuRouteInfo.about,
        component: About
      },
      {
        ...menuRouteInfo.aboutTheoretical,
        component: AboutTheoretical
      },
      {
        ...menuRouteInfo.aboutCase,
        component: AboutCase
      }
    ]
  },
  {
    ...menuRouteInfo.business,
    component: Business
  },
  {
    ...menuRouteInfo.team,
    children: [
      {
        ...menuRouteInfo.team,
        component: Team
      },
      {
        ...menuRouteInfo.teamJoin,
        component: TeamJoin
      }
    ]
  },
  {
    ...menuRouteInfo.info,
    component: Info
  },
  {
    ...menuRouteInfo.contact,
    component: Contact
  },
  ...routeInfo
];
