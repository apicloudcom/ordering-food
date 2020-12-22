/**
 * 判断当前是否是小程序环境
 * 2020-11-24  暂用 api.uiMode模拟
 * 后期需修正为  api.platform
 * @returns {boolean}
 */
function isMP() {
    return !api.uiMode;
}

/**
 * 获取用户信息
 * @returns {boolean|any}
 */
function getUser() {
    let user = api.getPrefs({
        sync: true,
        key: 'USER'
    });
    if (user) {
        return JSON.parse(user)
    }
    return false;
}

/**
 * 统一设置底部tabBar的数字小红点
 * @param index
 * @param text
 */
function setTabBarBadge(index, text) {
    text += '';
    if (isMP()) {
        if (text === '0') {
            wx.removeTabBarBadge({index});
        } else {
            wx.setTabBarBadge({index, text});
        }
    } else {
        api.setTabBarItemAttr({index, badge: {text, color: '#FFF'}});
    }
}


const tabFrames = [{
    "name": "home",
    "url": "/pages/main_home/main_home",
    "title": "首页"
}, {
    "name": "doc",
    "url": "/pages/main_menu/main_menu",
    "title": "菜单"
}, {
    "name": "about",
    "url": "/pages/main_cart/main_cart",
    "title": "购物车"
}, {
    "name": "about",
    "url": "/pages/main_user/main_user",
    "title": "我的"
}];

/**
 * 统一设置tabBar的index 解决小程序端无法在TabBar中处理切换事件的问题
 * @param index 目标索引值
 * @param scroll 是否开启滚动过度
 */
function setTabBarIndex(index, scroll = true) {
    if (isMP()) {

        const pageStack = getCurrentPages();

        if (pageStack.length === 1) {

            console.log(tabFrames[index])

            wx.switchTab(tabFrames[index])
        } else {
            console.log("二级页面切换待处理")
        }

    } else {
        api.sendEvent({
            name: 'SET-TAB-INDEX',
            extra: {
                index,
                scroll
            }
        })
    }
}

/**
 * 获取设备标识
 * @returns {ConstrainDOMString | string | boolean}
 */
function getDeviceId(){
    return api.deviceId;
}
export {
    isMP, getUser, setTabBarBadge, setTabBarIndex,getDeviceId
}