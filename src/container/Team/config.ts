export interface TeamListProps {
  title: string; // 姓名
  subtitle: string; // 职位
  desc: string; // 描述
  url: any; // 头像
}

// 团队介绍配置
export const teamListConfig: Array<TeamListProps> = [
  {
    title: "刘吉颖",
    subtitle: "甘肃拓原律师事务所主任",
    desc:
      "刘吉颖，男，汉族，1963年出生，毕业于西北政法大学法律专业，二级律师，中国法学会会员，现任甘肃省律师协会副会长、甘肃拓原律师事务所主任。擅长各类诉讼业务及法律顾问等非诉讼法律事务。联系电话：13993469689",
    url: require("../../assets/images/team_item_1.jpg")
  },
  {
    title: "蓝光明",
    subtitle: "甘肃拓原律师事务所副主任",
    desc:
      "男，汉族，毕业于河北大学法律系，本科学历。现为甘肃拓原律师事务所合伙人、副主任，庆阳市律师协会民事专业委员会主任。擅长民事代理、刑事辩护及非诉讼法律事务。联系电话：18993452121",
    url: require("../../assets/images/team_item_2.jpg")
  },
  {
    title: "邱宪东",
    subtitle: "甘肃拓原律师事务所律师",
    desc:
      "男，汉族，1954年5月28日出生，法律专业专科学历，三级律师；曾任庆阳市司法局律师管理科科长、庆阳市法律援助中心主任；甘肃省律师协会庆阳片区负责人。擅长民事诉讼代理、刑事辩护及各类非诉讼法律事务。联系电话：18293498886",
    url: require("../../assets/images/team_item_3.jpg")
  },
  {
    title: "刘华",
    subtitle: "甘肃拓原律师事务所律师",
    desc:
      "女，汉族，1981年2月16日出生，毕业于兰州大学；甘肃拓原律师事务所主任助理。擅长劳动争议纠纷、建设工程合同类纠纷道路交通事故等民商事诉讼、仲裁业务、企业法律顾问等非诉讼法律事务。联系电话：13629341094",
    url: require("../../assets/images/team_item_4.jpg")
  },
  {
    title: "陈思涵",
    subtitle: "甘肃拓原律师事务所律师",
    desc:
      "女，汉族，1982年4月18日出生，西北大学法律硕士，甘肃拓原律师事务所兼职律师；主办民事诉讼与非诉业务，擅长婚姻家庭、各类合同纠纷、公司法律事务等。联系电话：18993450521",
    url: require("../../assets/images/team_item_5.jpg")
  },
  {
    title: "刘向辉",
    subtitle: "甘肃拓原律师事务所律师",
    desc:
      "男，汉族，大学本科学历，法学学士，主要从事民商事诉讼诉讼与非诉讼代理业务，尤其擅长民间借贷、各类合同、交通事故、 人身损害赔偿、婚姻家庭等类型案件的法律实务及政府与企业法律顾问业务。联系电话：15101868930",
    url: require("../../assets/images/team_item_6.jpg")
  },
  {
    title: "张恒祥",
    subtitle: "甘肃拓原律师事务所律师",
    desc:
      "男，汉族，1990年出生，毕业于陇东学院法学专业，大学本科学历，甘肃拓原律师事务所专职律师。现担任多家企事业单位法律顾问，擅长领域：民事案件代理、道交事故赔偿纠纷、企业法律顾问、合同纠纷、婚姻家庭案件。联系电话：15294480789",
    url: require("../../assets/images/team_item_7.jpg")
  },
  {
    title: "张馨尹",
    subtitle: "甘肃拓原律师事务所实习律师",
    desc:
      "女，汉族，1996年出生，毕业于西南石油大学，现为甘肃拓原律师事务所律师。联系电话：18190825300",
    url: require("../../assets/images/team_item_8.jpg")
  },
  {
    title: "魏鑫强",
    subtitle: "甘肃拓原律师事务所实习律师",
    desc:
      "男，汉族，大学本科学历，毕业于湖南师范大学。曾任职于深圳华为技术有限公司，现为甘肃拓原律师事务所律师。联系电话：15291995831",
    url: require("../../assets/images/team_item_9.jpg")
  },
  {
    title: "崔亚莉",
    subtitle: "甘肃拓原律师事务所实习律师",
    desc:
      "女，汉族，1981年1月出生，毕业于西北师范大学，拓原律师事务所兼职律师。联系电话：13993485152",
    url: require("../../assets/images/team_item_10.jpg")
  },
  {
    title: "王美宝",
    subtitle: "甘肃拓原律师事务所实习律师",
    desc:
      "女，汉族，1996年出生，毕业于天津师范大学，本科学士学位，现为甘肃拓原律师事务所律师。 联系电话：18202235238",
    url: require("../../assets/images/team_item_11.jpg")
  },
  {
    title: "张帅",
    subtitle: "甘肃拓原律师事务所实习律师",
    desc:
      "女，汉族，1993年出生，甘肃政法学院法律硕士，现为甘肃拓原律师事务所律师。 联系电话：17709349072",
    url: require("../../assets/images/team_item_12.jpg")
  }
];
