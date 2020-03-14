/*
 * @Author: yangyao
 * @Date: 2020-03-02 13:39:43
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-12 18:43:49
 * @Description: 首页的拓原之声
 */
import "../../assets/styles/home_info.less";
import React from "react";
import { Row } from "antd";
import TYContentTitle from "../../component/TYContentTitle";
import { updateGhostApi, requeryGhost } from "../../services/ghost";
import { onGotoDetail } from "../Info";
import { URL } from "../../constant/url.config";

const tagsKey = [
  "tuo-yuan-lu-shi-dang-jian",
  "tuo-yuan-lu-shi-dong-tai",
  "tuo-yuan-lu-shi-wen-yuan",
  "tuo-yuan-lu-shi-pu-fa",
  "tuo-yuan-lu-shi-an-li"
];

// tags的默认key
const home_show_tags: Array<object> = [
  {
    [tagsKey[0]]: "拓原律师党建"
  },
  {
    [tagsKey[1]]: "拓原律师动态"
  },
  {
    [tagsKey[2]]: "拓原律师文苑"
  },
  {
    [tagsKey[3]]: "拓原律师普法"
  },
  {
    [tagsKey[4]]: "拓原律师案例"
  }
];

class HomeInfo extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataSource: {},
      processing: true
    };
  }
  UNSAFE_componentWillMount() {
    this.handleSearch();
  }
  /**
   * @description: 检查tag是否符合要求
   * @param {type} tags:后台文章的标签集合，checkKey：当前被检查的key
   * @return: boolean
   */
  isCheckTags = (tags: Array<any>, checkKey: string) => {
    return tags.some(item => item.slug === checkKey);
  };
  /**
   * @description: search
   * @param {type} null
   * @return: null
   */
  handleSearch = () => {
    const req = requeryGhost(URL.content_api);
    req.posts
      .browse({ limit: "all", include: "tags" })
      .then(dataSource => {
        const default_data = {};
        // 添加默认key
        home_show_tags.forEach(
          showTagItem => (default_data[Object.keys(showTagItem)[0]] = [])
        );
        // 合并值
        dataSource.forEach(item => {
          home_show_tags.forEach(showTagItem => {
            const checkTagKey = Object.keys(showTagItem)[0];
            // 文章长度 拓原动态的长度不一样
            const maxLength = checkTagKey === tagsKey[1] ? 13 : 5;
            // 校验指定值,并且长度不能超过5条
            if (
              this.isCheckTags(item.tags, checkTagKey) &&
              default_data[checkTagKey].length < maxLength
            ) {
              default_data[checkTagKey].push(item);
            }
          });
        });
        this.setState({ dataSource: default_data });
      })
      .catch(err => {
        //  请求失败，更新全局地址
        updateGhostApi();
        console.error(err);
        this.setState({ processing: false });
        this.handleSearch();
      });
  };
  /**
   * @description: 渲染item
   * @param {type} config：配置文件,tags默认key的值对键
   * @return: React.Node
   */
  renderHomeInfoItem = (config: Array<any>) => {
    const default_content = [];
    Object.keys(config).map((posts: string, index) => {
      const tagsTitle = home_show_tags[index][posts];
      const postItem = config[posts];
      // 扩展样式，动态样式追加高度，其他第二排减少上边距
      const isDongtai: boolean = posts === tagsKey[1];
      const isTwoRow: boolean = posts === tagsKey[3] || posts === tagsKey[4];
      let extensionStyles: object = {};
      if (isDongtai) {
        extensionStyles = { height: 440 };
      } else if (isTwoRow) {
        extensionStyles = { marginTop: -230 };
      }
      default_content.push(
        <Row
          className="list_item"
          key={index}
          type="flex"
          align="middle"
          style={extensionStyles}
        >
          <h1 className="item_title">{tagsTitle}</h1>
          {postItem.map((post, postIdx) => {
            const { title, slug } = post;
            return (
              <p
                key={postIdx}
                className="subtitle item_desc"
                onClick={() => onGotoDetail(slug)}
              >
                {title}
              </p>
            );
          })}
        </Row>
      );
    });
    return default_content;
  };
  render() {
    const { dataSource } = this.state;
    return (
      <div className="container_homeInfo">
        <TYContentTitle title="拓原之声" subtitle="Voice of Tuoyuan" />
        <Row type="flex" className="homeInfo_list" justify="space-between">
          {this.renderHomeInfoItem(dataSource)}
        </Row>
      </div>
    );
  }
}

export default HomeInfo;
