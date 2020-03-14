/*
 * @Author: yangyao
 * @Date: 2020-02-28 17:07:51
 * @LastEditors: yangyao
 * @LastEditTime: 2020-02-28 17:16:12
 * @Description: 处理时间的工具
 */
// 判断时间是否小于10
const isLessThanTen = (value) => {
    return value < 10 ? `0${value}` : value;
}
/**
 * @description: 时间戳转换成标准时间格式 
 * @param {type} time:string
 * @return: string
 */
export const transformNorm = (time: string) => {
    var d = new Date(time);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    return `${year}-${month}-${date} ${hours}:${isLessThanTen(minutes)}:${isLessThanTen(seconds)}`;
}
