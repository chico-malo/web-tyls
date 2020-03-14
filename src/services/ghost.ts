/*
 * @Author: yangyao
 * @Date: 2020-03-02 14:15:54
 * @LastEditors: yangyao
 * @LastEditTime: 2020-03-11 16:56:54
 * @Description: ghost content请求
 */
import GhostContentAPI from "@tryghost/content-api";

export const ghostUrl = "http://tyls.xyz";
export const ghostApiUrl = "http://182.92.78.197";
// ghost请求
export const requeryGhost = (url: string) => {
  return new GhostContentAPI({
    url,
    key: "4d0021d104d8533c9704c96e0b",
    version: "v3"
  });
};

// 更新全局地址为服务器ip地址
export const updateGhostApi = () => {
  window.TYLS_Api = ghostApiUrl;
}
