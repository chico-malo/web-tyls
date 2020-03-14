/*
 * @Author: yangyao
 * @Date: 2019-10-09 21:43:49
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-11 10:24:24
 * @Description: 拓原之声
 */
import "../assets/styles/container_info.less";
import * as React from "react";
import objectPath from "object-path";
import { Row, Pagination, Spin } from "antd";
import TYContainerPeer from "../component/TYContainerPeer";
import TYTitle from "../component/TYTitle";
import { transformNorm } from "../utils/timer";
import { updateGhostApi, requeryGhost } from "../services/ghost";
import HomeInfo from "./Home/HomeInfo";
import { URL } from "../constant/url.config";

// 跳转到文章
export const onGotoDetail = id => {
  window.open(`${URL.content}/${id}`, "_blank");
};

@TYContainerPeer
export default class Info extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      processing: true,
      dataSource: [],
      pagination: { total: 1 }
    };
  }
  UNSAFE_componentWillMount() {
    this.handleSearch();
  }
  /**
   * @description: 搜索文章
   * @param {type} null
   * @return: null
   */
  handleSearch = (page = 1) => {
    const req = requeryGhost(URL.content_api);
    // fetch 5 posts, including related tags and authors
    req.posts
      .browse({ limit: 5, page })
      .then(posts => {
        let dataSource = [];
        posts.forEach(item => {
          dataSource.push(item);
        });
        // 获取最新的分页信息
        let pagination = objectPath.get(posts, "meta.pagination") || {
          total: 1
        };
        this.setState({ dataSource, processing: false, pagination });
      })
      .catch(err => {
        updateGhostApi();
        console.error(err);
        this.setState({ processing: false });
        this.handleSearch();
      });
  };

  generateInfoItem = config => {
    return config.map((item, index) => {
      const { feature_image, title, excerpt, slug, updated_at } = item;
      // 手动截取文章封面，截取掉地址前缀
      if (!feature_image) {
        console.error("获取ghost文章图片地址错误");
      }
      return (
        <Row
          justify="center"
          key={index}
          className="item_box"
          onClick={() => onGotoDetail(slug)}
        >
          <div
            className="item_img"
            style={{ backgroundImage: `url(${feature_image})` }}
          />
          <div className="item_box_info">
            <h3 className="info_title">{title}</h3>
            <p className="info_desc">{excerpt}</p>
            <p>发布时间： {transformNorm(updated_at)}</p>
          </div>
        </Row>
      );
    });
  };
  render() {
    const {
      dataSource,
      pagination: { total },
      processing
    } = this.state;
    return (
      <div className="container_info">
        <TYTitle title="拓原之声" subtitle="Voice of Tuoyuan" />
        <Spin spinning={processing}>
          <HomeInfo />
          <Row type="flex" justify="center" className="info_content">
            {this.generateInfoItem(dataSource)}

            <Row type="flex" justify="center" style={{ marginTop: 100 }}>
              <Pagination
                defaultCurrent={1}
                total={total}
                pageSize={5}
                onChange={this.handleSearch}
              />
            </Row>
          </Row>
        </Spin>
      </div>
    );
  }
}
