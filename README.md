# ordering-food
多端案例之《点餐》项目源码

## 项目介绍
### 功能描述
《点餐》项目是一个餐饮商户单商家堂食下单应用。主要功能包括浏览商家主页信息、查看推荐菜品、下单商品、取餐等号等功能。

模板包含前后端，其中前端代码使用 ` avm.js ` 多端技术开发，可同时编译为 ` Android `  &  ` iOS `   ` App ` 以及微信小程序。后端使用 ` APICloud ` 数据云3.0云函数自定义接口。也可以使用自建后端服务实现，

详细了解 [` avm.js `](https://docs.apicloud.com/apicloud3/) 多端开发技术。

详细了解 [数据云服务](https://docs.apicloud.com/Cloud-API/sentosa) 。


### 截图预览
![demo](./demo.png)
## 源码说明

### 源码文件目录结构
项目源码在本仓库的  ` widget ` 目录下。其中该目录下的文件结构如下： 
~~~
┌─component/                项目公共组件目录
│  ├─empty-block.shtml      空数据占位图组件
│  ├─goods-action.shtml     商品下单动作组件
│  ├─goods-counter.shtml    商品加购计数器组件
│  ├─goods-list-item.shtml  主页商品列表单品组件
│  ├─order-item.shtml       订单列表单品组件
│  ├─radio-box.shtml        自定义选择器组件
├─css/                      css样式目录
├─image/                    图片素材图标资源目录
├─pages/                    新版的AVM页面目录
│  ├─goods_add
│  │  └─goods_add.stml      加购浮层
│  ├─goods_detail
│  │  └─goods_detail.stml   商品详情页
│  ├─main_cart
│  │  └─main_cart.stml      主tab-2 购物车页面
│  ├─main_home
│  │  └─main_home.stml      主tab-0 商家主页
│  ├─main_menu
│  │  └─main_menu.stml      主tab-1 点餐菜单页面
│  ├─main_user
│  │  └─main_user.stml      主tab-3 用户主页
│  ├─pay_result
│  │  └─pay_result.stml     支付结果页
│  ├─pending_order
│  │  └─pending_order.stml  待付款结算页
├─script/                   JavaScript脚本目录
└─config.xml                应用配置文件
~~~
### 使用步骤
1. 下载 [` APICloud Studio 3  `](https://www.apicloud.com/studio3#downloadBtn) 作为开发工具。

2. 通过此模板创建应用后，使用 ` Studio 3 ` 导入创建的模板应用项目。步骤： ` Studio 3 ` 顶部菜单-项目-导入项目-云端检出，选择对应项目检出到本地。

3. 手机安装 ` AppLoader ` ，使用 ` AppLoader ` 进行真机同步调试预览，或者为当前项目云编译自定义 ` Loader ` 进行真机同步调试预览，参考 ` WiFi ` 真机同步。小程序可通过 ` Studio 3 ` 编译项目后在微信开发者工具中进行预览。

4. 云编译 生成 ` Android & iOS  ` 应用安装包以及微信小程序源码包。编译iOS之前需先上传 ` iOS ` 证书， ` Android ` 则可直接进行编译。

## 帮助

更多入门步骤请参考 [APICloud多端开发快速上手教程](https://github.com/apicloudcom/hello-app)
