import { Message as iMessage } from 'iview';

export const Message = {
    showResponse: (method, response, actionName) => {
        let messagePrefix = '';
        if (actionName) {
            messagePrefix = actionName + ',';
        }
        if (response && response.status) {
            if (response.status.code === 100004) {
                // 不处理，因为在http拦截器里面已经处理了
            } else {
                iMessage[method](`${messagePrefix}${response.status.des}`);
            }
        } else {
            iMessage[method](`${messagePrefix}未知错误`);
        }
    },
    infoResponse: (response, actionName) => {
        Message.showResponse('info', response, actionName);
    },
    warnResponse: (response, actionName) => {
        Message.showResponse('warning', response, actionName);
    },
    errorResponse: (response, actionName) => {
        Message.showResponse('error', response, actionName);
    }
};
