import http from '../utils/http';

// 登陆
export const login = async data => {
    return await http.post(`/login`, data);
};
