const config = {
    schema: 'https',
    host: 'a7777777777777-pd.apicloud-saas.com',
    path: 'api'
}

function req(options) {
    const baseUrl = `${config.schema}://${config.host}/${config.path}/`;
    options.url = baseUrl + options.url;
    return new Promise((resolve, reject) => {
        let Cookie = api.getPrefs({sync: true, key: 'COOKIE'});
        if (Cookie) {
            if (options.headers) {
                options.headers.Cookie = Cookie;
            } else {
                options.headers = {Cookie};
            }
        }
        api.ajax(options, function (ret, err) {
            console.log('[' + options.method + '] ' + options.url + ' [' + api.winName + '/' + api.frameName + ']\n' + JSON.stringify({
                ...options, ret, err
            }))
            if (ret) {
                if (ret.status === 0 || ret.code === 0) {
                    resolve(ret.data ? ret.data : ret)
                } else {
                    reject(ret);
                    if (typeof options.error === "function") {
                        options.error(ret)
                    } else {
                        api.alert({
                            title: ret.msg,
                            msg: `服务端错误代码:[${ret.code}]`
                        })
                    }
                }
            } else {
                const errNames = ['连接错误', '超时', '授权错误', '数据类型错误', '不安全的数据']
                console.log([errNames[err.code], JSON.stringify(err)]);
                reject(err);

                if (typeof options.fail === "function") {
                    options.fail(err)
                } else {
                    api.toast({
                        msg: `${errNames[err.code]}[${err.code}]\n${err.msg}`,
                        location: 'top',
                        duration: 2500
                    })
                }

            }
        });
    })
}

/**
 * GET请求快捷方法
 * @constructor
 * @param url {string} 地址
 * @param options {Object} 附加参数
 */
function GET(url, options = {}) {
    return req({
        ...options, url, method: 'GET'
    });
}

/**
 * POST 请求快捷方法
 * @param url
 * @param data
 * @param options {Object} 附加参数
 * @returns {Promise<Object>}
 * @constructor
 */
function POST(url, data, options = {}) {
    return req({
        ...options, url, method: 'POST', data: {
            values: data
        }
    });
}

export {
    req, GET, POST, config
}
