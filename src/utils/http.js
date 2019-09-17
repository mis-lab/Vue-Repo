import axios from 'axios';
import CONFIG from '../config';
import * as utils from 'utils';
import router from '../router';
import { Message } from 'iview';
import debounce from 'lodash.debounce';

const ENV = process.env.VUE_APP_ENV;
const baseUrl = CONFIG.baseUrl[ENV] || CONFIG.baseUrl.dev;
const config = {
    baseURL: baseUrl,
    responseType: 'json'
};

const http = axios.create(config);
http.interceptors.request.use(
    function(config) {
        config.headers.authorization = utils.getToken();
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

let messageDebounce = debounce(function(msg, type = 'warning') {
    Message[type](msg);
}, 500);

http.interceptors.response.use(
    function(res) {
        try {
            let { status } = res.data;
            if (
                status.code === 100004 &&
        location.pathname.indexOf('/ssoLogin') === -1
            ) {
                router.replace(
                    `/ssoLogin?jumpUrl=${utils.getJumpUrl()}&fromPortal=true`
                );
                // 业务内部不提示消息
                res.data = res.data || {};
                res.data._no_show_msg = true;
                return res.data;
            }
        } catch (e) {
            messageDebounce(`错误->${e.stack}`, 'error');
            // 业务内部不提示消息
            res.data = res.data || { _no_show_msg: true };
        }
        return res.data;
    },
    function(error) {
        if (error.message !== 'cancel') {
            messageDebounce(`错误->${error.message}`, 'error');
        }
        // Do something with request error
        return Promise.reject(error);
    }
);

export default http;
