'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
       * built-in config
       * @type {Egg.EggAppConfig}
       **/
    const config = exports = {
        Db: {
            xmw: {
                dialect: 'mysql',
                database: 'vue2_baiwumm_com',
                host: '127.0.0.1',
                username: 'root',
                password: '123456',
                dialectOptions: {
                    dateStrings: true,
                    typeCast: true,
                },
                timezone: '+08:00', // 保存为本地时区
                port: 3306,
                dialectOptions: {
                    dateStrings: true,
                    typeCast(field, next) {
                        if (field.type === 'DATETIME') {
                            return field.string();
                        }
                        return next();
                    },
                },
            },
        },
    };
    // websocket消息推送
    config.io = {
        namespace: {
            '/': {
                connectionMiddleware: ['auth'],
                packetMiddleware: ['filter'],
            },
        },
    };
    // redis客户端
    config.redis = {
        client: {
            port: 6379, // Redis port
            host: '127.0.0.1', // Redis host
            password: '',
            db: 0,
        },
    };
    // 配置需要的中间件，数组顺序即为中间件的加载顺序
    config.middleware = ['tokenAuthentication', 'params'],
        config.cluster = {
            listen: {
                port: 7001,
                hostname: '127.0.0.1',
                // path: '/var/run/egg.sock',
            },
        },
        config.session = {
            key: 'SESSION_ID', // eggjs默认session的key
            maxAge: 3 * 24 * 3600 * 1000, // 3 day
            httpOnly: true,
            encrypt: true,
            signed: true,
            renew: true, // 每次访问页面都会给session会话延长时间
        };
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1600307035362_2124';
    config.proxy = true;
    config.expiresIn = 3 * 24 * 60 * 60;// token过期时间 单位秒，默认3天
    config.privateKey = 'Xmingwei'; // token密钥，生成解析token
    // 取消安全证书验证
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*'], // 白名单
    };
    config.cors = {
        origin: '*', // 跨任何域
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 被允许的请求方式
        credentials: true, // 支持cookie跨域
    };
    // 文件上传
    config.multipart = {
        fileSize: '2mb',
        mode: 'stream',
        whitelist: ['.jpg', '.jpeg', '.png', '.xlsx', 'xls'],
    };
    return {
        ...config,
    };
};
