'use strict'

const config = {
  sideItems: [
    {
      class: 'iconfont icon-person',
      title: '基本信息',
      bs: 'span',
      '姓名': 'XXX',
      '学历': '本科',
      '毕业院校': 'XXXXX大学',
      '毕业年份': '2012',
      '所学专业': 'GIS'
    },
    {
      class: 'iconfont icon-call',
      title: '联系方式',
      bs: 'span',
      '电话': '150XXXXXXXX',
      'QQ': '467634986',
      '邮箱': '467634986@qq.com',
      '个人主页': 'rtwith.com',
      'GitHub': 'github.com/XBC125905'
    },
    {
      class: 'iconfont icon-star',
      title: '技能点',
      bs: 'progress',
      'JavaScript': '80',
      'Html/Css': '70',
      'Python': '60',
      'Android': '40',
      'GIS数据处理': '80'
    },
    {
      class: 'iconfont icon-build',
      title: '技术栈',
      bs: 'span',
      '语言': 'JavaScript,Python,C#,Java,C++',
      '前端': 'jQuery,Requirejs,Knockout,Vue',
      '后端': 'NodeJs,Oracle,MongoDB',
      '开发IDE': 'Webstorm,VS,WingIDE,AndroidStudio,Eclipse',
      '数据处理软件': 'ArcGIS,SuperMap,FME',
      '其他': 'Android,微信公众号'
    },
    {
      class: 'iconfont icon-weixin',
      title: '个人微信',
      bs: 'img',
      src: './static/assets/img/weixin.png'
    }
  ],
  mainItems: [
    {
      class: 'iconfont icon-education',
      title: '教育经历',
      bs: 'li',
      '北京邮电大学 - 网络工程专业（本科）2012-2017': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      class: 'iconfont icon-work',
      title: '工作经历',
      bs: 'li',
      '北京创客空间－实习生（实习）': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      '实验楼－课程内容（实习）': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      class: 'iconfont icon-project',
      title: '参与项目',
      bs: 'li',
      '基于 Qt 5 的文本编辑器': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      '基于 Flask 的主机监视系统': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      '基于 Live2D 与 clmtrackr 的山寨 Facerig': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      '如果项目太少，可以在实验楼上找项目做啊:D': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      class: 'iconfont icon-trophy',
      title: '奖项与证书',
      bs: 'li',
      '小学生作文二等奖': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。',
      '曾获统一冰红茶“再来一瓶”奖': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。',
      '这一行也是为了凑版面': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。'
    },
    {
      class: 'iconfont icon-flower',
      title: '自我评价',
      bs: 'p',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
}

module.exports = config
