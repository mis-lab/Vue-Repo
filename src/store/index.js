import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import app from './module/app';

Vue.use(Vuex);

function objDeleteKey(obj, keyPath) {
    let deepObj = obj;
    let keyPathArr = keyPath.split('.');
    // 循环路径
    for (var i = 0, len = keyPathArr.length; i < len; i++) {
        if (i === len - 1) {
            delete deepObj[keyPathArr[i]];
        } else {
            deepObj = deepObj[keyPathArr[i]];
        }
    }
}
export default new Vuex.Store({
    plugins: [
        createPersistedState({
            paths: [],
            reducer(store, paths) {
                var storeCopy = JSON.parse(JSON.stringify(store));
                paths.forEach(key => {
                    objDeleteKey(storeCopy, key);
                });
                return storeCopy;
            }
        })
    ],
    state: {
    //
    },
    mutations: {
    //
    },
    actions: {
    //
    },
    modules: {
        app
    }
});
