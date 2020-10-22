/*
 * @Author: yangyao
 * @Date: 2019-10-09 20:47:59
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-11 10:31:46
 * @Description: 页脚组件
 */
import "../assets/styles/footer.less";
import * as React from "react";
import {Row} from "antd";
import {lang} from "../constant/zh_CN";
import {menuRouteInfo} from "../constant/route.config";
import {caseConfig} from "../constant/case.config";

export interface MenuItem {
    label: string;
    url: string;
}

export interface FooterMenuProps {
    title: string;
    isRouteMenu?: boolean;
    menus: Array<MenuItem>;
}

export default class TYFooter extends React.Component<any, any> {
    /**
     * @description: 新窗口打开窗口
     * @param {type} url
     * @return: null
     */
    onOpenWindow = (url: string) => {
        const {origin} = location;
        window.open(`${origin}/#${url}`, "_blank");
    };
    /**
     * @description: 渲染页脚菜单
     * @param {type}
     * @return:
     */
    generateFooterMenu = (config: Array<FooterMenuProps>) => {
        return config.map((item: FooterMenuProps, index: Number) => {
            const {title, menus, isRouteMenu} = item;
            return (
                <Row className="menu_item" key={index}>
                    <p className="item_title">{title}</p>
                    <Row className="item_column">
                        {menus.map((menu, mIndex) => {
                            const {label, url} = menu;
                            // 如果是路由菜单
                            if (isRouteMenu) {
                                return (
                                    <span
                                        className="column_label"
                                        key={mIndex}
                                        onClick={() => this.onOpenWindow(url)}
                                    >
                    {label}
                  </span>
                                );
                            }
                            return (
                                <a
                                    href={url}
                                    target="blank"
                                    className="column_label"
                                    key={mIndex}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </Row>
                </Row>
            );
        });
    };

    render() {
        const footerBGI = require("../assets/images/footer_QR_code.jpg");
        const logoBGI = require("../assets/images/logo.png");
        const iconBeian = require("../assets/images/icon-beian.png");

        // 配置
        const footerMenuConfig: Array<FooterMenuProps> = [
            {
                title: "业务范围",
                menus: caseConfig
            },
            {
                title: "甘肃拓原律师事务所",
                isRouteMenu: true,
                menus: [
                    {
                        label: "关于我们",
                        url: menuRouteInfo.about.path
                    },
                    {
                        label: "理论研究",
                        url: menuRouteInfo.aboutTheoretical.path
                    },
                    {
                        label: "典型案例",
                        url: menuRouteInfo.aboutCase.path
                    },
                    {
                        label: "业务范围",
                        url: menuRouteInfo.business.path
                    },
                    {
                        label: "拓原团队",
                        url: menuRouteInfo.team.path
                    },
                    {
                        label: "招贤纳士",
                        url: menuRouteInfo.teamJoin.path
                    },
                    {
                        label: "拓原之声",
                        url: menuRouteInfo.info.path
                    }
                ]
            }
        ];
        return (
            <div className="contaner_footer">
                <Row className="footer_menu" type="flex" justify="center">
                    <div className="footer_groud">
                        <Row className="groud_company" align="middle" type="flex">
                            <img src={logoBGI} className="company_logo"/>
                            <p className="company_name">{lang.tyls.title}</p>
                        </Row>
                        <p className="ground_desc">
                            成立于1996年，是庆阳市首家 合伙制律师事务所
                        </p>
                    </div>
                    {this.generateFooterMenu(footerMenuConfig)}
                    <div className="footer_qrCode">
                        <img src={footerBGI} className="qrCode"/>
                        <p className="qrCode_desc">关注拓原微信公众号</p>
                    </div>
                </Row>
                <Row
                    type="flex"
                    align="middle"
                    justify="center"
                    className="footer_copyright"
                >
                    <p>
                        2015年 甘肃拓原律师事务所版权所有© 陇ICP备19001287号
                    </p>
                    <p>
                        <img src={iconBeian} className="beian_logo"/>
                        甘公网安备 62100202000479号
                    </p>
                </Row>
            </div>
        );
    }
}
