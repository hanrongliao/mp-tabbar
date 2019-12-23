#  mp-tabbar

微信小程序tabbar, tab item自动滚动到中间

  

###  使用

将 `components/tabbar/` 目录下的tabbar组件文件添加到小程序工程下，在page中按照[微信小程序的组件使用规则使用](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

  

###  参数
|    参数名    | 描述     |
| ----------  | ---     | 
| tabs        | 必须，类型 Sting Array, 存放tab items |
| curTabIndex | 非必须, 类型Number，默认0，表示当前选选择的item |

###  事件

点击 item会触发 `change` 事件，回调参数是当前item的  `index`