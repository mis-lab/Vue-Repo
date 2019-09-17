import qs from 'querystring';

const TOKEN = '__mislab__token';
export const setToken = token => {
    localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
    let token = localStorage.getItem(TOKEN) || '';
    return token;
};
export const removeToken = () => {
    localStorage.removeItem(TOKEN);
};

// 去除数组中为空的元素，或者为标识位的元素
export const zipArray = (array, flag = '') => {
    let newArray = [...array];
    newArray = newArray.map(item => {
        return item.trim();
    });
    newArray = newArray.filter(item => {
        return item !== flag;
    });

    return newArray;
};

// 注意: 值为undefined、function、symbol 会在转换过程中被忽略,
export const cloneObj = obj => {
    let objStr = JSON.stringify(obj);
    let newObj = JSON.parse(objStr);
    return newObj;
};

export const getJumpUrl = () => {
    const url = new URL(location.href);
    let search = url.search;
    if (search && search.length > 0) {
        search = search.slice(1);
    }
    const params = qs.parse(search);
    if (params.jumpUrl) {
        delete params.jumpUrl;
    }
    return `${url.origin}${url.pathname}?${qs.stringify(params)}`;
};
